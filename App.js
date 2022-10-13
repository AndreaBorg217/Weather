/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
 import {View, StyleSheet} from 'react-native';
 import CurrentDetails from './components/CurrentDetails.js';
 import TemperatureCard from './components/TemperatureCard.js';
 import GeneralCard from './components/GeneralCard.js';
 import Forecast from './components/Forecast.js';
 import RainCard from './components/RainCard.js';
 import {Format_Forecast_Data, CondenseData, RainVolume} from './services/DataUtils.js';
 import {key, location} from './services/sensitive.js'
 import axios from 'axios'
 //import {sample} from './sampleData.js';

 
 const App = () => {
  const [data, setData] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + location + '&' + 'appid=' + key + '&units=metric')
        if(response.data){
         setData(response.data)
        }
    }
    fetchData()
  }, [])
  
   return (
     <View style={styles.container}>
        <CurrentDetails icon = {data?.list[0].weather[0].icon} description = {data?.list[0].weather[0].description} location = {data?.city.name} time  = {data?.list[0].dt_txt}/>
        <TemperatureCard temp ={data?.list[0].main.temp} max ={data?.list[0].main.temp_max} min ={data?.list[0].main.temp_min} feels_like ={data?.list[0].main.feels_like}/>
        <RainCard pop = {data?.list[0].pop} vol = {RainVolume(data?.list)}/>
        <GeneralCard humidity = {data?.list[0].main.humidity} wind = {data?.list[0].wind.speed} sunrise = {data?.city.sunrise} sunset = {data?.city.sunset}/>
        <Forecast forecastData = {Format_Forecast_Data(CondenseData(data))}/>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     width: '100%',
     height: '100%',
     flex: 1,
     backgroundColor: '#123',
     alignItems: 'center',
     justifyContent: 'center'
   },
 });
 
 export default App;
 