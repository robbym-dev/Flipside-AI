import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomTabBar from './components/BottomBar';

import HomeScreen from './pages/Home';
import CourseScreen from './pages/Course';
import SavedScreen from './pages/Saved';
import ProfileScreen from './pages/Profile';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={CourseScreen} />
        <Tab.Screen name="Course" component={CourseScreen} /> 
        <Tab.Screen name="Saved" component={CourseScreen} />
        <Tab.Screen name="Profile" component={CourseScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
