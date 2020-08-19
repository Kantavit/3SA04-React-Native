import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.innerText}>City Name: {props.name}</Text>
            <Text style={styles.innerText}>weather: {props.main}</Text>
            <Text style={styles.innerText}>description: {props.description}</Text>
            <Text style={styles.innerText}>Temp: {props.temp} °C</Text>
            <Text style={styles.innerText}>Temp max/min: ({props.temp_max} °C /{props.temp_min} °C)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    innerText: {
        color: 'white'
    }
});