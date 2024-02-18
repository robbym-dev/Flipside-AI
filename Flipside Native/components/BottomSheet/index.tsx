import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import VideoList from '../VideoList/VideoList';
import TextScroll from '../TextScroll';
import { MessageCircle, Pocket, Book,  Bookmark} from 'react-native-feather';
import FullItem from '../FullItem/FullItem';
import TopBar from '../TopBar/index';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const { height, width  } = Dimensions.get('window');

const App = (props: {id: string, updatePage: (page: number) => void}) => {

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    firestore()
      .collection('newsArticles')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        setData(data);
      });
  }, []);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation();

  const [sheetMode, setSheetMode] = useState<'collapsed' | 'expanded'>('collapsed');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  // variables
  const snapPoints = useMemo(() => [120, height - 250], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    setSheetMode(index > 0 ? 'expanded' : 'collapsed');
  }, []);

  const updatePageFromList = (page: number) => {
    props.route.params.updatePage(page);
  }

  useEffect(() => {
    console.log('Loaded BottomSheet')
  }, [])

  const summaryText = "This is a summary, This is a summary, This is a summary, This is a summary, This is a summary, This is a summary, This is a summary, This is a summary, This is a summary."

  return (
      <View style={{flex: 1, width: width, height: height - 70, position: 'absolute', bottom: 0}}>
        <TopBar title={'News Feed'}/>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundStyle={{ backgroundColor: '#F0EBE3' }}
          handleIndicatorStyle={{ backgroundColor: '#403d39' }}
          backdropComponent={() => <VideoList data={data} updatePage={updatePageFromList}/>}
        >
          <View style={styles.contentContainer}>
            <View style={{ height: 130, flex: 1, flexDirection: 'row', marginTop: 0, marginBottom: 10 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Page1')} style={[styles.button, {backgroundColor: '#252422'}]}>
                  <Book color={'#fff'} size={24} style={{ textAlign: 'center', opacity: 0.8 }} />
                  <Text style={[styles.buttonText, {color: '#fff'}]}>Narratives</Text>
              </TouchableOpacity>
              {subscribed ?
                <TouchableOpacity onPress={() => setSubscribed(false)} style={[styles.button, { backgroundColor: '#fff' }]}>
                  <Bookmark color={'#000'} size={24} style={{ textAlign: 'center', opacity: 0.8 }} />
                  <Text style={styles.buttonText}>Subscribed</Text>
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => setSubscribed(true)} style={[styles.button, { backgroundColor: '#ccc5b9' }]}>
                  <Bookmark color={'#000'} size={24} style={{ textAlign: 'center', opacity: 0.8 }} />
                  <Text style={styles.buttonText}>Subscribe</Text>
                </TouchableOpacity>
              }
              <TouchableOpacity onPress={() => navigation.navigate('Page3')} style={[styles.button, { backgroundColor: '#eb5e28' }]}>
                  <Pocket color={'#000'} size={24} style={{ textAlign: 'center', opacity: 0.8 }} />
                  <Text style={[styles.buttonText]}>Rabbithole</Text>
              </TouchableOpacity>
            </View>
            {sheetMode === 'expanded' ? 
              <FullItem data={data}/> : null
            }
          </View>
        </BottomSheet>
      </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleText: {
    color: '#bbb',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 20,
  },
  text: {
    color: '#888',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 50,
  },
  button: {
    flex: 1,
    backgroundColor: '#ddd',
    margin: 5,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1.5,
    padding: 20,
},
buttonToTop: {
    flex: 1,
    backgroundColor: '#222',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    flexDirection: 'row',
},
buttonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.7,
},
buttonToTopText: {
    color: '#ddd',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5,
},
});

export default App;