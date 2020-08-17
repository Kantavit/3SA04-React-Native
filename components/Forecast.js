import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.innerText}>{props.main}</Text>
            <Text style={styles.innerText}>{props.description}</Text>
            <Text style={styles.innerText}>{props.temp} °C</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    innerText: {
        color: 'white'
    }
});