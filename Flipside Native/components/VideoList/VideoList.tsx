import React, {createRef, useState, useEffect, useRef, memo, useCallback} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import SummaryItem  from '../SummaryItem/SummaryItem';
import {styles} from './styles';
import storage from '@react-native-firebase/storage';
import {useFeed} from '../../pages/FeedContext';

const courseContent = require('../../server/askvinh/clipverse_content_v1.json');
let videos: string[] = [];
for (let i = 0; i < courseContent.length; i++) {
  for (let j = 0; j < courseContent[i]['videos'].length; j++) {
    const videoURL = courseContent[i]['videos'][j]['video_id'];
    videos.push(videoURL);
  }
}

const viewabilityConfig = {
  itemVisiblePercentThreshold: 60,
};

const VideoList = (parentProps: {data: any[], updatePage: (page: number) => void}) => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const mediaRefs = useRef(Array(parentProps.data.length).fill(null));
  let currentIndex = 0;
  const { feedId } = useFeed();
  console.log('Feed ID: ' + parentProps.data)

  const renderItem = ({item, index}) => {
    const backgroundColor = index % 2 === 0 ? '#000' : '#fff';
    const itemData = parentProps.data[index];
    console.log('Item Data: ' + itemData);
    return (
      <View style={[styles.item, {backgroundColor}]}>
        <SummaryItem imageURL={itemData.imageURL} title={itemData.title} summary={itemData.summary} ref={VideoItemRef => (mediaRefs.current[index] = VideoItemRef)}/>
      </View>
    );
  };

  const onViewableItemsChanged = useRef(props => {
    const changed = props.changed;
    changed.forEach(item => {
      const cell = mediaRefs.current[item.index];
      console.log('Cell: ' + cell);
      if (cell) {
        if (item.isViewable) {
          // cell.play();
          if (currentIndex !== props.viewableItems[0].index) {
            currentIndex = props.viewableItems[0].index;
            console.log('Playing video ' + props.viewableItems[0].index)
            parentProps.updatePage(props.viewableItems[0].index);
          }
        } else {
          // cell.pause();
        }
      }
    });
  });

  return (
    <View style={styles.container}>
      <FlatList
          renderItem={renderItem}
          data={parentProps.data}
          pagingEnabled={true}
          keyExtractor={(item, index) => index.toString()}
          removeClippedSubviews={true}
          viewabilityConfig={viewabilityConfig}
          snapToAlignment={"start"}
          decelerationRate={"fast"}
          snapToInterval={Dimensions.get("window").height - 250}
          disableIntervalMomentum={true}
          style={{marginBottom: 180}}
          onViewableItemsChanged={onViewableItemsChanged.current}
          initialScrollIndex={feedId}
          getItemLayout={(data, index) => (
            {length: Dimensions.get("window").height - 250, offset: (Dimensions.get("window").height - 250) * index, index}
          )}
      />
    </View>
  );
};

export default React.memo(VideoList);
