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
 import {FormatPercentage***REMOVED*** from '../services/StringFormaters.js'

 const RainCard = ({pop, vol***REMOVED***) => {
    pop = FormatPercentage(pop)
   return (
     <View style={styles.container***REMOVED***>
        <Image style={styles.rain***REMOVED*** source={require('../icons/rain.png')***REMOVED***/>

        <View style = {styles.section***REMOVED***>
            <Image style={styles.prob***REMOVED*** source={require('../icons/percentage.png')***REMOVED***/>
            <Text style={styles.probtext***REMOVED***>{pop***REMOVED***</Text>
        </View>

        <View style = {styles.section***REMOVED***>
            <Image style={styles.vol***REMOVED*** source={require('../icons/scale.png')***REMOVED***/>
            <Text style={styles.voltext***REMOVED***>{vol***REMOVED***</Text>
        </View>

     </View>

 
   );
 ***REMOVED***;
 
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
     transform: [{translateX: -100***REMOVED***, {translateY: 50***REMOVED***]
    ***REMOVED***,
    rain:{
      width: 45,
      height: 45,
      backgroundColor: '#123',
      position: 'absolute',
      transform: [{translateY: -50***REMOVED***]
    ***REMOVED***,
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        transform: [{translateY: 20***REMOVED***]
    ***REMOVED***,
    prob:{
        width: 20,
        height: 20,
        marginRight: 60
    ***REMOVED***,
    vol:{
        width: 30,
        height: 30,
        transform: [{translateX: -10***REMOVED***]  
    ***REMOVED***,
    probtext: {
        color: 'white',
        fontSize: 18,
    ***REMOVED***,
    voltext:{
        color: 'white',
        fontSize: 16,
        transform: [{translateX: 20***REMOVED***]  
    ***REMOVED***
    
 ***REMOVED***);
 
 export default RainCard;
 