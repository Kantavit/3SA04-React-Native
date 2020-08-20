import React from 'react'
import {View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Forecast(props) {
    const navigation = useNavigation()
    return (
        <View>
            <Text style={styles.innerText}>City Name: {props.name}</Text>
            <Text style={styles.innerText}>weather: {props.main}</Text>
            <Text style={styles.innerText}>description: {props.description}</Text>
            <Text style={styles.innerText}>Temp: {props.temp} °C</Text>
            <Text style={styles.innerText}>Temp max/min: ({props.temp_max} °C /{props.temp_min} °C)</Text>
            
            <Button title="Go back" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    innerText: {
        color: 'white'
    }
});