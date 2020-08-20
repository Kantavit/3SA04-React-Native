import React from 'react'
import { FlatList, View, Text, StyleSheet, ImageBackground, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' }, 
    { place: 'Trang', code: '92000' }, 
    { place: 'Chiangmai', code: '50000' }, 
    { place: 'Khonkaen', code: '40000' }, 
    { place: 'Chonburi', code: '20000' },
    { place: 'Wattana', code: '10110' }, 
    { place: 'Krabi', code: '81000' },     
    { place: 'Pattani', code: '94000' },
    { place: 'Songkhla', code: '90000' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
        <View style={styles.zipItem}> 
            <Text style={styles.zipPlace}>City Name: {place}</Text>
            <Text style={styles.zipCode}>Zip Code: {code}</Text> 
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen(){ 
    const navigation = useNavigation()
    return ( 
        <ImageBackground source={require('../bg2.jpg')} style={styles.backdrop}>
            <View>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
                <StatusBar style="auto" />
                <Button color="orange" title="Go back" onPress={() => navigation.navigate('Home')} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    zipPlace: {
        fontSize: 18,
        paddingLeft:25,
        color: 'white'
    },
    zipCode: {
        fontSize: 18,
        paddingRight:25,
        color: 'white'
    },
    backdrop: {
        flexDirection:'column',
        justifyContent: 'space-evenly',
        alignItems:'center',
        width: '100%',
        height: '100%',
    },
})