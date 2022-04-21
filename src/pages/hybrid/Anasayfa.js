import { View, Text,Dimensions,Image,TextInput, TouchableOpacity, FlatList, ScrollView, Button} from 'react-native';
import React,{useEffect, useState} from 'react';

import Carousel from 'react-native-banner-carousel';
import {styles} from '../../styles/Styles';
import axios from 'axios';

import 'react-native-gesture-handler';

import {  SharedGetUserId } from '../../settings/Config';



export default function Root({navigation, route}) {

  const [durum, setDurum] = useState("");

  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]); //filteredDataSource
  const [searchData, setSearchData] =useState([]); //masterdatasource
  const [Loading, setLoading] =useState(false);
  const [dataSize, setDataSize] = useState();
  const [allProductsData, setAllProductsData] = useState([]);

  let Products= [];
  const searchProduct = async () => {
    await axios.get('https://curlyapi.herokuapp.com/api/products')
    .then( function (response) {
      let json_SearchData = JSON.parse(JSON.stringify(response.data));
      console.log('////////////////');

      var countData = Object.keys(json_SearchData).length
      
      // setLoading(false);
      if ( countData > 0 ) {
        json_SearchData.forEach(element => {
          Products.push(element)

        });
        setDataSize(countData);
        setFilterData(Products);
        setSearchData(Products);
        return
      }

    })
    .catch(function(err)  {
      console.log(err);
    });
  };
  
  const searchFilter  =(text) =>{
    if(text != ""){
      const newData = searchData.filter(
        function (item) {
          const itemData =item.title ? item.title.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          
          return itemData.indexOf(textData) > -1;
        } );
        setFilterData(newData);
        setSearch(text);
        
    } else {
      setFilterData(searchData);
      setSearch(searchData);
    }
  };

  console.log(" a : "+search);
  console.log(" b : "+filterData);
  console.log(" c : "+searchData);



  const ItemSeparatorView = () => {
    return (
        // Flat List Item Separator
        <View
            style={{
                height: 0.5,
                width: '100%',
            }}
        />
    );
};


  const CarouselWidth =( Dimensions.get('window').width - 2);
  const CarouselHeight = 188;
  const images =[
    'https://n11scdn.akamaized.net/a1/720_400/22/03/05/54/63/69/07/37/19/99/70/73/01073770191949745078.jpg',
    'https://n11scdn.akamaized.net/a1/720_400/22/03/04/54/88/33/83/20/44/39/22/11/83850680276609091173.jpg',
    'https://n11scdn.akamaized.net/a1/720_400/22/03/03/60/04/77/81/97/50/08/78/89/88107947664116761424.jpg',
    'https://n11scdn.akamaized.net/a1/720_400/22/03/01/88/07/86/23/93/51/95/13/74/3746634885165330738.jpg',
    'https://n11scdn.akamaized.net/a1/720_400/22/03/04/71/40/09/37/04/12/74/72/50/91398325894855280434.jpg'
  ];
  const searchInput = require('../../assets/search.png');

  const [catData, setCatData] = useState();
  const [carouselData, setCarouselData] = useState([]);

  const indirim = async () => {
    axios.get('https://curlyapi.herokuapp.com/api/products?onSale=true')
    .then(res => {
        setCatData(res.data);
        console.log('//////////KAMPANYALI URUNLER////////////')


       // console.log(data);
    }
    )
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  };

  const carousel = async() => {
     axios.get('https://curlyapi.herokuapp.com/api/carousel?series=1')
    .then(res => {
      setCarouselData(res.data.imgurl);
        console.log('//////////URUNLER MAN////////////')


       // console.log(data);
    }
    )
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  };

  const allProducts = async () => {
    await axios.get('https://curlyapi.herokuapp.com/api/products')
    .then(res => {
      setAllProductsData(res.data);
    })
  }

  useEffect(() => {
     indirim();
     carousel();
     searchProduct();
     allProducts();
  }, []);





  const data_product_grid = 3;
  const size = Dimensions.get('window').width/data_product_grid;


  const data_horizontal_1 = [
    {id: 'd', value: 'Explore Now', offer: 'Up to 80% off', pic: 'https://rukminim1.flixcart.com/flap/207/315/image/8e0029cdf29895ba.jpg?q=80'},
    {id: 'e', value: 'Explore Now', offer: 'Up to 80% off', pic: 'https://rukminim1.flixcart.com/flap/207/315/image/b065bf5d3327cd12.jpg?q=80'},
    {id: 'f', value: 'Big Saving', offer: 'Up to 90% off', pic: 'https://rukminim1.flixcart.com/flap/414/630/image/86614e0d53861720.jpg?q=60'},
    {id: 'g', value: 'Big Saving', offer: 'Up to 90% off', pic: 'https://rukminim1.flixcart.com/flap/414/630/image/86614e0d53861720.jpg?q=60'},
    {id: 'h', value: 'Big Saving', offer: 'Up to 90% off', pic: 'https://rukminim1.flixcart.com/flap/414/630/image/86614e0d53861720.jpg?q=60'},
  ];
  const product_item_horizontal_1 = 3;
  const size_new = Dimensions.get('window').width/product_item_horizontal_1;


  const renderPage=(image, index) =>{
    return (
  
      <View key={index}>
            <Image style={{ width: CarouselWidth, height: CarouselHeight }} source={{ uri: image }} />
        </View>        
    );
  };
//   const { id } = route.params;
//   useEffect(() => {
//     ApiUrunler(id)
// }, []);


//   const ApiUrunler = async (id) =>{
//     var config ={
//       method:'GET',
//       url:'http://localhost:5000/api/products',
//       headers: {'Content-Type' : 'application/json' },
//     };

//     await axios(config)
//     .then(function(response) {
//       let jsonParser = JSON.parse(JSON.stringify(response.data));
//       console.log('===================1================');

//       var count = Object.keys(jsondata_parser.psdata.products).length
//     } )
//     .catch(function(err) {
//       console.log(err);
//     })
//   }
  const  getVeri = () => {
    // fetch('https://curlyapi.herokuapp.com/api/products')
    //   .then(response => response.json())
    //   .then(veri => {alert(JSON.stringify(veri))})
    //   .catch((err) =>{
    //     console.log(err);
    //   } );
    var SharedPreferences = require('react-native-shared-preferences');
    SharedPreferences.getItem(SharedGetUserId, function(value){
      alert('ID  : '+value);
    })
  }

  return (
    <ScrollView style={{backgroundColor:'#e6e6fa',flex:1}}>
    <View style={{backgroundColor:'#e6e6fa',flex:1}}>
      <View style={styles.sectionStyle}>
      <TextInput   
        onChangeText={(text) =>searchFilter(text)  }  
        value={search}    
        placeholder=" Search for products,Brands and More" ></TextInput>
        <TouchableOpacity onPress={() => setSearch([])}><Image style={styles.imageStyle} source={require('../../assets/cancel.png')}/></TouchableOpacity>
        </View>
      {/* <View style={{ margin:1, }}>
      <Carousel
        
        autoplay
        autoplayTimeout={3000}
        loop
        index={0}
        pageSize={CarouselWidth}
      >{ images.map((image,index) => renderPage(image,index))}</Carousel>
      </View> */}


      {/* <View>
  <ScrollView showsHorizontalScrollIndicator={false}  horizontal> 
      <FlatList
        data={data_horizontal_1}
        renderItem={({item}) => (
          <View style={styles.box_horizontal_box}>
            <View style={styles.box_horizontal_inner}>
                <View>
                  <Image
                    source={{ uri : item.pic }}
                    style={ styles.box_horizontal_img }
                  />
                </View>
              </View> 
            </View>
        )}
        keyExtractor={item => item.id}
        numColumns={product_item_horizontal_1} />
        </ScrollView>
      </View>   */}
    {search.length >0 ? 
      <View>
      <Text style={{fontSize:20,fontWeight:'bold', justifyContent:'center', color:'black', textAlign:'center'}}>ARAMA SONUCU</Text>
        <View >
       <FlatList
        
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          numColumns={3}
          data={filterData}
          renderItem={({item}) => (
            <View style={styles.box_product}>
          <View style={ {justifyContent:'center', alignItems:'center'} }>
            <TouchableOpacity onPress={() =>  
            navigation.navigate('UrunDetay', item) } 
            style={styles.box_product_inner}>
                <View>
                  <Image  source={{ uri : item.img }} style={styles.box_product_img} />
                </View>
          
                <View style={styles.box_product_inner_cont}>
                  <Text style={styles.box_product_inner_title}>{item.title} </Text>

                  
                  <Text style={styles.box_product_inner_title_new}>{item.price+" $"} </Text>

                </View>
              </TouchableOpacity> 
            </View>
            </View>
        )}
        keyExtractor={item => item._id}
        />
        </View>
      </View>
         : <></> } 
      <View>
        <Text style={{fontSize:20,fontWeight:'bold', justifyContent:'center', color:'black', textAlign:'center'}}> FIRSAT ÜRÜNLERİ</Text>
        <View >

        <FlatList
        
        nestedScrollEnabled={true}
      data={catData}
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
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.box_product_inner_title_new,{color:'red',textDecorationLine: 'line-through'}}>{item.price+" $"} </Text>
                <Text style={styles.box_product_inner_title_new}>{item.discountprice+" $"} </Text>
                </View>
              </View>
            </TouchableOpacity> 
          </View>
      )}
      keyExtractor={item => item._id}
      numColumns={data_product_grid} />


        </View>
    <View>
        <Text style={{fontSize:20,fontWeight:'bold', justifyContent:'center', color:'black', textAlign:'center'}}> TÜM ÜRÜMLER </Text>
    <View >

      <FlatList
        
        nestedScrollEnabled={true}
        data={allProductsData}
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
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.box_product_inner_title_new,{color:'red',textDecorationLine: 'line-through'}}>{item.price+" $"} </Text>
                <Text style={styles.box_product_inner_title_new}>{item.discountprice+" $"} </Text>
                </View>
              </View>
            </TouchableOpacity> 
          </View>
          )}
          keyExtractor={item => item._id}
          numColumns={data_product_grid} />


      </View>
        
      </View>
      </View>

      

    </View>
    <Text>DNEME</Text>
    </ScrollView>
  );
};


