import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowRight, ArrowLeft } from 'react-native-feather';

const TextViewNavigator = (props: {pageNumber: number, setPageNumber: (page: number) => void}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => props.setPageNumber(Math.max(props.pageNumber - 1, 0))}>
                <ArrowLeft size={24} color={'#ddd'} />
                <Text style={[styles.buttonText, {marginLeft: 10}]}>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Page {props.pageNumber + 1}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => props.setPageNumber(Math.min(props.pageNumber + 1, 5))}>
                <Text style={[styles.buttonText, {marginRight: 10}]}>Next</Text>
                <ArrowRight size={24} color={'#ddd'} />
            </TouchableOpacity>
        </View>
    );
}

export default TextViewNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        width: '100%',
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 0,
    },
    button: {
        flex: 1/3,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111',
        marginHorizontal: 10,
        borderRadius: 12,
    },
    buttonText: {
        color: '#ddd',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});