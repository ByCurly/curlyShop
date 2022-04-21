import { View, Text, Image, Dimensions,ImageBackground,TouchableOpacity,ScrollView, Alert, FlatList,StyleSheet, Modal, Pressable, Share } from 'react-native'
import React, {useState, useEffect} from 'react'
import   'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { SliderBox } from 'react-native-image-slider-box';
import { SharedGetUserId } from '../../settings/Config';


import axios from 'axios';

export default function App({navigation, route}) {

    const grid = 1;
    const imgWidth =( Dimensions.get('window').width );
    const widtth = (Dimensions.get('screen').width*0,6);
    const [sepetId, setSepetId] = useState();

    const [data, setData] = useState({});
    const [sepetData, setSepetData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [userId, setUserId] = useState();
    var SharedPreferences = require('react-native-shared-preferences');
    SharedPreferences.getItem(SharedGetUserId, function(value){
      setUserId (value);
      // console.log('asd: '+value)
    })
    const imgHeight = (Dimensions.get('window').height*0.9);

    useEffect(() => {
      urunDetay(route.params._id);
      
    }, []);

    const urunDetay = async (ID) => {
      console.log('IDDDDDD : '+ ID);

      await axios.get('https://curlyapi.herokuapp.com/api/products/find/'+ID)
      .then(res => {
          setData(JSON.parse(JSON.stringify(res.data)));
          console.log('///////////URUNDETAY/////////////')
         // console.log(data);
      }
      )
      .catch((error) => console.error('UDHatasi:'+error))
      .finally(() => setLoading(false));
    }   
    
      const onShare = async () => {
        try {
          const result = await Share.share({
            message:'Şu Harika Ürüne Göz At : ' +  data.title + '\n'+data.img,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

      const [modalVisible, setModalVisible] = useState(false);
    const showModal = () => {
           
        return (
          <View style={styles.centeredView}>
            

          </View>
        );
      
    };
    const backButton = () =>  {
      
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Urunler',
            params: { someParam: 'Param1' },
          },
        ],
      })
    };
    const s1 = require('../../assets/heart.png');
    const s2 = require('../../assets/heart1.png');
    const [kalp, setKalp] = useState(false);
    const [selectedBeden,setSelectedBeden] =useState('BEDEN');
    
    console.log(kalp === true ? 'favorilere eklendi' : 'favorilerden çıkartıldı')

    const imgData = [
      // require('../../assets/elbise1.png'),
      // require('../../assets/elbise2.png'),
      // require('../../assets/elbise3.png'),
      // require('../../assets/elbise4.png')
      {uri: data.img1},
      {uri: data.img2},
      {uri: data.img3},
      {uri: data.img3},
    ];
    console.log(data._id)
  const buyNow =async () => {

    await axios.post('https://curlyapi.herokuapp.com/api/carts/',{

      userId:userId,
      products:[
        {
          productId:data._id,
          title:data.title,
          desc:data.desc,
          quantity:5,
          price:data.price,
          imgCart:data.imgCart
        }
      ]  })
      .then( function (response) {
        
        let sepetVeri = JSON.parse(JSON.stringify(response.data));
        var count = Object.keys(sepetVeri).length;

        if (count != 0){


         console.log('içveri1 : '+sepetVeri['_id']);

         navigation.navigate('Cart', {useId:sepetVeri['_id']})
        }
        // setSepetId('');
        // setSepetId(sepetVeri['_id']);
        // console.log('veri:'+response.data.data);
      })
      .catch((err) =>  {console.log(err)});     
  // navigation.navigate('Cart', {userId:userId})  
  };

  const addToCart = () => {
    alert('ürün sepete eklendi')
  };



  return (

   
    <View style={{flex:1}} >
      <View style={{ flex:4,backgroundColor:'cyan'}}>
    
      <ImageBackground  resizeMode="cover" style={{ flex: 1, justifyContent: "flex-start"}} source={{uri: data.img}}> 
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
       <TouchableOpacity onPress={backButton}>
         <Image style={{ padding: 10,margin: 5, marginLeft:20, marginTop:20, height: 25, width: 25,resizeMode: 'stretch', backfaceVisibility:'visible',}} source={require('../../assets/previous.png')}/>
         </TouchableOpacity>
         <View style={{flexDirection:'row'}}>
         <TouchableOpacity onPress={onShare}>
         <Image style={{ padding: 10,margin: 5, marginRight:20, marginTop:20, height: 30, width: 30,resizeMode: 'stretch', backfaceVisibility:'visible',}} source={require('../../assets/share.png')}/>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('Carts')}>
         <Image style={{ padding: 10,margin: 5, marginRight:20, marginTop:20, height: 30, width: 30,resizeMode: 'stretch', backfaceVisibility:'visible',}} source={require('../../assets/sepet2.png')}/>
         </TouchableOpacity>   
         </View>
           </View>
         <TouchableOpacity style={{flex:1}} onPress={() => setModalVisible(!modalVisible) }/>   
          
          <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
              >
                <View style={{height:'80%',width:'100%',}}>
                
                  <View style={styles.modalView}>
                    <View style={{ flexDirection:'row', backgroundColor:'transparent', justifyContent:'space-between', width:'90%', paddingHorizontal:25, alignContent:'center', paddingTop:10 }}>
                    <Text style={styles.modalText}>{data.title}</Text> 
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <Image style={{ padding: 10, height: 30, width: 30,resizeMode: 'stretch',position:'absolute',}} source={require('../../assets/cancel.png')}/>
                    </TouchableOpacity>   

                    </View>
                    <View>
                      <View style= {{height:imgHeight, backgroundColor:'pink'}} >
                      <SliderBox images={imgData}
                      sliderBoxHeight={imgHeight}/>
                      </View> 
                      </View>                 

                  </View>
                </View>
               
              </Modal>
            
       </ImageBackground> 



      </View>
      
      <View style={{ flex:3,  margin: 2}}>
      <ScrollView style={{backgroundColor:'#c6e2ff'}}>
        <View>
          <Text style={{justifyContent:'center',margin:10, alignItems:'center', textAlign:'center', fontWeight:'bold',padding:10}}>{data.title}</Text>
            <View style = {{ flexDirection:'row', justifyContent:'space-between', paddingHorizontal:15, margin:5}}>
          <Text style={{justifyContent:'center',margin:2, alignItems:'center'}}>{data.productCode}</Text>
          <Text style={{justifyContent:'center',margin:2, alignItems:'center'}}>{data.categories}</Text>
            </View>
        </View>

        <View  style={{    borderBottomColor: 'gray',    borderBottomWidth: 1,  }}/>

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableOpacity onPress={() => console.log('ÜRÜNE Puan Veriniz ..!')}>
          <Text style={{justifyContent:'center',margin:8, alignItems:'center', backgroundColor:'pink', padding:7}}> 4.4* </Text>
          </TouchableOpacity>
          <Text style={{justifyContent:'center',margin:8, alignItems:'center', padding:7}}>2.254 rating </Text>
          <TouchableOpacity onPress={() => setKalp(kalp ? false : true)}> 
          <Image style={{justifyContent:'center',margin:8, alignItems:'center', padding: 7,height: 25, width: 25,resizeMode: 'stretch', backfaceVisibility:'visible',}} source={kalp == true ? s2 : s1}></Image>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{justifyContent:'center',margin:6, alignItems:'center',  padding:7, fontWeight: 'bold' }}> $99.90 </Text>
          <Text style={{justifyContent:'center',margin:6, alignItems:'center', padding:7,textDecorationLine: 'line-through'}}> $100 </Text>
          <Text style={{justifyContent:'center',margin:6, alignItems:'center', padding:7, color:'green'}}> 1% off </Text>
         
        </View>
       
        <View style={{flexDirection:'row', justifyContent:'center'}} >
          <View style={{justifyContent:'center', alignItems:'center', width:'50%'}}>

          <Picker
            selectedValue={selectedBeden}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedBeden(itemValue)
            }>
            <Picker.Item label="ASD" value="a" />
            <Picker.Item label="DSDSDSD" value="b" />
          </Picker>
          </View>
            {/* <Text style={{justifyContent:'center',margin:6, alignItems:'center',  padding:7, fontWeight: 'bold' }}> {beden} </Text> */}
            <Text style={{justifyContent:'center',margin:6, alignItems:'center', padding:7,color:'black'}}> RENK </Text>
          
          
          
        </View>
        <View  style={{    borderBottomColor: 'black',    borderBottomWidth: 1,  }}/>
        <View style={{width:imgWidth, height:85, padding:10}}>
          <Text >{data.desc}</Text>
         
        </View>
        <View style={{backgroundColor:'pink',width:imgWidth, height:85}}>
          <Text >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
         
        </View>
        <View style={{backgroundColor:'gray',width:imgWidth, height:85}}>
          <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
         
        </View>
        <View style={{backgroundColor:'pink',width:imgWidth, height:85}}>
          <Text >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
         
        </View>


      {/* <ImageBackground resizeMode="cover" style={{ flex: 1, justifyContent: "center"}} source={require('../../assets/b.jpg')}>
       <TouchableOpacity onPress={backButton()}
       ><Image style={{ padding: 10,margin: 5, marginLeft:10, marginTop:-150, height: 25, width: 25,resizeMode: 'stretch', backfaceVisibility:'visible',}} source={require('../../assets/previous.png')}/></TouchableOpacity>
       </ImageBackground> */}
       </ScrollView>
       <View  style= {{flexDirection:'row', height:45,backgroundColor:'transparant'}}>
         <TouchableOpacity style={{width:'50%',}} onPress={() => addToCart()}>
         <Text style={{textAlignVertical:'center',textAlign:'center', width:'100%',height:'100%',  fontSize:19,fontWeight: 'bold', color:'black',borderRadius:12,backgroundColor:'orange' }}>ADD TO CART</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => buyNow()} style={{width:'50%',backgroundColor:'blue',justifyContent:'center',borderRadius:12}}>
         <Text style={{textAlignVertical:'center',backgroundColor:'purple', width:'100%', height:'100%', justifyContent:'center', textAlign:'center', color:'white', fontSize:19,fontWeight: 'bold',borderRadius:12}}>Buy NOW</Text>
         </TouchableOpacity>
       </View>

       
      </View>
      
    </View>

  )
};


const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
 
  deneme: {
    justifyContent: 'center',
    backgroundColor: 'transparent',

  },
 
  text: {
    fontSize: 24,
    color:'#BF360C',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
   marginTop:10,
    backgroundColor: "#c6e2ff",
    borderRadius: 20,
    padding: 0,
    alignItems: "center",
    shadowColor: "#000",
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
  }
});

