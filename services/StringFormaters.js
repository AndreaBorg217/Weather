/* eslint-disable prettier/prettier */
export function Capitalise_Each_Word(str){
    str = str?.split(" ");
    for (var i = 0, x = str?.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    ***REMOVED***
    return str?.join(" ");
***REMOVED***

export function Time_24hr(timestamp){
    timestamp = new Date(timestamp*1000)
    let hours = timestamp.getHours()-2;
    let minutes = timestamp.getMinutes();
    if(minutes < 10) minutes = '0' + minutes;

    return hours + ':' + minutes;
***REMOVED***

export function FormatTemp (temp){
    let a = temp?.charAt(0)
    let b = temp?.charAt(1)
    return a + b + '°'
***REMOVED***


export function FormatDay(timestamp){
    timestamp = new Date(timestamp*1000);
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var day = days[timestamp.getDay()]
    return Capitalise_Each_Word(day?.substring(0,3))
***REMOVED***