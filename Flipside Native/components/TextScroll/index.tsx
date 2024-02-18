import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { Copy, Pocket, ExternalLink, ChevronUp, Feather } from 'react-native-feather';

const TextScroll = (props: {summaryText: string}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [featherColor, setFeatherColor] = useState('#ffd724');
  const scrollRef = useRef();

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

  const [text, setText] = useState([{text: '', highlighted: false}]);

  const [saved, setSaved] = useState(false);

  const onBackToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      const index = Math.round(value / 100);
      text[index] ? setFeatherColor(text[index].highlighted ? '#fff' : '#ffd724') : setFeatherColor('')
    });
    return () => scrollY.removeListener(listener);
  }, [scrollY, text]);

  const toggleHighlight = () => {
    const index = Math.round(scrollY._value / 100);
    setText(prevText => prevText.map((item, i) => i === index ? {...item, highlighted: !item.highlighted} : item));
  };

  useEffect(() => {
    if (!props.summaryText) {
      return;
    }
    setText(splitParagraph(props.summaryText).map((sentence: string) => {
      return { text: sentence, highlighted: false };
    }))
  }, [props.summaryText]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={{flex: 1}}
        ref={scrollRef}
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        snapToOffsets={[...text.map((_, index) => index * 100), (text.length - 1) * 100 + 100]}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false}
        )}
      >
        <View style={{height: 130, flex: 1, flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
          <TouchableOpacity onPress={() => console.log('pressed')} style={styles.button}>
            <Copy color={'#ddd'} size={24} style={{textAlign: 'center'}} />
            <Text style={styles.buttonText}>Copy Content</Text>
          </TouchableOpacity>
          {
            !saved ? (
              <TouchableOpacity onPress={() => setSaved(!saved)} style={[styles.button, {backgroundColor: '#222'}]}>
                  <Pocket color={'#ddd'} size={24} style={{textAlign: 'center'}} />
                  <Text style={[styles.buttonText, {color: '#ddd'}]}>Save to Pocket</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setSaved(!saved)} style={[styles.button, {backgroundColor: '#ddd'}]}>
                  <Pocket color={'#222'} size={24} style={{textAlign: 'center'}} />
                  <Text style={[styles.buttonText, {color: '#222'}]}>Saved to Pocket</Text>
              </TouchableOpacity>
            )
          }
          <TouchableOpacity onPress={() => console.log('pressed')} style={styles.button}>
            <ExternalLink color={'#ddd'} size={24} style={{textAlign: 'center'}} />
            <Text style={styles.buttonText}>Open Original</Text>
          </TouchableOpacity>
        </View>
        <View>
        {text.map((sentence, index) => {
            const inputRange = [(index - 1) * 100, index * 100, (index + 1) * 100];
            const color = scrollY.interpolate({
              inputRange,
              outputRange: !sentence.highlighted ? ['#444', '#fff', '#444'] : ['#5c5228', '#ffd724', '#5c5228'],
              extrapolate: 'clamp',
            });
            return (
              <Animated.Text key={index} style={[styles.text, {color}]}>{sentence.text}</Animated.Text>
            );
          })}
        </View>
        <View style={{height: 80, flex: 1, flexDirection: 'row', marginTop: 40, marginBottom: 40}}>
          <TouchableOpacity onPress={onBackToTop} style={styles.buttonToTop}>
            <ChevronUp color={'#ddd'} size={24} style={{textAlign: 'center'}} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    height: 100,
    fontSize: 24,
    textAlignVertical: 'center',
    fontWeight: 'bold',
    lineHeight: 50,
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
    bottom: 10,
    right: 0,
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
  }
});

export default TextScroll;
