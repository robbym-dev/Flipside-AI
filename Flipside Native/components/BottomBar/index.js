import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import Animated, { interpolate, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Home, Book, User, Pocket  } from "react-native-feather";

const { width } = Dimensions.get('window');

const BottomBar = ({ state, navigation }) => {
  const animatedIndex = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(animatedIndex.value, { stiffness: 500, damping: 30, mass: 1 }) }],
    };
  });

  return (
    <View style={{ flexDirection: 'row', height: 70, backgroundColor: '#F0EBE3', paddingBottom: 5}}>
      <Animated.View
        style={[
          { position: 'absolute', bottom: 12.5, height: 50, width: width / 4, backgroundColor: '#fffcf2', borderRadius: 12 },
          animatedStyle,
        ]}
      />
      {state.routes.map((route, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate(route.name);
            animatedIndex.value = (width / 4) * index;
          }}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          {
            route.name === 'Home' ? (
                <Home stroke={state.index === index ? '#403d39' : '#ccc5b9'} />
            ) : route.name === 'Saved' ? (
                <Pocket stroke={state.index === index ? '#403d39' : '#ccc5b9'} />
            ) : route.name === 'Profile' ? (
                <User stroke={state.index === index ? '#403d39' : '#ccc5b9'} />
            ) : (
                <Book stroke={state.index === index ? '#403d39' : '#ccc5b9'} />
            )
          }
          
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomBar;
