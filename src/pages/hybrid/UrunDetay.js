import { View, Text,ScrollView,TouchableOpacity,Image,ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'





export default function App() {
const [loading, setIsLoading] = useState(true)

const [Kategori, setKategori] = useState([])

const [miktar, setMiktar] = useState(0)

const [Fiyat, setFiyat] = useState("")

const [fiyatToplam, setFiyatToplam] = useState("")

const [FiyatIndirimli, setFiyatIndirimli] = useState(0)
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
    <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row' }}>
        <Text style={{ flex: 1, textAlign: 'center', marginLeft: 50, backgroundColor: '#fff', fontWeight: 'bold', fontSize: 16, marginTop: 20, marginLeft: 50, paddingTop: 5 }}>Ürün Detayı</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sepet', { page: "Kategori" })} style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, width: 40, height: 40, borderRadius: 5, backgroundColor: '#900C3F', marginRight: 10 }}>
            <Image style={{ resizeMode: 'stretch' }} source={require('../../assets/sepet_iconu.png')} />
        </TouchableOpacity>
    </View>
    <View style={{ flex: 9, backgroundColor: '#fff', alignItems: 'center', }}>
        <Image style={{ borderRadius: 180, resizeMode: 'stretch', width: '70%', height: 250 }} source={{ uri: Kategori.cover_image }} />
        <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 20, flexWrap: 'wrap', marginLeft: 10, paddingTop: 5 }}>{Kategori.name}</Text>
        {
            Kategori.discount_price === "" ? (
                <View style={{ flexDirection: 'row' }}>
                    <ScrollView>
                        <View style={{ width: '100%', height: '100%', flex: 1, backgroundColor: 'white' }}>

                            {
                                !loading ? (
                                    <ActivityIndicator size="large" color="#5500dc" />
                                ) : null
                            }
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 30, width: '100%', marginTop: 10 }}>
                                <Text style={{ flexWrap: 'wrap', marginLeft: 30, paddingTop: 5, width: '50%', textAlign: 'center' }}>Birim Fiyat</Text>
                                <Text style={{ flexWrap: 'wrap', marginLeft: 10, paddingTop: 5, fontWeight: 'bold', width: '50%' }}>{Fiyat}</Text>
                            </TouchableOpacity>
                            {
                                fiyatToplam !== "" ? (
                                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 30, width: '100%', marginTop: 10 }}>
                                        <Text style={{ flexWrap: 'wrap', marginLeft: 30, paddingTop: 5, width: '50%', textAlign: 'center' }}>Toplam Fiyat</Text>
                                        <Text style={{ flexWrap: 'wrap', marginLeft: 10, paddingTop: 5, fontWeight: 'bold', width: '50%' }}>₺{fiyatToplam}</Text>
                                    </TouchableOpacity>
                                ) : null
                            }

                            <View style={{ alignItems: 'center', marginTop: 20, justifyContent: 'flex-start', width: '100%', height: '100%' }} >

                                <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'space-around' }} >
                                    <TouchableOpacity onPress={() => { miktareksi(Fiyat.toString().substring(1)) }} style={{ alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 180, backgroundColor: '#900C3F' }}>
                                        <Text style={{ color: 'white', fontSize: 14 }}>-</Text>
                                    </TouchableOpacity>

                                    <Text style={{ width: 50, textAlign: 'center', flexWrap: 'wrap', fontWeight: 'bold', fontSize: 24 }}>{miktar}</Text>

                                    <TouchableOpacity onPress={() => { miktararti(Fiyat.toString().substring(1)) }} style={{ alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 180, backgroundColor: '#900C3F' }}>
                                        <Text style={{ color: 'white', fontSize: 14 }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            ) :
                (
                    <ScrollView>

                        <View style={{ width: '100%', height: '100%', flex: 1, backgroundColor: 'white' }}>
                            {
                                !loading ? (
                                    <ActivityIndicator size="large" color="#5500dc" />
                                ) : null
                            }

                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', marginTop: 10 }}>
                                <Text style={{ flexWrap: 'wrap', paddingTop: 5, width: '50%', textAlign: 'center' }}>Birim Fiyat</Text>
                                <Text style={{ textDecorationLine: 'line-through', flexWrap: 'wrap', marginLeft: 10, paddingTop: 5, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>{Fiyat}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, }}>
                                <Text style={{ flexWrap: 'wrap', marginLeft: 10, paddingTop: 5, width: '50%', textAlign: 'center' }}>İndirimli Fiyat</Text>
                                <Text style={{ flexWrap: 'wrap', marginLeft: 10, paddingTop: 5, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>{FiyatIndirimli}</Text>
                            </TouchableOpacity>

                            {
                                fiyatToplam !== "" ? (
                                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, }}>
                                        <Text style={{ flexWrap: 'wrap', marginLeft: 10, paddingTop: 5, width: '50%', textAlign: 'center' }}>Toplam Fiyat</Text>
                                        <Text style={{ flexWrap: 'wrap', marginLeft: 10, paddingTop: 5, fontWeight: 'bold', width: '50%', textAlign: 'center' }}>₺{fiyatToplam}</Text>
                                    </TouchableOpacity>
                                ) : null
                            }

                            <View style={{ alignItems: 'center', marginTop: 20, justifyContent: 'flex-start', width: '100%', height: '100%' }} >

                                <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'space-around' }} >
                                    <TouchableOpacity onPress={() => { miktareksi(FiyatIndirimli.toString().substring(1)) }} style={{ alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 180, backgroundColor: '#900C3F' }}>
                                        <Text style={{ color: 'white', fontSize: 14 }}>-</Text>
                                    </TouchableOpacity>

                                    <Text style={{ width: 50, textAlign: 'center', flexWrap: 'wrap', fontWeight: 'bold', fontSize: 24 }}>{miktar}</Text>

                                    <TouchableOpacity onPress={() => { miktararti(FiyatIndirimli.toString().substring(1)) }} style={{ alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 180, backgroundColor: '#900C3F' }}>
                                        <Text style={{ color: 'white', fontSize: 14 }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                )
        }
    </View>
    <View style={{ backgroundColor: 'white', justifyContent: 'space-around', flexDirection: 'row', width: '100%', height: 40, marginBottom: 5, alignItems: 'center' }} >
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignItems: 'center', justifyContent: 'center', width: '45%', height: 40, borderRadius: 10, backgroundColor: '#900C3F' }}>
            <Text style={{ color: 'white', fontSize: 14 }}>Ürünlere Dön</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => prestaShopUrunEkle(Kategori.id_product, miktar)} style={{ alignItems: 'center', justifyContent: 'center', width: '45%', height: 40, borderRadius: 10, backgroundColor: '#900C3F' }}>
            <Text style={{ color: 'white', fontSize: 14 }}>Sepete Ekle</Text>
        </TouchableOpacity>
    </View>
</View>
  )
}