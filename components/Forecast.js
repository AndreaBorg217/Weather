/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View, StyleSheet, Image, Text, FlatList***REMOVED*** from 'react-native';
 import {Capitalise_Each_Word, FormatTemp, FormatDay***REMOVED*** from '../services/StringFormaters.js'
 import {Format_Forecast_Data***REMOVED*** from '../services/DataUtils.js'



 const Card = ({temp, icon, desc, time***REMOVED***) =>{
  let uri = 'https://openweathermap.org/img/wn/' + icon + '@4x.png';
  desc = Capitalise_Each_Word(desc)
  temp = FormatTemp(temp.toString())
  let day = FormatDay(time)
  console.log(temp, icon, desc, day)
return (
   <View style={styles.card***REMOVED***>

    <Text style = {styles.day***REMOVED***>{day***REMOVED***</Text>
    
    <View style = {styles.tempCont***REMOVED***>
      <Text style = {styles.temp***REMOVED***>{temp***REMOVED***</Text>
      <Image style={styles.icon***REMOVED*** source={{uri: uri***REMOVED******REMOVED***/>
    </View>

    <Text style = {styles.desc***REMOVED***>{desc***REMOVED***</Text>
   
   </View>
 );
***REMOVED***



 const Forecast = (list) => {
  let data = list.forecastData;
  //console.log(data);

   return (
      <View style={styles.container***REMOVED***>

        <Text style = {styles.header***REMOVED***>5 day forecast</Text>
        <View style = {styles.days***REMOVED***> 
          <FlatList
            data={data***REMOVED***
            renderItem={({item***REMOVED***) => <Card temp = {item.temp***REMOVED*** icon = {item.icon***REMOVED*** desc = {item.desc***REMOVED*** time ={item.time***REMOVED***/>***REMOVED***
            keyExtractor={(item, index) => index***REMOVED***
            horizontal = {true***REMOVED***
          />
        </View>
      </View>
   );
 ***REMOVED***;
 
 const styles = StyleSheet.create({
   container: {
     width: 360,
     height: 200,
     alignItems: 'center',
     justifyContent: 'center',
     borderColor: 'white',
     borderWidth: 1,
     borderRadius: 10,
     position: 'absolute',
     transform: [{translateY: 240***REMOVED***]
   ***REMOVED***,
   header: {
      fontSize: 22,
      color: 'white',
      backgroundColor: '#123',
      padding: 10,
      position: 'absolute',
      transform: [{translateX: -40***REMOVED***,{translateY: -100***REMOVED***]
   ***REMOVED***,
   card:{
    width: 150,
    height: 141,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: '#123',
    margin: 10,
   ***REMOVED***,
   day:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    transform: [{translateX: -40***REMOVED***]
   ***REMOVED***,
   tempCont:{
    flexDirection: 'row',
   ***REMOVED***,
   temp:{
    color: 'white',
    fontSize: 35,
    padding: 10,
    //transform: [{translateY: 10***REMOVED***]
   ***REMOVED***,
   icon:{
    width: 60,
    height: 70
   ***REMOVED***,
   desc:{
    color: 'white',
    fontSize: 16,
    
   ***REMOVED***,
   days:{
    transform: [{translateY: 30***REMOVED***]
   ***REMOVED***
 ***REMOVED***);
 
 export default Forecast;
 