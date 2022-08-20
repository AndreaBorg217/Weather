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
 import CurrentDetails from './components/CurrentDetails.js'
 
 
let data = {
  "cod": "200",
  "message": 0,
  "cnt": 5,
  "list": [
    {
      "dt": 1660986000,
      "main": {
        "temp": 27.38,
        "feels_like": 29.41,
        "temp_min": 27.2,
        "temp_max": 27.38,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1011,
        "humidity": 69,
        "temp_kf": 0.18
***REMOVED***,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
  ***REMOVED***
      ],
      "clouds": {
        "all": 40
***REMOVED***,
      "wind": {
        "speed": 9.58,
        "deg": 312,
        "gust": 9.97
***REMOVED***,
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
***REMOVED***,
      "dt_txt": "2022-08-20 09:00:00"
    ***REMOVED***,
    {
      "dt": 1660996800,
      "main": {
        "temp": 27.41,
        "feels_like": 29.47,
        "temp_min": 27.41,
        "temp_max": 27.48,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 1011,
        "humidity": 69,
        "temp_kf": -0.07
***REMOVED***,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
  ***REMOVED***
      ],
      "clouds": {
        "all": 27
***REMOVED***,
      "wind": {
        "speed": 10.39,
        "deg": 307,
        "gust": 10.37
***REMOVED***,
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
***REMOVED***,
      "dt_txt": "2022-08-20 12:00:00"
    ***REMOVED***,
    {
      "dt": 1661007600,
      "main": {
        "temp": 27.42,
        "feels_like": 29.48,
        "temp_min": 27.42,
        "temp_max": 27.44,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1010,
        "humidity": 69,
        "temp_kf": -0.02
***REMOVED***,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
  ***REMOVED***
      ],
      "clouds": {
        "all": 13
***REMOVED***,
      "wind": {
        "speed": 9.94,
        "deg": 301,
        "gust": 10.05
***REMOVED***,
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
***REMOVED***,
      "dt_txt": "2022-08-20 15:00:00"
    ***REMOVED***,
    {
      "dt": 1661018400,
      "main": {
        "temp": 27.04,
        "feels_like": 29.1,
        "temp_min": 27.04,
        "temp_max": 27.04,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1010,
        "humidity": 72,
        "temp_kf": 0
***REMOVED***,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
  ***REMOVED***
      ],
      "clouds": {
        "all": 0
***REMOVED***,
      "wind": {
        "speed": 10.1,
        "deg": 308,
        "gust": 12.03
***REMOVED***,
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
***REMOVED***,
      "dt_txt": "2022-08-20 18:00:00"
    ***REMOVED***,
    {
      "dt": 1661029200,
      "main": {
        "temp": 26.91,
        "feels_like": 29.11,
        "temp_min": 26.91,
        "temp_max": 26.91,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1010,
        "humidity": 75,
        "temp_kf": 0
***REMOVED***,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
  ***REMOVED***
      ],
      "clouds": {
        "all": 0
***REMOVED***,
      "wind": {
        "speed": 11.31,
        "deg": 317,
        "gust": 12.98
***REMOVED***,
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
***REMOVED***,
      "dt_txt": "2022-08-20 21:00:00"
    ***REMOVED***
  ],
  "city": {
    "id": 2563189,
    "name": "Birżebbuġa",
    "coord": {
      "lat": 35.8258,
      "lon": 14.5269
    ***REMOVED***,
    "country": "MT",
    "population": 8668,
    "timezone": 7200,
    "sunrise": 1660969469,
    "sunset": 1661017592
  ***REMOVED***
***REMOVED***

 
 const App = () => {
  
   return (
     <View style={styles.container***REMOVED***>
        <CurrentDetails icon = {data.list[0].weather[0].icon***REMOVED*** description = {data.list[0].weather[0].description***REMOVED*** location = {data.city.name***REMOVED*** time  = {data.list[0].dt***REMOVED***/>
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
 