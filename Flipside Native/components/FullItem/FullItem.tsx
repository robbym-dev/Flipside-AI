import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Animated, TouchableOpacity, Image } from 'react-native';
import { Copy, Pocket, ExternalLink, ChevronRight, ChevronDown, Feather } from 'react-native-feather';
import ImageSlider from '../ImageSlider';
import AudioPlayer from '../AudioPlayer';
import Accordion from 'react-native-collapsible/Accordion';
import TextViewNavigator from '../TextViewNavigator';
import { useFeed } from '../../pages/FeedContext';

const SECTIONS = [
    'transcript',
];

const FullItem = (props: { data: any[] }) => {
    const { feedId } = useFeed();
    const { news } = props.data[feedId];

    // This regex finds content within <h></h> tags
    const regex = /<h>(.*?)<\/h>/g;
    let match;
    let headings = [];
    while ((match = regex.exec(news)) !== null) {
        headings.push(match[1]);
    }

    function formatLink(link) {
        // Remove http:// or https:// from the start of the link
        let strippedLink = link.replace(/^(http:\/\/|https:\/\/)/, '');
        
        // Remove everything after .com (including .com itself)
        let indexOfCom = strippedLink.indexOf('.com');
        if (indexOfCom !== -1) {
          strippedLink = strippedLink.substring(0, indexOfCom+ 4);
        }
        
        return strippedLink;
      }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.contentContainer}>
                <Text style={[styles.title]}>
                    {props.data[feedId].title}
                </Text>
                <View style={{ marginBottom: 10 }}>
                    {props.data[feedId].links.map((link, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => console.log('pressed')} style={[styles.button]}>
                                <Text style={[styles.buttonText, { color: '#eb5e28' }]}>{formatLink(link)}</Text>
                                <ChevronRight color={'#eb5e28'} size={24} style={{ textAlign: 'center' }} />
                            </TouchableOpacity>
                        );
                    }
                    )}
                </View>
                {news.split(regex).map((text, index) => (
                    <React.Fragment key={index}>
                        {index % 2 === 0 ? (
                            <Text style={styles.text}>{text}</Text>
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
        height: '100%',
        backgroundColor: '#F0EBE3',
        marginTop: 80,
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
        paddingTop: 5,
        paddingBottom: 5,
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 35,
        // any other styling for headings
    },
});

export default FullItem;
