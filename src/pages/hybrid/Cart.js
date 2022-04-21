import { View, Text , StyleSheet, ScrollView, SafeAreaView,Image,FlatList, TouchableOpacity,Alert} from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Cart({navigation,route}) {
  

  
  const [sdata, setSData] = useState([]);
  const [urun,setUrun] = useState([]);
  const [sepetId, setSepetId] = useState();

  console.log('İD DENEME'+route.params.useId);



  useEffect( () => {
    // setSepetId(route.params.userId);
    
      
      vericekk(route.params.useId);
      deleteAlert(route.params.useId);
      hesapla();
    
  },[])
  console.log('sepetID '+sepetId);
  const   vericekk = async(Id) =>{
    await axios.get(`https://curlyapi.herokuapp.com/api/carts/find/${Id}`)
    .then(res => {      
      setSData(JSON.parse(JSON.stringify(res.data.products)));
      setSepetId(res.data._id);
    //   console.log('resdata'+res.data.products[0]._id);
      // console.log(dataaa[0]._id);
      // console.log(dataaa[1]._id);
      // console.log(dataaa[('_id')]);
     
      // for( let i = 0; i=dataaa.length; i++)
      // {
      //   console.log('hey');
      //   setUrun(i);
      //   console.log(i);
      //   return;
      // }
      
    })
  };
  console.log('ses ID:'+sepetId);

   const update = async (id,status) => {
     if(id){
      if(status=='down'){
       setUrunAdet(urunAdet-1);
      } else if (status=='up'){
        setUrunAdet(urunAdet+1);
      }
    }
   }  

   const [fiyat,setFiyat] = useState(0);
   const [urunAdet,setUrunAdet] = useState(1);
   const [subPrice,setSubPrice] = useState(0);
   const [kargoTutar, setKargoTutar] = useState(9.99);
   const [toplamTutar,setToplamTutar] = useState(0);
  //  console.log(sdata[0].price);
   const hesapla =  () => {
      console.log(sdata.length)
     if (sdata.length != 0) {
     setFiyat(sdata.price);
     setUrunAdet(sdata.quantity);
     setSubPrice(fiyat*urunAdet);
     
     setToplamTutar(subPrice*kargoTutar);
    }
   };
   const deleteAlert= async (sID) => {
    await Alert.alert('UYARI ! ','Sepetiniz Silinecektir!',[
      {text: "ONAYLA", onPress: () =>deleteCart(sID)},
      { text:'iptal',}
    ]);
   }
   const deleteCart = async (sID) => {

    await axios.delete(`https://curlyapi.herokuapp.com/api/carts/${sID}`)
    .then(res => {
      console.log(res);
      navigation.navigate('Urunler');
    })
    .catch(err => {console.log(err);});
   }



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
                data={sdata}
                renderItem={({item}) => (
                    <View style={styles.content}>
                    <View>
                 <View style={styles.card}>     
                  <View style={{flexDirection:'row'}}>
                   <View style={styles.image}>
                       <Image style={{resizeMode:'contain', width:124,height:124}} source={{uri: item.imgCart}}></Image>
                    </View> 
                   <View style={styles.titleSection}>
                      <View>
                       <Text>{item.title}</Text> 
                       <Text>{item.subTitle}</Text>
                      </View> 
                      <View style={styles.actions}>
                        <TouchableOpacity onPress={()=>update(item.id,'down')}><Text>-</Text></TouchableOpacity>
                        <Text>{item.quantity}</Text>
                        <TouchableOpacity onPress={()=>update(item.id,'up')}><Text>+</Text></TouchableOpacity>
                       
                      </View>
                   </View>    
                  </View>
                  <View style={{justifyContent:'space-between', marginRight:20}}>
                    <Text>{item.price+' $'}</Text>
                    <View style={styles.delete}>
                    {/* <Image style={{ padding: 10, height: 30, width: 30,resizeMode: 'stretch',position:'absolute',}} source={require('../../assets/cancel.png')}/> */}
                    <TouchableOpacity onPress={() => deleteAlert()}>
                      <Icon name='trash-outline' color={'white'} size={25}></Icon>
                    </TouchableOpacity>
                    </View>
                  </View>
                 </View>
        
           

                 </View>
                </View>
                )}
                keyExtractor={item => item.id}
                />
          
                  <View style={styles.totalSection}>
                   <Text>Toplam</Text>
                   <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                     <Text> Alt Toplam</Text>
                     <View style={styles.divider}></View>
                     <Text>{subPrice} $</Text>
                   </View>
                   <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                     <Text> Kargo Ücreti</Text>
                     <View style={styles.divider}></View>
                     <Text>{kargoTutar} $</Text>
                   </View>
                   <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                     <Text> Genel Toplam</Text>
                     <View style={styles.divider}></View>
                     <Text>{toplamTutar} $</Text>
                   </View>
                 </View>
                 <View style={{justifyContent:'center',alignItems:'center',marginTop:60}}>
            <TouchableOpacity onPress={() => alert('Ödeme Sayfasına Yönlendiriliyorsunuz')} style={{backgroundColor:'pink',alignItems:'center',justifyContent:'center',borderRadius:12,width:'80%',height:40}}><Text>Ödeme Ekranı</Text></TouchableOpacity>
            </View>
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
     paddingRight:5

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
     backgroundColor:'#ff3d00',
     justifyContent:'center',
     alignItems:'center',
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