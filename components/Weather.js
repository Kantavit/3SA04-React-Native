import React, {useState, useEffect} from 'react'
import {Text, ImageBackground, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        name: '-'
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`) 
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=e45ccd1f182dc031b027c623edb752c6`) 
            .then((response) => response.json()) 
            .then((json) => {
                setForecastInfo({ 
                    main: json.weather[0].main, 
                    description: json.weather[0].description, 
                    temp: json.main.temp,
                    temp_max: json.main.temp_max,
                    temp_min: json.main.temp_min,
                    name: json.name
                });
            })
            .catch((error) => { 
                console.warn(error); 
            });
        }
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text style={styles.innerText}>Zip Code: {props.zipCode}</Text>
                <Forecast {...forecastInfo} />
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

        // width: '100%', 
        // height: '50%', 
        // opacity: 0.3, 
        // backgroundColor: '#011',
        // flexDirection: 'column', 
        // alignItems: 'center', 
        // justifyContent: 'center'
    },
    innerText: {
        color: 'white',
        fontSize: 20
    },
    container: { 
        // paddingTop: 20,
        width: '100%', 
        height: '50%', 
        opacity: 0.3, 
        backgroundColor: '#011',
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
});