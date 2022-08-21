/* eslint-disable prettier/prettier */
export function Format_Forecast_Data(list){
    let output = [];
    list.forEach((element, index) => {output.push(
    {
        temp: element.main.temp,
        icon: element.weather[0].icon,
        desc: element.weather[0].description,
        time: element.dt,
    ***REMOVED***
    )***REMOVED***);
    return output;
***REMOVED***