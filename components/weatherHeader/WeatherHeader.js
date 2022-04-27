import React, { useEffect, useContext } from 'react'
import { Text, View,TouchableWithoutFeedback } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Context } from '../context';






export function Weatherheader(props) {


    
var contextData = React.useContext(Context);
console.log(contextData)
return (
     <View >
         <View style={{margin:30,backgroundColor:'#6996ff', alignItems:'flex-start', justifyContent:'flex-start'}}>
         <Text style={{fontSize:30, color:'white'}}></Text>

          <View style={{flexDirection:'row'}}>
              <TouchableWithoutFeedback onPress={contextData.get}>
                  <Text style={{fontSize:17, color:'white', opacity:0.5}}><FontAwesome  color={'white'} name={'location-arrow'} /> Мое местоположение</Text>
       </TouchableWithoutFeedback>
       </View> 
    </View>
   
     </View>
    )
}
