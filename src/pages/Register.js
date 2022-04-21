import axios from "axios";
import React, {useState} from "react";
import { View , Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';

import BouncyCheckbox from "react-native-bouncy-checkbox";

import {styles}  from '../styles/Styles';

export default function App({navigation})  {
    const backPress = () =>{
        // navigation.navigate('NavigationUser')
        navigation.navigate('Login')
    }
    const [visiblePass, setVisiblePass] = useState(true);



    const [telefon, setTelefon] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [ckvkk, setcKvkk] = useState(true);
    const [sozlesme, setSozlesme] =useState (true);
    const [address, setAddress] = useState('');

    const uyeOl = async () =>{
        // navigation.navigate('NavigationUser')
        try {
            if (!ckvkk) {
                console.log('KVKK yı Onaylayınız ! ');
                alert('KVKK yı Onaylayınız !')
                return
            }
            if (!sozlesme) {
                console.log('Sozlesmeyi Onaylayınız ! ');
                alert('Sozlesmeyi Onaylayınız !')
                return
            }
            await axios.post('https://curlyapi.herokuapp.com/api/auth/register',{
                username:telefon,
                email:mail,
                password:password,
                kvkk:ckvkk,
                sozlesme:sozlesme,
                name:name,
                address:address
            })
            .then(function (response) {
                console.log('adım 1')
                 let jsonparse_register = JSON.parse(JSON.stringify(response.data))
                console.log(response.data);
                // console.log('jsonparse : '+jsonparse_register['isAdmin']);
                // if(jsonparse_register['isAdmin'] == true){
                    
                // }
                Alert.alert('Bilgilendirme ', 'Kayıt Başarılı', [{text:'Keşfetmeye Başla', onPress: () => navigation.navigate('Login')}]);
                
            }).catch( function (err) {
                console.log(' Register catch error : '+err)
              });
           
        }
        catch (err) {
            console.log(err);
        }



        // if(ckvkk || sozlesme == false) {
        //     console.log('Sozlesve ve KVKK onaylayınız');
        //     return; 
        //     if(ckvkk == false){
        //         console.log('KVKK Onaylayınız ..!');
        //     }else if (sozlesme == false ) {
        //         console.log('Sozlesme Onaylayınız ..!');
        //     }
        // } 
        // else{

       // Alert.alert('Kayıt Başarılı.. Heycan Dolu Alışverilereee..');



    }
    const logIn = () => {
        navigation.navigate('Login');
    }
return (
    <ScrollView style={{flex:1, backgroundColor:'#ffffe0'}}>
    <View style={styles.container} >
        <View style={{marginTop:120, marginLeft:30}}>
            <Text style={{ fontWeight:"bold", fontSize:30, color:'black'}}>Hadi Başlayalım..</Text>
            <Text style={{marginTop:15, color:'black'}}>Create an account to continue!</Text>
        </View>

        <View style={{marginVertical:15, justifyContent:'center', alignItems:'center'}}>

        <View style={styles.sectionStyle}>
        <Image style={styles.imageStyle} source={require('../assets/input_phone.png')}/>
        <TextInput style={{flex:1 }}
        placeholder={'Telefon'}
        keyboardType='numeric'
        onChangeText={(telefon) => setTelefon(telefon)}
        ></TextInput>
        </View>

        <View style={styles.sectionStyle}>
        <Image style={styles.imageStyle} source={require('../assets/password2.png')}  />
        <TextInput style={{flex:1}}
        placeholder={'Şifre'}
        secureTextEntry={visiblePass}
        onChangeText={(password) => setPassword(password)}
        ></TextInput>
        <TouchableOpacity onPress={() =>setVisiblePass(visiblePass ? false : true )}><Image  style={ styles.imageStyle , {marginRight:10} } source={require('../assets/eye3.png')}/></TouchableOpacity>
        </View>

        <View style={styles.sectionStyle}>
        <Image style={styles.imageStyle} source={require('../assets/input_phone.png')}/>
        <TextInput style={{flex:1 }}
        placeholder={'AD SOYAD'}
        keyboardType='default'
        onChangeText={(name) => setName(name)}
        ></TextInput>
        </View>

        <View style={styles.sectionStyle}>
        <Image style={styles.imageStyle} source={require('../assets/at.png')}/>
        <TextInput style={{flex:1 }}
        placeholder={'Mail'}
        keyboardType='email-address'
        onChangeText={(mail) => setMail(mail)}
        ></TextInput>
        </View>

        <View style={styles.sectionStyle}>
        <Image style={styles.imageStyle} source={require('../assets/at.png')}/>
        <TextInput style={{flex:1 }}
        placeholder={'Address'}
        keyboardType='twitter'
        onChangeText={(address) => setAddress(address)}
        ></TextInput>
        </View>

        {/* , */}
            <View style={{}}> 
            <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center', marginBottom:10}}>
            <BouncyCheckbox
            disabled={false}
            isChecked={sozlesme}  
            onPress={ () => setSozlesme(!sozlesme)}
           
            />
            <Text> Üyelik Sözleşmesi</Text>
            </View>
            <View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center', alignSelf:'flex-start'}}>
            <BouncyCheckbox
            disabled={false}
            isChecked={ckvkk}  
            onPress={ () => setcKvkk(!ckvkk)}
            />
            <Text> KVKK Onayı</Text>
            </View>
            </View>
        </View>
        
        <View style={{justifyContent:'center',alignItems:'center'}}>

        <TouchableOpacity style={{  backgroundColor:'pink', borderRadius:5, width:250, height:50, justifyContent:'center', alignItems:'center',borderRadius:10 }}
                onPress={() => uyeOl()}>
    <Text
        style={{ textAlign:'center', color:'white', fontWeight:'bold', width:'100%' }}
    > ÜYE OL </Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',marginTop:30, justifyContent:'center', alignItems:'center'}}>
      <Text style={{ textAlign:'center', justifyContent:'center', fontSize:20 }} > Already have an account? </Text>
        <TouchableOpacity  onPress={() => logIn()}>
          <Text style={{ fontSize:25, fontWeight:'bold'}}>Sign In</Text></TouchableOpacity>
      
        </View>

        </View>

        {/* <TouchableOpacity style={{  backgroundColor:'red', borderRadius:5, width:50, height:25, justifyContent:'center', alignItems:'center',borderRadius:10 }}
                          onPress={() => backPress()}> 
                          <Text>GERİ</Text> 
        </TouchableOpacity>
        <Text> Register </Text> */}
    </View>
    </ScrollView>
)
};



// const styles = StyleSheet.create({
//     sectionStyle: {
//       width:'85%',
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderWidth: 1,
//       borderColor: '#000',
//       height: 50,
//       borderRadius: 13,
//       margin: 10,
//     },
//     imageStyle: {
//       padding: 10,
//       margin: 5,
//       marginLeft:10,
//       height: 25,
//       width: 25,
//       resizeMode: 'stretch',
//       alignItems: 'center',
//     },
//   });
  