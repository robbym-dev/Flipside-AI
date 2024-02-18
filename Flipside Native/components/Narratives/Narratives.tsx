import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Animated, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Copy, Pocket, ExternalLink, ChevronRight, ChevronDown, Feather } from 'react-native-feather';
import ImageSlider from '../ImageSlider';
import AudioPlayer from '../AudioPlayer';
import Accordion from 'react-native-collapsible/Accordion';
import TextViewNavigator from '../TextViewNavigator';
import TopBar from '../TopBar/index';
import { useFeed } from '../../pages/FeedContext';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Narrative from '../Narrative/Narrative';
import firestore from '@react-native-firebase/firestore';

const Tab = createMaterialTopTabNavigator();

const MyTabs = (props: { narratives: any[] }) => {
  return (
    props.narratives && (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#eb5e28',
          tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold' },
          tabBarItemStyle: { flex: 1 / 3 },
          tabBarStyle: { backgroundColor: '#fffcf2' },
          tabBarIndicatorStyle: { backgroundColor: '#eb5e28' },
          swipeEnabled: true,
        }}
      >
        {props.narratives.map((item, index) => (
          console.log('Narrative:', item.title, index),
          <Tab.Screen
            name={item.title}
            component={Narrative}
            initialParams={{ imageURL: item.imageURL, content: item.content }}
            key={index}
          />
        ))}
      </Tab.Navigator>
    )
  );
}

export default function Narratives() {
  const [dataset, setDataset] = useState<any[]>([]);
  const { feedId } = useFeed();

  useEffect(() => {
    const fetchPerspectivesAtIndex = async (index) => {
      const newsArticlesRef = firestore().collection('newsArticles');

      try {
      
        const snapshot = await newsArticlesRef.get();
        const documents = snapshot.docs;

        if (documents.length > index) {
          const documentId = documents[index].id; // Get the ID of the document at the specified index
          const documentData = documents[index].data(); // Get data of the document if needed

         
          const perspectivesSnapshot = await newsArticlesRef.doc(documentId).collection('perspectives').get();
          const perspectives = perspectivesSnapshot.docs.map(doc => doc.data());

          setDataset([{ ...documentData, perspectives }]);
        } else {
          
          setDataset([]);
        }
      } catch (error) {
      
        setDataset([]);
      }
    };

    const documentIndex = feedId; // The index of the document you want to fetch
    fetchPerspectivesAtIndex(documentIndex);
  }, [feedId]); // Consider adding dependencies if the index is dynamic or comes from props/state

  return (
    <SafeAreaProvider style={styles.container}>
      <TopBar title={'Narratives'} />
      <Text style={styles.title} >{dataset[0]?.title}</Text>
      <MyTabs narratives={dataset[0]?.perspectives} key={feedId} />
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffcf2',
  },
  contentContainer: {
    padding: 10,
    marginBottom: 110,
  },
  description: {
    color: '#bbb',
    fontSize: 24,
    lineHeight: 35,
    fontWeight: 'bold',
    margin: 10,
  },
  text: {
    fontSize: 21,
    textAlignVertical: 'left',
    marginBottom: 10,
    color: '#252422',
  },
  title: {
    color: '#252422',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 15,
  },
  transcript: {
    color: '#bbb',
    fontSize: 18,
    lineHeight: 35,
    fontWeight: 'bold',
    margin: 10,
    fontFamily: 'monospace',
  },
  button: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
