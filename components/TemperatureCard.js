/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View, StyleSheet, Image, Text***REMOVED*** from 'react-native';
 import {FormatTemp***REMOVED*** from '../services/StringFormaters.js'
 
 const TemperatureCard = ({temp, max, min, feels_like***REMOVED***) => {
    temp = FormatTemp(temp?.toString())
    feels_like = FormatTemp(feels_like?.toString())
    max = FormatTemp(max?.toString())
    min = FormatTemp(min?.toString())
   return (
     <View style={styles.container***REMOVED***>
        <Image style={styles.thermometer***REMOVED*** source={require('../icons/thermometer.png')***REMOVED***/>

        <Text style = {styles.temp***REMOVED***>{temp***REMOVED***</Text>
        <Text style = {styles.feels_like***REMOVED***>Feels Like: {feels_like***REMOVED***</Text>

        <View style = {styles.maxmin***REMOVED***>
            <Image style={styles.arrow***REMOVED*** source={require('../icons/up_arrow.png')***REMOVED***/>
            <Text style = {styles.maxmintxt***REMOVED***>{max***REMOVED***</Text>
            <Image style={styles.arrow***REMOVED*** source={require('../icons/down_arrow.png')***REMOVED***/>
            <Text style = {styles.maxmintxt***REMOVED***>{min***REMOVED***</Text>
        </View>

     </View>
   );
 ***REMOVED***;
 
 const styles = StyleSheet.create({
   container: {
     width: 146,
     height: 137,
     alignItems: 'center',
     justifyContent: 'center',
     borderColor: 'white',
     borderWidth: 1,
     borderRadius: 10,
     position: 'absolute',
     transform: [{translateX: -100***REMOVED***, {translateY: -90***REMOVED***]
    ***REMOVED***,
    temp:{
        fontSize: 50,
        color: 'white',
        transform: [{translateY: -40***REMOVED***]
    ***REMOVED***,
    feels_like:{
        fontSize: 14,
        color: 'white',
        paddingLeft: 15,
        transform: [{translateY: -45***REMOVED***]
    ***REMOVED***,
    maxmin:{
        flexDirection: 'row',
        transform: [{translateX: 5***REMOVED***, {translateY: -25***REMOVED***]
    ***REMOVED***,
    maxmintxt:{
        color: 'white',
        fontSize: 25,
        paddingLeft: 5,
        paddingRight: 10
    ***REMOVED***,
    arrow:{
        width: 13,
        height: 25,
        transform: [{translateY: 5***REMOVED***]
    ***REMOVED***,
    thermometer:{
        width: 34,
        height: 55,
        backgroundColor: '#123',
        transform: [{translateX: -70***REMOVED***, {translateY: 60***REMOVED***]
    ***REMOVED***
 ***REMOVED***);
 
 export default TemperatureCard;
 