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
 import {Capitalise_Each_Word, Time_24hr***REMOVED*** from '../services/StringFormaters.js'
 
 
 const CurrentDetails = ({icon, description, location, time***REMOVED***) => {
    let uri = 'https://openweathermap.org/img/wn/' + icon + '@4x.png';
    description = Capitalise_Each_Word(description)
    time = Time_24hr(time)
   return (
     <View style={styles.container***REMOVED***>

     <View style = {styles.weatherCont***REMOVED***>
        <Image style={styles.icon***REMOVED*** source={{uri: uri***REMOVED******REMOVED***/>
        <Text style = {styles.description***REMOVED***>{description***REMOVED***</Text>
     </View>

     <View style = {styles.timeloc***REMOVED***>
     <Text style = {styles.time***REMOVED***>{time***REMOVED***</Text>
     <Text style = {styles.loc***REMOVED***>{location***REMOVED***</Text>
    </View>
     </View>
   );
 ***REMOVED***;
 
 const styles = StyleSheet.create({
   container: {
     width: '100%',
     height: '30%',
     alignItems: 'center',
     justifyContent: 'center',
     flexDirection: 'row',
     transform :[{translateY: -250***REMOVED***]
   ***REMOVED***,
   weatherCont:{
    width: 177,
    height: 145,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
   ***REMOVED***,
   icon:{
    width: 200,
    height: 200,
   ***REMOVED***,
   description:{
    fontSize: 16,
    color: 'white',
    transform :[{translateY: -50***REMOVED***]
   ***REMOVED***,
   timeloc:{
    width: 177,
    height: 145,
    alignItems: 'center',
    justifyContent: 'center',
    transform :[{translateY: 5***REMOVED***],
    margin: 20
   ***REMOVED***,
   time:{
    fontSize: 58,
    color: 'white',
   ***REMOVED***,
   loc:{
    fontSize: 25,
    color: 'white',
   ***REMOVED***
 ***REMOVED***);
 
 export default CurrentDetails;
 