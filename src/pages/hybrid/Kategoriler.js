import { View, Text,ScrollView } from 'react-native'
import React, {useEffect,useState} from 'react'

import axios from 'axios';


const App = ({navigation, route}) => {
  const [data, setData] =useState([]);
  useEffect(() => {
    axios.get('https://curlyapi.herokuapp.com/api/products?category=tshirt')
      .then(res => {
          setData(res.data);
          console.log('//////////URUNLER tshirt////////////')


         // console.log(data);
      }
      )
      .catch((error) => console.error(error))
      
  }, []);

  return (
    <ScrollView>
    <View>
      <Text>KATEGORİLER</Text>

    </View>
    </ScrollView>
  )
}

export default App