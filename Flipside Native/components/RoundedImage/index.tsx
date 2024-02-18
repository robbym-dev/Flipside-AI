import React, {useEffect, useState} from 'react';
import { View, Image, Text } from 'react-native';
import storage from '@react-native-firebase/storage';

const RoundedImage = (props: {source: string, text: string, id: string}) => {
    const [imageURL, setimageURL] = useState('');

    useEffect(() => {
        async function getImageURL() {
          const ref = storage().ref(`creator-content/askvinh/${props.id}/${props.source}.jpg`);
          const url = await ref.getDownloadURL();
          setimageURL(url);
        }
        getImageURL();
      }, [props.id]);

    return (
        <View style={{flex: 1, height: 380, width: 300, borderRadius: 15, marginHorizontal: 5, flexDirection: 'column', backgroundColor: '#222'}}>
            <Image source={{uri: imageURL}} style={{height: 300, aspectRatio: 1, resizeMode: 'cover', borderRadius: 15,}}/>
            <View style={{flex: 1, height: 50, width: 300, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: '#ddd', fontSize: 18, fontWeight: 'bold', marginHorizontal: 10}}>
                    {props.text}
                </Text>
            </View>
        </View>
    )
    
}
export default RoundedImage;
