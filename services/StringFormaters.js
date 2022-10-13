/* eslint-disable prettier/prettier */
export function Capitalise_Each_Word(str){
    str = str?.split(" ");
    for (var i = 0, x = str?.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str?.join(" ");
}

export function CurrentTime(){
    let timestamp = new Date()
    let hours = timestamp.getHours();
    let minutes = timestamp.getMinutes(); 
    if(minutes < 10) minutes = '0' + minutes;
    return hours + ':' + minutes
}

export function Time_24hr(timestamp){
    console.log(timestamp);
    timestamp = new Date(timestamp*1000)
    let hours = timestamp.getHours();
    let minutes = timestamp.getMinutes();
    if(minutes < 10) minutes = '0' + minutes;

    return hours + ':' + minutes;
}

export function FormatTemp (temp){
    let a = temp?.charAt(0)
    let b = temp?.charAt(1)
    return a + b + '°'
}


export function FormatDay(timestamp){
    timestamp = new Date(timestamp*1000);
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var day = days[timestamp.getDay()]
    return Capitalise_Each_Word(day?.substring(0,3))
}


export function FormatPercentage(decimal){
    decimal = decimal * 100
    return decimal + '%'
}