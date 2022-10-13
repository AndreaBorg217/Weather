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
 import {Time_24hr} from '../services/StringFormaters.js'
 
 const GeneralCard = ({humidity, wind, sunrise, sunset}) => {
    sunrise = Time_24hr(sunrise)
    sunset = Time_24hr(sunset)
   return (
     <View style={styles.container}>

        <Image style={styles.globe} source={require('../icons/globe.png')}/>

        <View style = {styles.section}>
            <Image style={styles.icon} source={require('../icons/humidity.png')}/>
            <Text style={styles.text}>{humidity}%</Text>
        </View>

        <View style = {styles.section}>
            <Image style={styles.wind} source={require('../icons/wind.png')}/>
            <Text style={styles.text}>{wind}m/s</Text>
        </View>

        <View style = {styles.section}>
            <Image style={styles.sunrise} source={require('../icons/sunrise.png')}/>
            <Text style={styles.text}>{sunrise}</Text>
        </View>

        <View style = {styles.section}>
            <Image style={styles.sunset} source={require('../icons/sunset.png')}/>
            <Text style={styles.suntext}>{sunset}</Text>
        </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     width: 180,
     height: 275,
     borderColor: 'white',
     borderWidth: 1,
     borderRadius: 10,
     alignItems: 'center',
     justifyContent: 'center',
     position: 'absolute',
     transform :[{translateX: 90}, {translateY: -30}]
   },
   globe:{
    width: 35,
    height: 35,
    backgroundColor: '#123',
    transform: [{translateY: -13}]
   },
   section:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 18,
    transform: [{translateY: -10}]
   },
   icon:{
    width: 35,
    height: 41,
    marginRight: 60
   },
   text:{
    fontSize: 20,
    color: 'white',
   },
   sunrise:{
    width: 35,
    height: 45,
    marginRight: 60
   },
   wind:{
    width: 45,
    height: 45,
    marginRight: 30
   },
   sunset:{
    width: 35,
    height: 45,
    marginRight: 50
   },
   suntext:{
    fontSize: 20,
    color: 'white',
    transform: [{translateY: 10}]
   }
 });
 
 export default GeneralCard;
 