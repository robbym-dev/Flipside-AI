import React from 'react';
import { View, TouchableOpacity, Text, Dimensions, Image } from 'react-native';
import Animated, { interpolate, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Film, AlignLeft, ChevronLeft } from "react-native-feather";


const TopBar = (props: {title: string}) => {
    const animatedIndex = useSharedValue(0);
    const [viewMode, setViewMode] = React.useState('video');

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withSpring(animatedIndex.value, { stiffness: 500, damping: 30, mass: 1 }) }],
        };
    });

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 100, backgroundColor: '#252422', paddingTop: 50, paddingLeft: 10, paddingRight: 10 }}>
            <TouchableOpacity
                style={{ width: 100, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            >
                {/* <ChevronLeft stroke={'white'} width={20} height={20} /> */}
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{props.title}</Text>
            </TouchableOpacity>
            {/* <Image
            source={require('../../assets/ClipverseTextLogo.png')}
            style={{ width: 100, height: 50, resizeMode: 'contain' }}
        /> */}
            {/* <View style={{ width: 100, alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'row', height: 35, width: 70, borderRadius: 5 }}>
                    <Animated.View
                        style={[
                            { position: 'absolute', height: 35, width: 35, backgroundColor: '#222', borderRadius: 5 },
                            animatedStyle,
                        ]}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            animatedIndex.value = 0;
                            setViewMode('video');
                            toggleView();
                        }}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}
                    >
                        <Film stroke={viewMode === 'video' ? 'white' : '#777'} width={20} height={20} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            animatedIndex.value = 35;
                            setViewMode('text');
                            toggleView();
                        }}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}
                    >
                        <AlignLeft stroke={viewMode === 'text' ? 'white' : '#777'} width={20} height={20} />
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>
    );
};

export default TopBar;
