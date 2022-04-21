import { View, Text , StyleSheet, ScrollView, SafeAreaView,Image,FlatList, TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function Cart() {
  const [urunAdet,setUrunAdet] = useState(1);
  const [fiyat,setFiyat] = useState();
  const [toplamTutar,setToplamTutar] = useState();
  const [data, setData] = useState([]);
  const [urun,setUrun] = useState([]);
  const Id ='621df86bdefc60e02c0b2beb';

  useEffect( () => {
      vericekk();
     sepetcek();
  },[])
  const   vericekk = async() =>{
    await axios.get('https://curlyapi.herokuapp.com/api/carts/find/'+Id)
    .then(res => {
      setData(JSON.parse(JSON.stringify(res.data.products)));
      console.log(data);
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
 
  const sepetcek= async () => {
    await axios.get('https://curlyapi.herokuapp.com/api/products/find/'+data[0].productId)
    .then(res => {
      setUrun(JSON.parse(JSON.stringify(res.data)));
      console.log(urun);

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
 
    // const data=[
    //    { id:'1', title:'Ürün Ad',subTitle:'Kategori', img:require('../../assets/cmin.png'),price:'30'},
    //    { id:'2', title:'Ürün Ad',subTitle:'Kategori', img:require('../../assets/cmin.png'),price:'30'},
     
    // ];
   const update = async (id,status) => {
     if(id){
      if(status=='down'){
       setUrunAdet(urunAdet-1);
      } else if (status=='up'){
        setUrunAdet(urunAdet+1);
      }
    }
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
                data={urun}
                renderItem={({item}) => (
                    <View style={styles.content}>
                    <View>
                 <View style={styles.card}>     
                  <View style={{flexDirection:'row'}}>
                   <View style={styles.image}>
                       <Image style={{resizeMode:'contain', width:124,height:124}} source={require('../../assets/cmin.png')}></Image>
                    </View> 
                   <View style={styles.titleSection}>
                      <View>
                       <Text>{item.title}</Text> 
                       <Text>{item.subTitle}</Text>
                      </View> 
                      <View style={styles.actions}>
                        <TouchableOpacity onPress={()=>update(item.id,'down')}><Text>-</Text></TouchableOpacity>
                        <Text>{urunAdet}</Text>
                        <TouchableOpacity onPress={()=>update(item.id,'up')}><Text>+</Text></TouchableOpacity>
                       
                      </View>
                   </View>    
                  </View>
                  <View style={{justifyContent:'space-between', marginRight:20}}>
                    <Text>{item.price+' $'}</Text>
                    <View style={styles.delete}>
                    <Image style={{ padding: 10, height: 30, width: 30,resizeMode: 'stretch',position:'absolute',}} source={require('../../assets/cancel.png')}/>
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