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
    }
    )});
    return output;
}

export function CondenseData(data) {
   return [data?.list[0], data?.list[8], data?.list[16],  data?.list[24], data?.list[32]];
}

export function RainVolume(list){
  let volume = 0;
  list?.slice(0,7).forEach(element =>{
    if(element.rain){
      volume += element.rain['3h']
    }
  });

  if(volume<10){
    return volume + 'mm'
  }
  else{
    return (volume/10) + 'cm'
  }
}
