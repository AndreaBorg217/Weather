/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View, StyleSheet***REMOVED*** from 'react-native';
 import CurrentDetails from './components/CurrentDetails.js';
 import TemperatureCard from './components/TemperatureCard.js';
 import GeneralCard from './components/GeneralCard.js';
 import Forecast from './components/Forecast.js';
 import {Format_Forecast_Data, CondenseData***REMOVED*** from './services/DataUtils.js';
 import {sample***REMOVED*** from './sampleData.js';

 let data = sample;


 
 const App = () => {
  
   return (
     <View style={styles.container***REMOVED***>
        <CurrentDetails icon = {data.list[0].weather[0].icon***REMOVED*** description = {data.list[0].weather[0].description***REMOVED*** location = {data.city.name***REMOVED*** time  = {data.list[0].dt***REMOVED***/>
        <TemperatureCard temp ={data.list[0].main.temp***REMOVED*** max ={data.list[0].main.temp_max***REMOVED*** min ={data.list[0].main.temp_min***REMOVED*** feels_like ={data.list[0].main.feels_like***REMOVED***/>
        <GeneralCard humidity = {data.list[0].main.humidity***REMOVED*** wind = {data.list[0].wind.speed***REMOVED*** sunrise = {data.city.sunrise***REMOVED*** sunset = {data.city.sunset***REMOVED***/>
        <Forecast forecastData = {Format_Forecast_Data(CondenseData(data))***REMOVED***/>
     </View>
   );
 ***REMOVED***;
 
 const styles = StyleSheet.create({
   container: {
     width: '100%',
     height: '100%',
     flex: 1,
     backgroundColor: '#123',
     alignItems: 'center',
     justifyContent: 'center'
   ***REMOVED***,
 ***REMOVED***);
 
 export default App;
 