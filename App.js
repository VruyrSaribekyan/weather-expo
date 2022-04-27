import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Weather from './components/weather/Weather';
import { WeatherFooter } from './components/weatherFooter/WeatherFooter';
import { Weatherheader } from './components/weatherHeader/WeatherHeader';
import { WeatherMain } from './components/weatherMain/WeatherMain';
import { Context } from './components/context';
import * as Location from 'expo-location';

export default function App() {
 

        const [location, setLocation] = useState([]);
          const [locationn, setLocationn] = useState([]);
      
      let lat=[]
      let lon =[]
        useEffect(() => {
          (async () => {
            Location.requestBackgroundPermissionsAsync();


            let location = await Location.getCurrentPositionAsync();   
                       if(data.length!==undefined)  {

            setLocation(location.coords.latitude.toFixed(6));
            setLocationn(location.coords.longitude.toFixed(6));
                       }
          })();
        }, []);
      lon.push(location)
      
      lat.push(locationn)
      const [data, setData]= useState([])
    async   function get(){

try{
   const res=  await  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat.toString()}&lon=${lon.toString()}&appid=f089f4813b16a1594a979ef3ebd2fbe4`) 
   const data = await res.json()
 setData(Object.values(data))

   //           .then((response) => response.json())
//             .then((res) => {       
//
 }  catch(e){
console.log(e)
  }            
        
        }
    
      
  return (  
     <Context.Provider value={{get:get}}>

    <View style={styles.container}>
      <Weatherheader />  
      <WeatherMain data={data}/>
      <WeatherFooter data={data}/>
      <StatusBar style="auto" /></View>    
        </Context.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    display:'flex',
    justifyContent:'space-between',
    backgroundColor:'#6994ff',
    
  },
});
