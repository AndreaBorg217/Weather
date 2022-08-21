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
 import {Time_24hr***REMOVED*** from '../services/StringFormaters.js'
 
 const GeneralCard = ({humidity, wind, sunrise, sunset***REMOVED***) => {
    sunrise = Time_24hr(sunrise)
    sunset = Time_24hr(sunset)
   return (
     <View style={styles.container***REMOVED***>

        <Image style={styles.globe***REMOVED*** source={require('../icons/globe.png')***REMOVED***/>

        <View style = {styles.section***REMOVED***>
            <Image style={styles.icon***REMOVED*** source={require('../icons/humidity.png')***REMOVED***/>
            <Text style={styles.text***REMOVED***>{humidity***REMOVED***%</Text>
        </View>

        <View style = {styles.section***REMOVED***>
            <Image style={styles.wind***REMOVED*** source={require('../icons/wind.png')***REMOVED***/>
            <Text style={styles.text***REMOVED***>{wind***REMOVED***m/s</Text>
        </View>

        <View style = {styles.section***REMOVED***>
            <Image style={styles.sunrise***REMOVED*** source={require('../icons/sunrise.png')***REMOVED***/>
            <Text style={styles.text***REMOVED***>{sunrise***REMOVED***</Text>
        </View>

        <View style = {styles.section***REMOVED***>
            <Image style={styles.sunset***REMOVED*** source={require('../icons/sunset.png')***REMOVED***/>
            <Text style={styles.suntext***REMOVED***>{sunset***REMOVED***</Text>
        </View>
     </View>
   );
 ***REMOVED***;
 
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
     transform :[{translateX: 100***REMOVED***, {translateY: -30***REMOVED***]
   ***REMOVED***,
   globe:{
    width: 35,
    height: 35,
    backgroundColor: '#123',
    transform: [{translateY: -13***REMOVED***]
   ***REMOVED***,
   section:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 18,
    transform: [{translateY: -10***REMOVED***]
   ***REMOVED***,
   icon:{
    width: 35,
    height: 41,
    marginRight: 60
   ***REMOVED***,
   text:{
    fontSize: 20,
    color: 'white',
   ***REMOVED***,
   sunrise:{
    width: 35,
    height: 45,
    marginRight: 60
   ***REMOVED***,
   wind:{
    width: 45,
    height: 45,
    marginRight: 30
   ***REMOVED***,
   sunset:{
    width: 35,
    height: 45,
    marginRight: 50
   ***REMOVED***,
   suntext:{
    fontSize: 20,
    color: 'white',
    transform: [{translateY: 10***REMOVED***]
   ***REMOVED***
 ***REMOVED***);
 
 export default GeneralCard;
 