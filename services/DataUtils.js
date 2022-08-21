/* eslint-disable prettier/prettier */
import axios from 'axios'


export function Format_Forecast_Data(list){
    let output = [];
    list.forEach(element => {output.push(
    {
        temp: element?.main.temp,
        icon: element?.weather[0].icon,
        desc: element?.weather[0].description,
        time: element?.dt,
    ***REMOVED***
    )***REMOVED***);
    return output;
***REMOVED***

export function CondenseData(data) {
   return [data?.list[0], data?.list[8], data?.list[16],  data?.list[24], data?.list[32]];
***REMOVED***

***REMOVED***
    const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + location + '&' + 'appid=' + key + '&units=metricc')
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***