import React, {useEffect, useState} from 'react';
import TrackPlayer, { useProgress, Capability } from 'react-native-track-player';
import { View, Text, TouchableOpacity } from 'react-native';
import { Play, Pause } from 'react-native-feather';
import { Slider } from '@react-native-assets/slider'

const track2 = {
    url: require('../../assets/audio/1.wav'), // Load media from the app bundle
    title: 'Audio',
    artist: 'Content Creator',
    artwork: require('../../assets/images/1.jpg'), // Load artwork from the app bundle
    duration: 100
};

TrackPlayer.setupPlayer().then(async () => {
    TrackPlayer.updateOptions({
        // Media controls capabilities
        capabilities: [
            Capability.Play,
            Capability.Pause,
        ],
    
        // Capabilities that will show up when the notification is in the compact form on Android
        compactCapabilities: [Capability.Play, Capability.Pause],

        playIcon: require('../../assets/images/1.jpg'),
        pauseIcon: require('../../assets/images/1.jpg'),
    });

    // Adds a track to the queue
    await TrackPlayer.add(track2);
});

const AudioPlayer = () => {
    const progress = useProgress();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const startPlayer = async () => {
            try {
                await TrackPlayer.play();
            } catch (error) {
                console.error(error);
            }
        };
        const stopPlayer = async () => {
            try {
                await TrackPlayer.pause();
            } catch (error) {
                console.error(error);
            }
        }
        if (isPlaying) {
            startPlayer();
        } else {
            stopPlayer();
        }
    }, [isPlaying]);

    // Resest playback once the song is over
    useEffect(() => {
        if (progress.position >= progress.duration) {
            TrackPlayer.seekTo(0);
            setIsPlaying(false);
        }
    }, [progress.position, progress.duration]);

    return (
        <View style={{flex: 1, height: 60, flexDirection: 'row', margin: 10, justifyContent: 'space-between', alignItems: 'center'}}>
            { !isPlaying ? (
                <TouchableOpacity onPress={() => setIsPlaying(true)} style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222', borderRadius: 12}}>
                    <Play color={'#ddd'} size={24} style={{marginLeft: 2}} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => setIsPlaying(false)} style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#bbb', borderRadius: 12}}>
                    <Pause color={'#222'} size={24} />
                </TouchableOpacity>
            )}
            <Slider
                style={{flex: 1, marginHorizontal: 20,}}
                minimumValue={0}
                maximumValue={progress.duration}
                value={progress.position}
                onValueChange={(value) => TrackPlayer.seekTo(value)}
                minimumTrackTintColor='#999'
                maximumTrackTintColor='#222'
                thumbTintColor='#bbb'  
                slideOnTap={true}
                thumbStyle={{width: 15, height: 15, borderRadius: 5}}
                trackStyle={{height: 6, borderRadius: 2}}     
            />
        </View>
    );
};

export default AudioPlayer;