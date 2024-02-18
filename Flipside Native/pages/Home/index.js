import React from 'react';
import { View, Text, StatusBar, useColorScheme,} from 'react-native';
import BottomSheet from '../../components/BottomSheet';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TextScroll from '../../components/TextScroll';

const HomeScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <View style={{flex: 1}}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <Text>Home</Text>
            <TextScroll />
        </View>
    );
};

export default HomeScreen;