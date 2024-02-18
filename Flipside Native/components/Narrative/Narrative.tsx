import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Animated, TouchableOpacity, Image } from 'react-native';
import { Copy, Pocket, ExternalLink, ChevronUp, ChevronDown, Feather } from 'react-native-feather';
import ImageSlider from '../ImageSlider';
import AudioPlayer from '../AudioPlayer';
import Accordion from 'react-native-collapsible/Accordion';
import TextViewNavigator from '../TextViewNavigator';

const SECTIONS = [
    'transcript',
  ];

const Narrative = (props) => {
    const news  = props.route.params.content;
    const regex = /<h>(.*?)<\/h>/g;
    let match;
    let headings = [];
    while ((match = regex.exec(news)) !== null) {
        headings.push(match[1]);
    }
    return (
        <View style={styles.container}>   
            <ScrollView style={styles.contentContainer}>
                {
                <View style={{height: 200, backgroundColor: '#ccc5b9', margin: 5, borderRadius: 12, overflow: 'hidden'}}>
                    <Image source={{uri: props.route.params.imageURL}} style={{flex: 1, width: '100%', height: '100%'}} />
                </View>
                }
                {news.split(regex).map((text, index) => (
                    <React.Fragment key={index}>
                        {index % 2 === 0 ? (
                            <Text style={styles.text}>{text.trim()}</Text>
                        ) : (
                            <Text style={styles.heading}>{headings.shift()}</Text>
                        )}
                    </React.Fragment>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fffcf2',
        padding: 10,
    },
    contentContainer: {
        flex: 1,
        padding: 10,
    },
    description: {
        color: '#bbb',
        fontSize: 24,
        lineHeight: 35,
        fontWeight: 'bold',
        margin: 10,
    },
    text: {
        fontSize: 18,
        textAlignVertical: 'center',
        marginHorizontal: 10,
        color: '#252422',
        lineHeight: 25,
        marginTop: 10,
    },
    button: {
        flex: 1,
        backgroundColor: '#222',
        margin: 5,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
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
        color: '#ddd',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    buttonToTopText: {
        color: '#ddd',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 5,
    },
    floatingBubble: {
        position: 'absolute',
        bottom: 70,
        right: 10,
        backgroundColor: '#222',
        borderRadius: 12,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
    },
    pageText: {
        color: '#ddd',
        fontWeight: 'bold',
        fontSize: 28,
        lineHeight: 30,
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    title: {
        color: '#252422',
        fontWeight: 'bold',
        fontSize: 21,
        marginHorizontal: 10,
    },
    transcript: {
        color: '#bbb',
        fontSize: 18,
        lineHeight: 35,
        fontWeight: 'bold',
        margin: 10,
        fontFamily: 'monospace',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 35,
        textAlignVertical: 'center',
        marginHorizontal: 10,
        color: '#252422',
        marginTop: 10,
    },
});

export default Narrative;
