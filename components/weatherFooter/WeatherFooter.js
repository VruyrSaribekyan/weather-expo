import React from 'react'
import { View, Text } from 'react-native'


export function WeatherFooter({data}) {

    return (
        <View  style={{flexDirection:'row', justifyContent:'space-around', marginBottom:40}}>
         <View>
         <Text style={{fontSize:12, color:'white',opacity:0.5}}>ветер</Text>
         <Text style={{fontSize:12, color:'white'}}>{
            data?.length!==0 ?  data[5]?.speed : null
        } м/с</Text>
        </View>

        <View>
            <Text style={{fontSize:12,color:'white',opacity:0.5}}>давление</Text>
            <Text style={{fontSize:12, color:'white'}}>{
            data?.length!==0 ?  data[3]?.pressure : null
        } мм рт. ст.</Text>

        </View>

        <View>
            <Text style={{fontSize:12, color:'white',opacity:0.5}}>влажность</Text>
            <Text style={{fontSize:12,textAlign:'center',color:'white'}}>{
            data?.length!==0 ?  data[3]?.humidity : null
        }%</Text>

        </View>
        <View>
            <Text style={{fontSize:12, color:'white',opacity:0.5}}>вероятность дождя</Text>
            <Text style={{fontSize:12,textAlign:'center', color:'white'}}>{
            data?.length!==0 ?  data[5]?.speed : null
        }%</Text>

        </View>
        </View>
    )
}
