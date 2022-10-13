/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View, StyleSheet, Image, Text} from 'react-native';
 import {FormatTemp} from '../services/StringFormaters.js'
 
 const TemperatureCard = ({temp, max, min, feels_like}) => {
    temp = FormatTemp(temp?.toString())
    feels_like = FormatTemp(feels_like?.toString())
    max = FormatTemp(max?.toString())
    min = FormatTemp(min?.toString())
   return (
     <View style={styles.container}>
        <Image style={styles.thermometer} source={require('../icons/thermometer.png')}/>

        <Text style = {styles.temp}>{temp}</Text>
        <Text style = {styles.feels_like}>Feels Like: {feels_like}</Text>

        <View style = {styles.maxmin}>
            <Image style={styles.arrow} source={require('../icons/up_arrow.png')}/>
            <Text style = {styles.maxmintxt}>{max}</Text>
            <Image style={styles.arrow} source={require('../icons/down_arrow.png')}/>
            <Text style = {styles.maxmintxt}>{min}</Text>
        </View>

     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     width: 146,
     height: 130,
     alignItems: 'center',
     justifyContent: 'center',
     borderColor: 'white',
     borderWidth: 1,
     borderRadius: 10,
     position: 'absolute',
     transform: [{translateX: -100}, {translateY: -105}]
    },
    temp:{
        fontSize: 50,
        color: 'white',
        transform: [{translateY: -40}]
    },
    feels_like:{
        fontSize: 14,
        color: 'white',
        paddingLeft: 15,
        transform: [{translateY: -45}]
    },
    maxmin:{
        flexDirection: 'row',
        transform: [{translateX: 5}, {translateY: -25}]
    },
    maxmintxt:{
        color: 'white',
        fontSize: 25,
        paddingLeft: 5,
        paddingRight: 10
    },
    arrow:{
        width: 13,
        height: 25,
        transform: [{translateY: 5}]
    },
    thermometer:{
        width: 34,
        height: 55,
        backgroundColor: '#123',
        transform: [{translateX: -70}, {translateY: 60}]
    }
 });
 
 export default TemperatureCard;
 