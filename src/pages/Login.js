import { View, Text, TouchableOpacity, Image,TextInput, StyleSheet,Alert } from 'react-native'
import React, {useState} from 'react'

import {styles}  from '../styles/Styles';
import { yetki } from '../settings/Config';

import { SharedGetUserTel, SharedGetUserCookie,SharedGetToken, SharedStatusProfil,SharedGetUserProfilePic,SharedGetUserAddress, SharedGetUserEmail, SharedGetUserId, SharedGetUserName, SharedGetUserPass, loginStatusType } from '../settings/Config'
import Verify from './Verify';


const axios = require('axios');

export default function App({navigation}) {

  const [visiblePass, setVisiblePass] = useState(true);
  const [tel, setTel] = useState('');
  const [pass, setPass] = useState('');
  const [token,setToken] = useState('');

  const [profilePic, setProfilePic] = useState('');
  
  let formData = new FormData();

  const  login_ok =   ( id,username,email,address,profilepic) => {
    console.log('SON DENEME: '+username);
    var SharedPreferences = require('react-native-shared-preferences');
    SharedPreferences.setItem(SharedGetUserId, id);
    SharedPreferences.setItem(SharedGetUserName, username);
    // SharedPreferences.setItem(SharedGetUserTel, username);
    SharedPreferences.setItem(SharedGetUserEmail, email);
    SharedPreferences.setItem(SharedGetUserAddress, address);
    SharedPreferences.setItem(SharedGetUserProfilePic, profilepic);


    // SharedPreferences.getItem(SharedGetUserId, function(value){
    //   console.log('Login İD :'+value);
    // });
    // // SharedPreferences.getItem(SharedGetUserTel, function(value){
    // //   console.log('deger 2'+value);
    // // });
    // SharedPreferences.getItem(SharedGetUserEmail, function(value){
    //   console.log('deger 3'+value);
    // });
    SharedPreferences.getItem(SharedGetUserProfilePic, function(value){
     setProfilePic(value);
    });



            }
            

  // console.log('2 : '+SharedGetUserId)
  // console.log('3 : '+SharedGetUserEmail)
  // console.log('4 : '+SharedGetUserPass)
  // console.log('5 : '+SharedGetUserTel)
  // console.log('5 : '+SharedGetToken)
  // console.log('6 : '+loginStatusType)
    

    const girisyap = () =>{
        // navigation.navigate('NavigationUser')
        if (tel !=0 && pass != 0 && (pass == 123 && tel == 123)) {
          Alert.alert('TELEFON : '+ tel +'\n'+'ŞİFRE : '+pass );
          navigation.navigate('NavigationUser');
        }else if(tel == 1234) {
          navigation.navigate('NavigationRoot')
        }
         else {
          Alert.alert('Bilgileri Eksiksiz Giriniz!!!');
        }
        
    }
    // const logIn = async () => {
    //   if (tel !='' && pass != ''){
    //     await fetch('https://curlyapi.herokuapp.com/api/auth/login',{
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-type' : 'application/json'
    //       },
    //       body: JSON.stringify({
    //         'username': tel,
    //         'password': pass
    //       })

    //     }).then(res => res.json())
    //     .then(resData=> { alert(resData.message); console.log(tel+'sifre    '+pass)} )
    //   }
    // }
    // async function logIn()  {
    //   console.log(tel+'///'+pass);
    //   let item ={ tel, pass};
    //   let result =  await fetch('https://curlyapi.herokuapp.com/api/auth/login',{
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-type' : 'application/json'
    //       },
    //       body: JSON.stringify(item)
          
    //     });
    //     console.log('item : '+item);
    //     result = await result.json();
    //     console.log('result : '+result);
    // }

    const handleLogin = async () => {
      try {
        console.log ('tel: '+tel+' /// '+'sifre'+pass);


        tel.length == 0 ? console.log(' k.adı giriniz') : console.log('sikinti yok tel');
        pass.length == 0 ? console.log(' pass giriniz') : console.log('sikinti yok pass');

        let inputSize = 0;
        tel.length == 0 || pass.length == 0 ? inputSize++ : inputSize = 0

        if(inputSize > 0) {
          console.log('Zorunlu alanları doldurunuz !!')
          return
        }

        console.log('uzunluk sonrası tel : '+tel);
        console.log('uzunluk sonrası pass : '+pass);

        formData.append('username',tel);
        formData.append('password', pass);
        console.log(formData);
        var config = {
          method: 'POST',
          url: 'https://curlyapi.herokuapp.com/api/auth/login',
          data: formData,
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        };
        
        await axios.post('https://curlyapi.herokuapp.com/api/auth/login',{username:tel,password:pass})
        .then(function (response) {
          let jsonpars = JSON.parse(JSON.stringify(response.data));
        console.log('1. giris');
        console.log(jsonpars)
        setToken( jsonpars.accessToken);
        console.log('token : '+token);
        // alert(token)
          var count = Object.keys(jsonpars).length
          console.log('Count : '+count);
          if (count == 0 ) {
            console.log('kulllanıcı Bilgileri hatalı ');
            console.log('////////////////////////////');
            console.log(jsonpars);
            console.log('////////////////////////////');
            return
          }

          console.log('LOGIN DATA ID : '+jsonpars["username"]);
          console.log('LOGIN DATA ID : '+JSON.stringify(response.data._id));


          console.log('====================================');
          console.log(jsonpars["username"]);
          console.log('====================================');
         
        if (jsonpars['verify'] != jsonpars['verifycode']){
          Alert.alert('UYARI ! ','Lütfen Hesabınızı Doğrulayınız',[
            {text: "ONAYLA", onPress: () => navigation.navigate('Verify')},
            { text:'iptal',}
          ]);
          login_ok (
            jsonpars['_id'],
          )
        } else {
          
          login_ok(
            jsonpars['_id'],      
            jsonpars["username"],
            // jsonpars["username"],
            jsonpars["email"],
            jsonpars["address"],
            jsonpars["profilepic"],
          );
          
          jsonpars['isAdmin'] === true ? 
          navigation.navigate('NavigationRoot')  : 
          navigation.navigate('NavigationUser')


      }
        }).catch( function (err) {
          console.log('1 catch error : '+err)
        });
       
      }
      catch (err) {
        // Handle Error Here
        console.error(err);
    }
    };







    const uyeOl = () =>{
      // navigation.navigate('NavigationUser')
      navigation.navigate('Register');
  }
  return (
    //3f6262
    <View style={styles.container}> 
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <Image  style={{width:160, height:160, borderRadius:160/2, backgroundColor:'gray', marginTop:30, marginBottom:45}} source={profilePic ===("") ? require('../assets/profile.png') : {uri:profilePic}}/>
      </View>
      <View style={{marginVertical:15, justifyContent:'center', alignItems:'center'}}>

        <View style={styles.sectionStyle}>
          <Image style={styles.imageStyle} source={require('../assets/input_phone.png')}/>
        <TextInput style={{flex:1 }}
        placeholder={'Telefon'}
        keyboardType='numeric'
        onChangeText={(tel) => setTel(tel)}
        ></TextInput>
        </View>
        
        <View style={styles.sectionStyle}>
          <Image style={styles.imageStyle} source={require('../assets/password2.png')}  />
        <TextInput style={{flex:1}}
        placeholder={'Şifre'}
        secureTextEntry={visiblePass}
        onChangeText={(pass) => setPass(pass)}
        ></TextInput>
        <TouchableOpacity onPress={() =>setVisiblePass(visiblePass ? false : true )}><Image  style={ styles.imageStyle , {marginRight:10} } source={require('../assets/eye3.png')}/></TouchableOpacity>
        </View>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>

    <TouchableOpacity style={{  backgroundColor:'#fa8072', borderRadius:5, width:250, height:50, justifyContent:'center', alignItems:'center',borderRadius:10 }}
                    onPress={() => handleLogin()}>
        <Text
            style={{ textAlign:'center', color:'white', fontWeight:'bold', width:'100%' }}
        > Giriş Yap </Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',marginTop:30, justifyContent:'center', alignItems:'center'}}>
      <Text style={{ textAlign:'center', justifyContent:'center', fontSize:20 }} > Don't have an account ? </Text>
        <TouchableOpacity  onPress={() => uyeOl()}>
          <Text style={{ fontSize:25, fontWeight:'bold'}}>Sign Up</Text></TouchableOpacity>
      
      </View>
        </View>
    </View>
  )
};




// const styles = StyleSheet.create({
//   sectionStyle: {
//     width:'85%',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#000',
//     height: 50,
//     borderRadius: 13,
//     margin: 10,
//   },
//   imageStyle: {
//     padding: 10,
//     margin: 5,
//     marginLeft:10,
//     height: 25,
//     width: 25,
//     resizeMode: 'stretch',
//     alignItems: 'center',
//   },
// });
