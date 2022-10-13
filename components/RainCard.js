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
 import {FormatPercentage} from '../services/StringFormaters.js'

 const RainCard = ({pop, vol}) => {
    pop = FormatPercentage(pop)
   return (
     <View style={styles.container}>
        <Image style={styles.rain} source={require('../icons/rain.png')}/>

        <View style = {styles.section}>
            <Image style={styles.prob} source={require('../icons/percentage.png')}/>
            <Text style={styles.probtext}>{pop}</Text>
        </View>

        <View style = {styles.section}>
            <Image style={styles.vol} source={require('../icons/scale.png')}/>
            <Text style={styles.voltext}>{vol}</Text>
        </View>

     </View>

 
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     width: 146,
     height: 110,
     alignItems: 'center',
     justifyContent: 'center',
     borderColor: 'white',
     borderWidth: 1,
     borderRadius: 10,
     position: 'absolute',
     transform: [{translateX: -100}, {translateY: 50}]
    },
    rain:{
      width: 45,
      height: 45,
      backgroundColor: '#123',
      position: 'absolute',
      transform: [{translateY: -50}]
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        transform: [{translateY: 20}]
    },
    prob:{
        width: 20,
        height: 20,
        marginRight: 60
    },
    vol:{
        width: 30,
        height: 30,
        position: 'absolute',
        transform: [{translateX: -40}]  
    },
    probtext: {
        color: 'white',
        fontSize: 18,
    },
    voltext:{
        color: 'white',
        fontSize: 16,
        position: 'absolute',
        transform: [{translateX: 40}]  
    }
    
 });
 
 export default RainCard;
 