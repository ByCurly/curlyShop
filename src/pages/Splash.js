import { View, Text, Image } from 'react-native'
import React from 'react'

function timer(navigation) {
    setTimeout(() => {
        navigation.navigate('Login')
    },1000);
}

export default function App({navigation}) {
  return (
    <View style={{ flex:1 }}>
      <Image style={{ width: '100%', height: '100%'}} source={require('../assets/ss2.png')} />
      {timer(navigation)}
    </View>
  )
}