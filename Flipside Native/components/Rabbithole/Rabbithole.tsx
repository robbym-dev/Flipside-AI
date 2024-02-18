import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Animated, TouchableOpacity, Image, Dimensions, ReactNode } from 'react-native';
import { Copy, Pocket, ExternalLink, ChevronRight, ChevronDown, Feather } from 'react-native-feather';
import ImageSlider from '../ImageSlider';
import AudioPlayer from '../AudioPlayer';
import Accordion from 'react-native-collapsible/Accordion';
import TextViewNavigator from '../TextViewNavigator';
import TopBar from '../TopBar/index';
import { Chat, MessageType, defaultTheme } from '@flyerhq/react-native-chat-ui'
import axios from 'axios';
import { useFeed } from '../../pages/FeedContext';
import firestore from '@react-native-firebase/firestore';

const { height, width } = Dimensions.get('window');

// For the testing purposes, you should probably use https://github.com/uuidjs/uuid
const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.floor(Math.random() * 16)
        const v = c === 'x' ? r : (r % 4) + 8
        return v.toString(16)
    })
}

const Rabbithole = (props: { id: string }) => {
    const [suggest, setSuggest] = useState(true);
    const [dataset, setDataset] = useState<any[]>([]);
    const { feedId } = useFeed();

    useEffect(() => {
        firestore()
        .collection('newsArticles')
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            setDataset(data);
            console.log(data)
            setMessages([{
                author: { id: '06c33e8b-e835-4736-80f4-63f44b88666c' },
                createdAt: Date.now(),
                id: uuidv4(),
                text: `Let's dive deeper into \"${data ? data[feedId]?.title : 'Loading'}\"`,
                type: 'text',
            }]);
        });
    }, [feedId]);

    const [messages, setMessages] = useState<MessageType.Any[]>([{
        author: { id: '06c33e8b-e835-4736-80f4-63f44b88666c' },
        createdAt: Date.now(),
        id: uuidv4(),
        text: `Let's dive deeper into \"${dataset ? dataset[feedId]?.title : 'Loading'}\"`,
        type: 'text',
    }])
    const user = { id: '06c33e8b-e835-4736-80f4-63f44b66666c' }

    let lastMessageId = messages.length > 0 ? messages[0].id : null;

    const fakeMessage: MessageType.Text = {
        author: { id: '06c33e8b-e835-4736-80f4-63f44b88666d' },
        createdAt: Date.now(),
        id: uuidv4(),
        text: "",
        type: 'text',
    }

    const addMessage = (message: MessageType.Any) => {
        setMessages(currentMessages => [message, ...currentMessages]);
    }


    const generateResponse = (message: string) => {
        const response: MessageType.Text = {
            author: { id: '06c33e8b-e835-4736-80f4-63f44b88666c' },
            createdAt: Date.now(),
            id: uuidv4(),
            text: message,
            type: 'text',
        }
        addMessage(response);
    }

    const sendDataToServer = async (data: any) => {
        try {
            const response = await axios.post('http://10.128.153.153:5000/rabbithole', data);
            console.log(response.data);  // Process the response data
            generateResponse(response.data.reply)
        } catch (error) {
            console.error(error);  // Handle any errors
        }
    };

    const handleSendPress = (message: MessageType.PartialText) => {
        const textMessage: MessageType.Text = {
            author: user,
            createdAt: Date.now(),
            id: uuidv4(),
            text: message.text,
            type: 'text',
        }
        addMessage(textMessage)
        sendDataToServer({ text: message.text, context: dataset[feedId]?.news});
        // setTimeout(() => generateResponse(textMessage), 5000)
    }

    const renderBubble = ({
        child,
        message,
        nextMessageInGroup,
    }: {
        child: ReactNode
        message: MessageType.Any
        nextMessageInGroup: boolean
    }) => {
        return (
            <View
                style={{
                    backgroundColor: user.id !== message.author.id ? '#F0EBE3' : '#eb5e28',
                    borderRadius: 12,
                    overflow: 'hidden',
                    marginBottom: lastMessageId === message.id ? 50 : 0,
                }}
            >
                {child}
            </View>
        )
    }

    return (
        <View style={{ flex: 1, width: width, height: height - 70, position: 'absolute', bottom: 0 }}>
            <TopBar title={'Rabbithole'} />
            <Chat
                messages={messages}
                renderBubble={renderBubble}
                onSendPress={handleSendPress}
                user={user}
                theme={{
                    ...defaultTheme,
                    colors: { ...defaultTheme.colors, inputBackground: '#F0EBE3', inputText: '#252422', background: '#fffcf2' },
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    contentContainer: {
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'column',
        height: 150,
        backgroundColor: '#fffcf2',
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
        lineHeight: 30,
        marginBottom: 10,
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
        padding: 10,
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#eb5e28',
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default Rabbithole;
