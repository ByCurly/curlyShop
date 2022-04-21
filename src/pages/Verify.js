import { View, Text, TextInput,TouchableOpacity, Alert } from 'react-native'
import React,{useState} from 'react'

import axios from 'axios';
import { SharedGetUserId } from '../settings/Config';
export default function App({navigation}) {

  const [text, setText] = useState();
  const [verifyData, setVerifyData] = useState();
  const [id, setId] = useState();
  var SharedPreferences = require('react-native-shared-preferences');
  SharedPreferences.getItem(SharedGetUserId, function(value){
    setId (value.toString());
    // console.log('asd: '+value)
  })
  // alert('id'+id)
  // setVerifyData()
  // console.log(id)
  const  verifyConfirm = async () => {
    if (text.length > 0  ){
     await axios.put(`https://curlyapi.herokuapp.com/api/auth/verify/${id}`,{
       verify:text
       
     })
     .then( async function(response) {       
       let JsonVerify = JSON.parse(JSON.stringify(response.data))
       try {
        await axios.get(`https://curlyapi.herokuapp.com/api/auth/${id}`)
        .then( function (response) {
          let vController = JSON.parse(JSON.stringify(response.data));
          
          if (vController['verify'] == vController ['verifycode'] ) {
            Alert.alert('Bilgilendirme ', 'Doğrulama Başarılı', [
              {text:'Keşfetmeye Başla', onPress: () => navigation.navigate('Login')}]);
          } else {
            Alert.alert('Bilgilendirme ', 'Doğrulama Başarısız ! ', [{text:'Kodu Tekrar Gir', onPress: () => setText()}]);
          }
        })
       }
      catch (err) {
        console.log('upppsss!')
        console.log(err);
      }
      //  Alert.alert('JSON VERİ :'+JsonVerify);
     })
     .catch( function (err) {
       console.log('bir sikinti olabilir kank');
       console.log(err);
     })
    } else {
      Alert.alert('Lütfen Onay Kodunu Giriniz ! ')
    }
  }
  return (
    <View style={{backgroundColor:'#e6e6fa', flex:1}}>
      <View style= {{ justifyContent:'center',alignItems:'center', flex:1}}>
      <TextInput style={{height:45,width:'90%', backgroundColor:'#e6e6fa',   alignItems: 'center',borderRadius:9,borderWidth:1, borderColor:'blue'}}
      onChangeText={(text) => setText(text)}
      value={text}
/>
      <TouchableOpacity onPress={() => verifyConfirm()} style={{margin:15, backgroundColor:'#ff6a6a', width:'90%', height:45, alignItems:'center', justifyContent:'center'}}><Text style= {{fontSize:25}}>VERIFY</Text></TouchableOpacity>
      </View>
    </View>
  )
}