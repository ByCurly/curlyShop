// import { View, Text,FlatList, ImageBackground,Alert,  Dimensions, Button, Share,StyleSheet, Modal, Pressable, TextInput } from 'react-native'
// import React, {useState, useEffect} from 'react'
// import { SliderBox } from 'react-native-image-slider-box';
// import { Picker } from '@react-native-picker/picker';
// import axios from 'axios';
// const App = (navigation) => {

// const imgHeight = (Dimensions.get('window').height*0.8);

// const [selectedBeden,setSelectedBeden] =useState('BEDEN');
    
// const imgData = [
//   require('../../assets/elbise1.png'),
//   require('../../assets/elbise2.png'),
//   require('../../assets/elbise3.png'),
//   require('../../assets/elbise4.png')
//     ];
//     useEffect(() => {
//       resimCek();
      
//     }, []); 
    
//   const [resimDat,setResimDat] = useState([]);



//   const resimCek = async () => {
//     await axios.get('https://curlyapi.herokuapp.com/api/products/find/6241b33d481af484afad0916')
//     .then ( res => {
//       setResimDat(res.data);
//       console.log(resimDat['img1']);
//     })
//     .catch((err) => console.log(err));
//   }



//   const imgData2 = [
//     // {uri: 'https://n11scdn.akamaized.net/a1/1200_1800/giyim-ayakkabi/pijama/kadin-pijama-takim-kisa-kollu-bayan-pijama-takimi__0983903331864095.jpg'},
//     // {uri: 'https://n11scdn.akamaized.net/a1/1200_1800/giyim-ayakkabi/pijama/kadin-pijama-takim-kisa-kollu-bayan-pijama-takimi__1341855606064855.jpg'},
//     // {uri: 'https://n11scdn.akamaized.net/a1/1200_1800/giyim-ayakkabi/pijama/kadin-pijama-takim-kisa-kollu-bayan-pijama-takimi__0208452307486023.jpg'},
//     // {uri: 'https://n11scdn.akamaized.net/a1/1200_1800/giyim-ayakkabi/pijama/kadin-pijama-takim-kisa-kollu-bayan-pijama-takimi__0246031655739374.jpg'},


//     {uri: resimDat.img1},
//     {uri: resimDat['img2']},
//     {uri: resimDat['img3']},
//     {uri: resimDat['img3']},
//       ];





//       const onShare = async () => {
//         try {
//           const result = await Share.share({
//             message:
//               'React Native | A framework for building native apps using React',
//           });
//           if (result.action === Share.sharedAction) {
//             if (result.activityType) {
//               // shared with activity type of result.activityType
//             } else {
//               // shared
//             }
//           } else if (result.action === Share.dismissedAction) {
//             // dismissed
//           }
//         } catch (error) {
//           alert(error.message);
//         }
//       };



    

//   return (
//     // <View>
//       <View>
//         {/* <View style= {{height:imgHeight, backgroundColor:'pink'}} >
//        <SliderBox images={imgData}
//        sliderBoxHeight={imgHeight}/>
//        </View> */}
//                <View style= {{height:imgHeight, backgroundColor:'pink'}} >
//                <SliderBox images={imgData2}
//                sliderBoxHeight={imgHeight}
//                />
//                </View>
//                </View>
//     //     <View>
//     //       {/* <Button onPress={onShare} title={'DENEME'}></Button> */}
        


//     // <Modals />

//         // </View>
//         // {/* <View>
//         // <Picker
//         //   selectedValue={selectedBeden}
//         //   onValueChange={(itemValue, itemIndex) =>
//         //     setSelectedBeden(itemValue)
//         //   }>
//         //   <Picker.Item label="Java" value="java" />
//         //   <Picker.Item label="JavaScript" value="js" />
//         // </Picker>
//         //         </View> */}
//         //     </View>





//           );
//         };
      
//         const styles = StyleSheet.create({
//           genelarkaplan: {
            
//             backgroundColor:'red',
//             flex: 1,
            
//             justifyContent: "center",
//             alignItems: "center",

//             marginTop: 22,
//             marginBottom:44
//           },
//           modalView: {
//             marginTop:'20%',
//             height:'100%',
//             width:'100%',
//             margin: 20,
//             backgroundColor: "pink",
//             borderRadius: 20,
//             padding: 35,
//             alignItems: "center",
//             shadowColor: "#000",
//             shadowOffset: {
//               width: 0,
//               height: 2
//             },
//             shadowOpacity: 0.25,
//             shadowRadius: 4,
//             elevation: 5
//           },
//           button: {
//             borderRadius: 20,
//             padding: 10,
//             elevation: 2
//           },
//           buttonOpen: {
//             backgroundColor: "#F194FF",
//           },
//           buttonClose: {
//             backgroundColor: "#2196F3",
//           },
//           textStyle: {
//             color: "white",
//             fontWeight: "bold",
//             textAlign: "center"
//           },
//           modalText: {
//             marginBottom: 15,
//             textAlign: "center"
//           }
//         });



        
//         const Modals = () => {
//           const [modalVisible, setModalVisible] = useState(false);
//           return (
//               <View style={styles.genelarkaplan}>
//           <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert("Modal has been closed.");
//             setModalVisible(!modalVisible);
//           }}
//         >
//           <View style={styles.genelarkaplan}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalText}>Hello World!</Text>
//               <View style={{flexDirection:'column', flex:10, backgroundColor:'#ff1493', width:'100%', marginHorizontal:5}}>
//                 <View style= {{justifyContent:'space-between',flexDirection:'row', backgroundColor:'red',alignItems:'center' }}>
//                 <Text>Kullanici ADİ :</Text>
//                 <TextInput style={{borderRadius:12,borderWidth:1,}} placeholder='DENEME'></TextInput>
//                 </View>
//                 <View style= {{justifyContent:'space-between',flexDirection:'row', }}>
//                 <Text>Kullanici ADİ :</Text>
//                 <TextInput style={{borderRadius:12,borderWidth:1,height:'10%'}} placeholder='DENEME'></TextInput>
//                 </View>
//               </View>
//               <View style={{flex:1, backgroundColor:'blue', flexDirection:'row', justifyContent:'center',alignItems:'center', width:'100%'}}>
//               <Pressable
//                 style={[styles.button, styles.buttonClose]}
//                 onPress={() => setModalVisible(!modalVisible)}
//               >
//                 <Text style={styles.textStyle}>Hide Modal</Text>
//               </Pressable>
//               <Pressable
//                 style={[styles.button, styles.buttonClose]}
//                 onPress={() => setModalVisible(!modalVisible)}
//               >
//                 <Text style={styles.textStyle}>Hide Modal</Text>
//               </Pressable>
//               </View>
//             </View>
//           </View>
//         </Modal>

       
//         <Pressable
//           style={[styles.button, styles.buttonOpen]}
//           onPress={() => setModalVisible(true)}
//         >
//           <Text style={styles.textStyle}>Show Modal</Text>
//         </Pressable>
//       </View>
//           )
//         };
//         const Modals2 = () => {
//           const [modalVisible, setModalVisible] = useState(false);
//           return (
//               <View style={styles.genelarkaplan}>
//           <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert("Modal has been closed.");
//             setModalVisible(!modalVisible);
//           }}
//         >
//           <View style={styles.genelarkaplan}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalText}>Hello World!</Text>
//               <View style={{flexDirection:'column', flex:10, backgroundColor:'#ff1493', width:'100%', marginHorizontal:5}}>
//                 <View style= {{justifyContent:'space-between',flexDirection:'row', backgroundColor:'red',alignItems:'center' }}>
//                 <Text>Kullanici ADİ :</Text>
//                 <TextInput style={{borderRadius:12,borderWidth:1,}} placeholder='DENEME'></TextInput>
//                 </View>
//                 <View style= {{justifyContent:'space-between',flexDirection:'row', }}>
//                 <Text>Kullanici ADİ :</Text>
//                 <TextInput style={{borderRadius:12,borderWidth:1,height:'10%'}} placeholder='DENEME'></TextInput>
//                 </View>
//               </View>
//               <View style={{flex:1, backgroundColor:'blue', flexDirection:'row', justifyContent:'center',alignItems:'center', width:'100%'}}>
//               <Pressable
//                 style={[styles.button, styles.buttonClose]}
//                 onPress={() => setModalVisible(!modalVisible)}
//               >
//                 <Text style={styles.textStyle}>Hide Modal</Text>
//               </Pressable>
//               <Pressable
//                 style={[styles.button, styles.buttonClose]}
//                 onPress={() => setModalVisible(!modalVisible)}
//               >
//                 <Text style={styles.textStyle}>Hide Modal</Text>
//               </Pressable>
//               </View>
//             </View>
//           </View>
//         </Modal>

       
//         <Pressable
//           style={[styles.button, styles.buttonOpen]}
//           onPress={() => setModalVisible(true)}
//         >
//           <Text style={styles.textStyle}>Show Modal</Text>
//         </Pressable>
//       </View>
//           )
//         }

        
// export default App



import { View, Text , StyleSheet, ScrollView, SafeAreaView,Image,FlatList, TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function Cart() {
  const [urunAdet,setUrunAdet] = useState(1);
  const [fiyat,setFiyat] = useState();
  const [toplamTutar,setToplamTutar] = useState();
  const [dataaa, setDataaa] = useState([]);

  useEffect( () => {
    axios.get('https://curlyapi.herokuapp.com/api/products/find/621f44c90422d21d019f25be')
    .then(res => {
      setDataaa(JSON.parse(JSON.stringify(res.data)));
    })
  },[])
  // console.log(dataaa);
    const data=[
       { id:'1', title:'Ürün Ad',subTitle:'Kategori', img:require('../../assets/cmin.png'),price:'30'},
       { id:'2', title:'Ürün Ad 2',subTitle:'Kategori 2', img:require('../../assets/cmin.png'),price:'32'}
    ];
   const update = async (id,status) => {
     if(id){
      if(status=='down'){
       setUrunAdet(urunAdet-1);
      } else if (status=='up'){
        setUrunAdet(urunAdet+1);
      }
    }
   }  
  //  console.log(dataaa)
  console.log(dataaa.title)
  return (
    <SafeAreaView style={styles.container}>
        <>
        {/* <Image style={{resizeMode:'cover',borderRadius:20}} source={{uri: ' https://productimages.hepsiburada.net/s/113/320-320/110000060506182.jpg'} }></Image>
     <View style={styles.content}>
         <View>
      <View style={styles.card}>     
       <View style={{flexDirection:'row'}}>
        <View style={styles.image}/> 
        <Image style={{resizeMode:'cover',borderRadius:20}} source={{ uri: dataaa.imgmin }}></Image>
        <View style={styles.titleSection}>
           <View>
            <Text>{dataaa.title}</Text>
            <Text>{dataaa.desc}</Text>
           </View> 
           <View style={styles.actions}>
             <Text>-</Text>
             <Text>1</Text>
             <Text>+</Text>
           </View>
        </View>    
       </View>
       <View style={{justifyContent:'space-between', marginRight:20}}>
         <Text>{dataaa.price+' $'}</Text>
         <View style={styles.delete}>
             <Text>X</Text>
         </View>
       </View>
      </View>
      <View style={styles.card}>     
       <View style={{flexDirection:'row'}}>
        <View style={styles.image}/> 
        

        <View style={styles.titleSection}>
           <View>
            <Text>Title</Text>
            <Text>SubTitle</Text>
           </View> 
           <View style={styles.actions}>
             <Text>-</Text>
             <Text>1</Text>
             <Text>+</Text>
           </View>
        </View>    
       </View>
       <View style={{justifyContent:'space-between', marginRight:20}}>
         <Text>Price</Text>
         <View style={styles.delete}>
         <Image style={{ padding: 10, height: 30, width: 30,resizeMode: 'stretch',position:'absolute',}} source={require('../../assets/cancel.png')}/>
         </View>
       </View>
      </View>

      <View style={styles.totalSection}>
        <Text>Toplam</Text>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <Text> Sub Total</Text>
          <View style={styles.divider}></View>
          <Text>30 $</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <Text> Shipping</Text>
          <View style={styles.divider}></View>
          <Text>0 $</Text>
        </View>
      </View>
      </View>
     </View> */}
     
     </>
     <View>
     <FlatList
                nestedScrollEnabled={true}                
                numColumns={1}
                data={dataaa}
                renderItem={({item}) => (
                    <View style={{justifyContent:'center',alignContent:'center'}}><Text>{item.title}</Text></View>
                )}
                keyExtractor={item => item._id}
                />
          
                  {/* <View style={styles.totalSection}>
                   <Text>Toplam</Text>
                   <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                     <Text> Sub Total</Text>
                     <View style={styles.divider}></View>
                     <Text>30 $</Text>
                   </View>
                   <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                     <Text> Shipping</Text>
                     <View style={styles.divider}></View>
                     <Text>0 $</Text>
                   </View>
                 </View> */}
        </View>
    </SafeAreaView>
  )
};



const styles = StyleSheet.create({
 container:{
     flex:1,
     backgroundColor:'white',
 },
 content: {
     marginHorizontal:29,
     paddingBottom:32,
     backgroundColor:'white'
 },
 card:{
     flexDirection:'row',
     justifyContent:'space-between',
     marginTop:32,
 },
 image:{
     width:124,
     height:121,
     borderRadius:20,
     backgroundColor:'#808080'
 },
 titleSection:{
     justifyContent:'space-between',
     marginLeft:16,

 },
 actions:{
     flexDirection:'row',
     justifyContent:'space-around',
     width:90,
     height:30,
     borderRadius:20,
     backgroundColor:'rgba:(0,0,0,0.06)'
 },
 delete:{
     width:50,
     height:50,
     borderRadius:20,
     borderColor:'#ffffff',
     borderStyle:'solid',
     borderWidth:1,
     backgroundColor:'#ff3d00'
 },
 totalSection:{
     marginTop:32,
     marginHorizontal:15
 },
 divider:{
     height:1,
     borderColor:'#dddddd',
     borderWidth: StyleSheet.hairlineWidth,
     flex:1,
     marginHorizontal:16,
     marginTop:5
 }
});