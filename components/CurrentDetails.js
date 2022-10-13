/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
 import {View, StyleSheet, Image, Text} from 'react-native';
 import {Capitalise_Each_Word, Time_24hr, CurrentTime} from '../services/StringFormaters.js'
 
 
 const CurrentDetails = ({icon, description, location}) => {
    let uri = 'https://openweathermap.org/img/wn/' + icon + '@4x.png';
    description = Capitalise_Each_Word(description?.toString())

    const [time, setTime] = useState()

    useEffect(() => {
      setInterval(() => {
        setTime(CurrentTime())
       }, 1000);
    }, [])

   return (
     <View style={styles.container}>

     <View style = {styles.weatherCont}>
        <Image style={styles.icon} source={{uri: uri}}/>
        <Text style = {styles.description}>{description}</Text>
     </View>

     <View style = {styles.timeloc}>
     <Text style = {styles.time}>{time}</Text>
     <Text style = {styles.loc}>{location}</Text>
    </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     width: '100%',
     height: '30%',
     alignItems: 'center',
     justifyContent: 'center',
     flexDirection: 'row',
     position: 'absolute',
     transform :[{translateY: -270}]
   },
   weatherCont:{
    width: 177,
    height: 145,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
   },
   icon:{
    width: 200,
    height: 200,
   },
   description:{
    fontSize: 16,
    color: 'white',
    transform :[{translateY: -50}]
   },
   timeloc:{
    width: 177,
    height: 145,
    alignItems: 'center',
    justifyContent: 'center',
    transform :[{translateY: -5}],
    margin: 20
   },
   time:{
    fontSize: 58,
    color: 'white',
   },
   loc:{
    fontSize: 25,
    color: 'white',
   }
 });
 
 export default CurrentDetails;
 