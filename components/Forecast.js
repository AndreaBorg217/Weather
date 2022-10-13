/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View, StyleSheet, Image, Text, FlatList} from 'react-native';
 import {Capitalise_Each_Word, FormatTemp, FormatDay} from '../services/StringFormaters.js'
 import {Format_Forecast_Data} from '../services/DataUtils.js'


 const Card = ({temp, icon, desc, time}) =>{
  let uri = 'https://openweathermap.org/img/wn/' + icon + '@4x.png';
  desc = Capitalise_Each_Word(desc?.toString())
  temp = FormatTemp(temp?.toString())
  let day = FormatDay(time)
return (
   <View style={styles.card}>

    <Text style = {styles.day}>{day}</Text>
    
    <View style = {styles.tempCont}>
      <Text style = {styles.temp}>{temp}</Text>
      <Image style={styles.icon} source={{uri: uri}}/>
    </View>

    <Text style = {styles.desc}>{desc}</Text>
   
   </View>
 );
}



 const Forecast = (list) => {
  let data = list.forecastData;
   return (
      <View style={styles.container}>

        <Text style = {styles.header}>5 day forecast</Text>
        
        <View style = {styles.days}> 
          <FlatList
            data={data}
            renderItem={({item}) => <Card temp = {item.temp} icon = {item.icon} desc = {item.desc} time ={item.time}/>}
            keyExtractor={(item, index) => index}
            horizontal = {true}
          />
        </View>
        
      </View>
   );
 };
 
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
     transform: [{translateY: 240}]
   },
   header: {
      fontSize: 22,
      color: 'white',
      backgroundColor: '#123',
      padding: 10,
      position: 'absolute',
      transform: [{translateX: -40},{translateY: -100}]
   },
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
   },
   day:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    transform: [{translateX: -40}]
   },
   tempCont:{
    flexDirection: 'row',
   },
   temp:{
    color: 'white',
    fontSize: 35,
    padding: 10,
   },
   icon:{
    width: 60,
    height: 70
   },
   desc:{
    color: 'white',
    fontSize: 16,
    
   },
   days:{
    transform: [{translateY: 20}]
   }
 });
 
 export default Forecast;
 