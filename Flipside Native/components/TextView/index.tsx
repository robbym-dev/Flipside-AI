import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { Copy, Pocket, ExternalLink, ChevronUp, ChevronDown, Feather } from 'react-native-feather';
import ImageSlider from '../ImageSlider';
import AudioPlayer from '../AudioPlayer';
import Accordion from 'react-native-collapsible/Accordion';
import TextViewNavigator from '../TextViewNavigator';

const SECTIONS = [
    'transcript',
  ];

const TextView = (props: {courseContent: any, chapterNumber: number, pageNumber: number, updatePage: (page: number) => void}) => {
    const videoDetails = props.courseContent[props.chapterNumber]['videos'][props.pageNumber];
    const title = videoDetails['title'];
    const summaryText = videoDetails['summary'];
    const posts = videoDetails['posts'];
    const id = videoDetails['video_id'];

    const splitParagraph = (paragraph: string) => {
        let words = paragraph.split(' ');

        let result = [];
        let currentString = '';

        words.forEach(word => {
        if ((currentString + word).length <= 50) {
            if (currentString.length > 0) {
            currentString += ' ' + word;
            } else {
            currentString = word;
            }
        } else {
            result.push(currentString);
            currentString = word;
        }
        });

        if (currentString.length > 0) {
            result.push(currentString);
        }

        return result;
    };

    const scrollY = useRef(new Animated.Value(0)).current;
    const [featherColor, setFeatherColor] = useState('#ffd724');
    const scrollRef = useRef();
    const [text, setText] = useState(splitParagraph(summaryText).map((sentence: string) => {
        return { text: sentence, highlighted: false };
    }));

    const [saved, setSaved] = useState(false);
    const [activeSections, setActiveSections] = useState([]);

    const onBackToTop = () => {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }

    const offsetHeight = 380;
    const textHeight = 100;

    useEffect(() => {
        const listener = scrollY.addListener(({ value }) => {
            const index = Math.round((value - offsetHeight) / textHeight);
            text[index] ? setFeatherColor(text[index].highlighted ? '#fff' : '#ffd724') : setFeatherColor('')
        });
        return () => scrollY.removeListener(listener);
    }, [scrollY, text]);

    const toggleHighlight = () => {
        const index = Math.round((scrollY._value - offsetHeight) / textHeight);
        setText(prevText => prevText.map((item, i) => i === index ? { ...item, highlighted: !item.highlighted } : item));
    };

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.contentContainer}
                ref={scrollRef}
                scrollEventThrottle={16}
                decelerationRate={'fast'}
                snapToOffsets={[200, ...text.map((_, index) => index * textHeight + offsetHeight), (text.length - 1) * textHeight + textHeight + offsetHeight, (text.length - 1) * textHeight + 300 + offsetHeight, (text.length - 1) * textHeight + 600 + offsetHeight]}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
            >
                <Text style={styles.pageText}>
                    Page {props.pageNumber + 1}
                </Text>
                <Text style={styles.title}>   
                    {title}
                </Text>
                <View style={{ height: 130, flex: 1, flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                    <TouchableOpacity onPress={() => console.log('pressed')} style={styles.button}>
                        <Copy color={'#ddd'} size={24} style={{ textAlign: 'center' }} />
                        <Text style={styles.buttonText}>Copy Content</Text>
                    </TouchableOpacity>
                    {
                        !saved ? (
                            <TouchableOpacity onPress={() => setSaved(!saved)} style={[styles.button, { backgroundColor: '#222' }]}>
                                <Pocket color={'#ddd'} size={24} style={{ textAlign: 'center' }} />
                                <Text style={[styles.buttonText, { color: '#ddd' }]}>Save to Pocket</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => setSaved(!saved)} style={[styles.button, { backgroundColor: '#ddd' }]}>
                                <Pocket color={'#222'} size={24} style={{ textAlign: 'center' }} />
                                <Text style={[styles.buttonText, { color: '#222' }]}>Saved to Pocket</Text>
                            </TouchableOpacity>
                        )
                    }
                    <TouchableOpacity onPress={() => console.log('pressed')} style={styles.button}>
                        <ExternalLink color={'#ddd'} size={24} style={{ textAlign: 'center' }} />
                        <Text style={styles.buttonText}>Open Original</Text>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.pageText, {marginTop: 10}]}>
                    ClipverseAI Summary
                </Text>
                <ImageSlider posts={posts} id={id}/>
                <View>
                    {text.map((sentence, index) => {
                        const inputRange = [(index - 1) * textHeight + offsetHeight, index * textHeight + offsetHeight, (index + 1) * textHeight + offsetHeight];
                        const color = scrollY.interpolate({
                            inputRange,
                            outputRange: !sentence.highlighted ? ['#444', '#fff', '#444'] : ['#5c5228', '#ffd724', '#5c5228'],
                            extrapolate: 'clamp',
                        });
                        return (
                            <Animated.Text key={index} style={[styles.text, { color }]}>{sentence.text}</Animated.Text>
                        );
                    })}
                </View>
                <Accordion
                    sections={SECTIONS}
                    activeSections={activeSections}
                    renderSectionTitle={() => {
                        return (
                            <View style={{marginTop: 20}}>
                            <Text style={styles.pageText}>
                                Transcript
                            </Text>
                            <AudioPlayer />
                            </View>
                        )
                    }}
                    renderHeader={() => {
                        return (
                            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginRight: 10}}>
                                <Text style={styles.description}>
                                    Toggle Text
                                </Text>
                                {
                                    activeSections.includes(0) ? (
                                        <ChevronUp color={'#ddd'} size={24} style={{ textAlign: 'center' }} />
                                    ) : (
                                        <ChevronDown color={'#ddd'} size={24} style={{ textAlign: 'center' }} />
                                    )
                                }
                            </View>
                        )
                    }}
                    renderContent={() => {
                        return (
                            <>
                            <View>
                                <Text style={styles.transcript}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque numquam eaque sit, at est ut culpa, ullam sint error itaque veniam debitis maxime perferendis excepturi totam quia nobis cupiditate?
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.transcript}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque numquam eaque sit, at est ut culpa, ullam sint error itaque veniam debitis maxime perferendis excepturi totam quia nobis cupiditate?
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.transcript}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque numquam eaque sit, at est ut culpa, ullam sint error itaque veniam debitis maxime perferendis excepturi totam quia nobis cupiditate?
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.transcript}>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia neque numquam eaque sit, at est ut culpa, ullam sint error itaque veniam debitis maxime perferendis excepturi totam quia nobis cupiditate?
                                </Text>
                            </View>
                            </>
                        )
                    }}
                    onChange={(active) => setActiveSections(active)}
                />
                <View style={{ height: 80, flex: 1, flexDirection: 'row', marginTop: 10, marginBottom: 80 }}>
                    <TouchableOpacity onPress={onBackToTop} style={styles.buttonToTop}>
                        <ChevronUp color={'#ddd'} size={24} style={{ textAlign: 'center' }} />
                        <Text style={styles.buttonToTopText}>Back to Top</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {
                featherColor === '' ? null :
                    <TouchableOpacity style={styles.floatingBubble} onPress={toggleHighlight}>
                        <Feather size={24} color={featherColor} />
                    </TouchableOpacity>
            }
            <TextViewNavigator pageNumber={props.pageNumber} setPageNumber={props.updatePage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
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
        height: 100,
        fontSize: 24,
        textAlignVertical: 'center',
        fontWeight: 'bold',
        lineHeight: 50,
        marginHorizontal: 10,
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
        color: '#ddd',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 30,
        flex: 1,
        marginHorizontal: 10,
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
});

export default TextView;
