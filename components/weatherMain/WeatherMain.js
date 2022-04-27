import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
function kelvin(tem){
    return tem-273.15
}

// import WeatherData from '../weatherData/WeatherData';
export function WeatherMain({data}) {console.log(data)

    return (
     <View style={{marginBottom:60, alignItems:'center'}}>
        <View style={{flexDirection:'row'}}>
        </View><Text style={{fontSize:90,color:'white'}}>
          <Ionicons name="sunny" size={80} color="#fff8a6" />{
            data.length!==0 ?  kelvin(data[3]?.temp).toFixed(1) : null
        }</Text>
        <Text style={{fontSize:70,textAlign:'center', color:'white'}}>{
            data.length!==0 ?  data[1][0]?.main  : null
        }</Text>
     </View>
    )
}
