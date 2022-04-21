import { View, Text,FlatList,ActivityIndicator, Image, Dimensions,TouchableOpacity } from 'react-native';
import React, {useState,useEffect} from 'react';
import 'react-native-gesture-handler';
import axios from 'axios';
import {styles} from '../../styles/Styles';

import {SharedGetUserName} from '../../settings/Config';

export default function App({navigation, route}) {



  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //Yüklenme ekranında verileri çekiyoruz
  useEffect(() => {
    axios.get('https://curlyapi.herokuapp.com/api/products')
      .then(res => {
          setData(res.data);
          console.log('//////////URUNLER////////////')


         // console.log(data);
      }
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const data_product_grid = 3;
  const size = Dimensions.get('window').width/data_product_grid;

  return (
    // <View style={{ flex: 1, padding: 24 }}>
    //   {isLoading ? <ActivityIndicator /> : (
    //     <FlatList
    //       data={data}
    //       renderItem={({item}) => (
    //         <View style={ styles.box_product }>
    //           <TouchableOpacity onPress={() =>  
    //           navigation.navigate('UrunDetay', { paramKey: 'Hit Sale' }) } 
    //            style={styles.box_product_inner}>
    //               <View>
    //                 <Image  source={{ uri : item.url }} style={styles.box_product_img} />
    //               </View>
            
    //               <View style={styles.box_product_inner_cont}>
    //                 <Text style={styles.box_product_inner_title}>{item.title} </Text>

    //               </View>
    //             </TouchableOpacity> 
    //           </View>
    //       )}
    //       renderItem={({ item }) => {
    //         console.log("item", item)
    //         return (
    //           <Text style={{ flex: 1, backgroundColor: 'red' }}>{item.title}, {item.thumbnailUrl}</Text>
    //         )
    //       }}
    //     />
    //   )}
    // </View>




    <View style={{backgroundColor:'#e6e6fa', flex:1}}>
    <FlatList
    nestedScrollEnabled={true}
     data={data}
      renderItem={({item}) => (
    <View style={ styles.box_product }>
      <TouchableOpacity onPress={() =>  
      navigation.navigate('UrunDetay', item) } 
       style={styles.box_product_inner}>
          <View>
            <Image  source={{ uri : item.img }} style={styles.box_product_img} />
          </View>
    
          <View style={styles.box_product_inner_cont}>
            <Text style={styles.box_product_inner_title}>{item.title} </Text>
            <Text style={styles.box_product_inner_title_new}>
               {'Up to 50% off'}
            </Text>
          </View>
        </TouchableOpacity> 
      </View>
    )}
    keyExtractor={item => item._id}
    
    numColumns={data_product_grid} />
  

    </View>









  );
};