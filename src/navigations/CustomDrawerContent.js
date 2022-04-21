import React,{ useState } from 'react';
import {View, Image, Text, Alert} from 'react-native';
import { createDrawerNavigator,  DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'; 

import {styles} from '../styles/Styles';

import BouncyCheckbox from "react-native-bouncy-checkbox";
import Login from '../pages/Login';
import Logout from '../pages/user/Logout';



export default function CustomDrawerContent(props,navigation) {

    const [root, setRoot] = useState(false);

    const cikis =  () => {

      props.navigation.jumpTo('Login')
      // await console.log('Çıkış YAP')
      // await navigation.navigate('Login');

    }
    return (
      <>
        <View style={{  height: 80, flexDirection: 'column' }}>
        
        <View style={styles.cardShadow}>
            <Image style={{ width:'100%', height: 50,resizeMode: 'stretch' }} source={require('../assets/logo.png')} />
        </View>

        </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />

        <DrawerItem
          label="Çıkış Yap"
          onPress={cikis}
        />
        <DrawerItem label="Logout" onPress={()=>
          Alert.alert(
          'Log out',
          'Do you want to logout?',
          [
          {text: 'Cancel', onPress: () => {return null}},
          {text: 'Confirm', onPress: () => {
          // AsyncStorage.clear();
          props.navigation.navigate('Logout')
          }},
          ],
          { cancelable: false }
          )

            } />
      </DrawerContentScrollView>
      </>
    );
  };
