/* eslint-disable prettier/prettier */
export function Capitalise_Each_Word(str){
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    ***REMOVED***
    return str.join(" ");
***REMOVED***

export function Time_24hr(timestamp){
    timestamp = new Date(timestamp*1000)
    let hours = timestamp.getHours();
    let minutes = timestamp.getMinutes();
    if(minutes < 10) minutes = '0' + minutes;

    return hours + ':' + minutes;
***REMOVED***

export function FormatTemp (temp){
    //temp = temp.toString().substring(0,1)
    return temp[0] + temp[1] + '°'
***REMOVED***