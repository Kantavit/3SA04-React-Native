import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen(){
    const navigation = useNavigation()
    return(
        <ImageBackground source={require('../bg3.jpg')} style={styles.backdrop}>
            <View>
                <Text style={styles.innerText}>Welcome !</Text>
                <StatusBar style="auto" /> 
                <Button color="orange" title="Let's Start" onPress={() => navigation.navigate('City Name/Zip Code')} />
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
    innerText: {
        color: 'white',
        fontSize: 20
    },
})