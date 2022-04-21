import { View, Text,Button } from 'react-native'
import React from 'react'


import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,  DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'; 

import Anasayfa from '../pages/hybrid/Anasayfa';
import UrunDetay from '../pages/hybrid/UrunDetay1';
import Hakkimizda from '../pages/hybrid/Hakkimizda';
import Urunler from '../pages/hybrid/Urunler';
import Kategoriler from '../pages/hybrid/Kategoriler';
import Deneme from '../pages/hybrid/urundetay2';
import Profil from '../pages/hybrid/Profil';
import Cart from '../pages/hybrid/Cart';
import Carts from '../pages/hybrid/Carts';

import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function App(navigation) {


  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Urunler"
       
        screenOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
          drawerActiveBackgroundColor:'#9fb6cd',
          drawerStyle:{backgroundColor:'#e6e6fa'}
        }}

         drawerContent={(props) => <CustomDrawerContent {...props} />}> 
         {/* //CustomSidebarMenu */}

        <Drawer.Screen
          name="Anasayfa"
          // options={{ drawerLabel: 'Ana Sayfa', title:  'Ana Sayfa' }}
          component={Anasayfa}
        />
        <Drawer.Screen
          name="Profil"
          // options={{ drawerLabel: 'Ana Sayfa', title:  'Ana Sayfa' }}
          component={Profil}
          options={{headerTransparent:true}}
          
        />
        <Drawer.Screen
          name="Kategoriler"
          // options={{ drawerLabel: 'Ana Sayfa', title:  'Ana Sayfa' }}
          component={Kategoriler}
        />
        <Drawer.Screen
          name="Urunler"
          // options={{ drawerLabel: 'Ana Sayfa', title:  'Ana Sayfa' }}
          component={Urunler}
          
        />
        <Drawer.Screen
          name="UrunDetay"
          // options={{ drawerLabel: 'Ana Sayfa', title:  'Ana Sayfa' }}
          component={UrunDetay}
          
          options={{headerShown:false, headerTransparent:true,drawerHideStatusBarOnOpen:true}}
        />
        <Drawer.Screen
          name="Cart"
          // options={{ drawerLabel: 'Ana Sayfa', title:  'Ana Sayfa' }}
          component={Cart}
          
          options={{headerShown:false, headerTransparent:true,drawerHideStatusBarOnOpen:true}}
        />
        <Drawer.Screen
          name="Carts"
          // options={{ drawerLabel: 'Ana Sayfa', title:  'Ana Sayfa' }}
          component={Carts}
          
          options={{headerShown:false, headerTransparent:true,drawerHideStatusBarOnOpen:true}}
        />
        <Drawer.Screen
          name="Hakkimizda"
          // options={{ drawerLabel: 'Ana Sayfa', title:  'Ana Sayfa' }}
          component={Hakkimizda}
        />
        <Drawer.Screen
          name="Deneme"
          // options={{ drawerLabel: 'Ana Sayfa', title:  'Ana Sayfa' }}
          component={Deneme}
          
          options={{headerTransparent:true, }}
        />

        </Drawer.Navigator>
        </NavigationContainer>
  )
}