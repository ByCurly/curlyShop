import { View, Text, Image, TouchableOpacity,Modal, Pressable , StyleSheet,TextInput, Alert, ScrollView} from 'react-native'
import React, {useEffect,useState} from 'react';

import axios from 'axios';

import {SharedGetUserName, SharedGetUserTel, SharedGetUserEmail, SharedGetUserAddress,SharedGetUserProfilePic} from '../../settings/Config';


const App = () => {

  useEffect(() => {
    // axios.get('https://curlyapi.herokuapp.com/api/users/api/'+{id})
    optimizasyon();
  },[])

  const [userName,setUserName] = useState('');
  const [telefon,setTelefon] = useState('DEGER');
  const [userMail,setUserMail] = useState('');
  const [userAddress,setUserAddress] = useState('');
  const [profilePic,setProfilePic] = useState('');


  const optimizasyon = (item) => {
    var SharedPreferences = require('react-native-shared-preferences');
    SharedPreferences.getItem(SharedGetUserName, function(value){
      setUserName(value);
    });
    SharedPreferences.getItem(SharedGetUserTel, function(value){
      setTelefon(value);
    });
    SharedPreferences.getItem(SharedGetUserEmail, function(value){
      setUserMail(value);
    });
    SharedPreferences.getItem(SharedGetUserAddress, function(value){
      setUserAddress(value);
    });
    SharedPreferences.getItem(SharedGetUserProfilePic, function(value){
      setProfilePic(value);
    });
    
};
const [modalVisible, setModalVisible] = useState(false);
  const update = () =>{
   
    <Modals />
  }
  
  return (
    <View style={{flex:1}}>
      
      <View style={{flex:4, backgroundColor:'purple'}}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <Image  style={{width:160, height:160, borderRadius:160/2, backgroundColor:'gray',marginHorizontal:'50%', marginVertical:'25%'}} source={profilePic ===("") ? require('../../assets/profile.png') : {uri:profilePic}}/>
      </View>
      </View>
      
      <View style={{flex:4, backgroundColor:'pink'}}>
          <View style= {{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginVertical:5}}>
          <Text>{userName}</Text> 
          <TouchableOpacity onPress={() => setModalVisible(true)}><Text>düzenle</Text></TouchableOpacity>
          </View>
          <View style= {{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginVertical:5}}>
          <Text>{userName}</Text> 
          <TouchableOpacity><Text>düzenle</Text></TouchableOpacity>
          </View>
          <View style= {{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginVertical:5}}>
          <Text>{telefon}</Text> 
          <TouchableOpacity><Text>düzenle</Text></TouchableOpacity>
          </View>
          <View style= {{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginVertical:5}}>
          <Text>{userMail}</Text> 
          <TouchableOpacity><Text>düzenle</Text></TouchableOpacity>
          </View>
          <View style= {{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginVertical:5}}>
          <Text style = {{width:'85%'}}>{userAddress}</Text> 
          <TouchableOpacity><Text>düzenle</Text></TouchableOpacity>
          </View>
      </View>
      <Modal 
    animationType="slide"

    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setModalVisible(!modalVisible);
    }}  >
      <View style={{flex: 1,backgroundColor:'transparent', justifyContent:'center'}}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Profili Güncelle</Text>
        <View style={{ flex:2, backgroundColor:'#ff1493', width:'100%',marginHorizontal:5, justifyContent:'center', alignItems:'center' }}>
          <View style= {{justifyContent:'space-between',flexDirection:'row', backgroundColor:'red',alignItems:'center', width:'100%', paddingHorizontal:'5%',borderWidth:1,borderRadius:25  }}>
          <Text style={{width:'30%'}}>Kullanici ADİ : </Text>
          <TextInput style={{borderLeftWidth:1, width:'70%', textAlign:'center'}} placeholder='DENEME'></TextInput>
          </View>
        </View>
        <View style={{flex:1, backgroundColor:'blue', flexDirection:'row', justifyContent:'center',alignItems:'center', width:'100%'}}>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>KAYDET</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>VAZGEÇ</Text>
        </Pressable>
        </View>
      </View>
      </View>

  </Modal>
    </View>
  )
};

// const Modals = () => {
    
//     return (

//     <Modal
//     animationType="slide"
//     transparent={true}
//     visible={modalVisible}
//     onRequestClose={() => {
//       Alert.alert("Modal has been closed.");
//       setModalVisible(!modalVisible);
//     }}  >
//       <View style={styles.modalView}>
//         <Text style={styles.modalText}>Hello World!</Text>
//         <View style={{ flex:3, backgroundColor:'#ff1493', width:'100%', marginHorizontal:5, justifyContent:'center', alignItems:'center'}}>
//           <View style= {{justifyContent:'space-between',flexDirection:'row', backgroundColor:'red',alignItems:'center' }}>
//           <Text>Kullanici ADİ :</Text>
//           <TextInput style={{borderRadius:12,borderWidth:1,}} placeholder='DENEME'></TextInput>
//           </View>
//         </View>
//         <View style={{flex:2, backgroundColor:'blue', flexDirection:'row', justifyContent:'center',alignItems:'center', width:'100%'}}>
//         <Pressable
//           style={[styles.button, styles.buttonClose]}
//           onPress={() => setModalVisible(!modalVisible)}
//         >
//           <Text style={styles.textStyle}>Hide Modal</Text>
//         </Pressable>
//         <Pressable
//           style={[styles.button, styles.buttonClose]}
//           onPress={() => setModalVisible(!modalVisible)}
//         >
//           <Text style={styles.textStyle}>Hide Modal</Text>
//         </Pressable>
//         </View>
//       </View>

//   </Modal>

//   )
// }


const styles = StyleSheet.create({
  genelarkaplan: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    
    // marginVertical:'center',
    
    backgroundColor: "gray",
    borderRadius: 20,
    padding: 5,
    justifyContent:'center',
    alignItems: "center",
  
    
    shadowColor: "#000",
    height:'30%',

    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  
});

export default App