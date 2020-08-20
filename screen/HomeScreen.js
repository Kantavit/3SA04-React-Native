import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen(){
    const navigation = useNavigation()
    return(
        <ImageBackground source={require('../bg3.jpg')} style={styles.backdrop}>
            <View>
                <Text style={styles.HeaderText}>Welcome !</Text>
                <Text style={styles.innerText}>To Weather Application</Text>
                <StatusBar style="auto" /> 
                <Button color="orange" title="How's The Weather ?" onPress={() => navigation.navigate('City Name/Zip Code')} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection:'column',
        justifyContent: 'space-evenly',
        alignItems:'center',
        width: '100%',
        height: '100%',
    },
    HeaderText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 50
    },
    innerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25
    },
})