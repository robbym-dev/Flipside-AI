import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomSheet from '../../components/BottomSheet';
import Rabbithole from '../../components/Rabbithole/Rabbithole';
import Narratives from '../../components/Narratives/Narratives';
import { useFeed, FeedProvider } from '../FeedContext';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const { feedId, setFeedId } = useFeed();

  return (
    <Tab.Navigator
      initialRouteName="Page2"
      screenOptions={{
        tabBarActiveTintColor: '#eb5e28',
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold'},
        tabBarItemStyle: { flex: 1/3},
        tabBarStyle: { backgroundColor: '#F0EBE3', display: 'none' },
        tabBarIndicatorStyle: { backgroundColor: '#eb5e28' },
        swipeEnabled: true,
      }}
    >
      <Tab.Screen
        name="Page1"
        component={Narratives}
        options={{ tabBarLabel: 'Narratives' }}
        initialParams={{ id: feedId, }}
      />
      <Tab.Screen
        name="Page2"
        component={BottomSheet}
        options={{ tabBarLabel: 'News Feed' }}
        initialParams={{ id: feedId, updatePage: setFeedId}}
      />
      <Tab.Screen
        name="Page3"
        component={Rabbithole}
        options={{ tabBarLabel: 'Rabbithole' }}
        initialParams={{ id: feedId}}
      />
    </Tab.Navigator>
  );
}

export default function CourseScreen() {
  return (
    <SafeAreaProvider>
      <FeedProvider>
        <MyTabs />
      </FeedProvider>
    </SafeAreaProvider>
  );
}
