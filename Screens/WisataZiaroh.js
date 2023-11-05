import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Image } from 'react-native';



const WisataZiaroh = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 53 }}>Wisata Ziaroh</Text>
      
      <ScrollView>
      <Image source={require('../bahan/fatah.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
      <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Kyai Abd. Fatah Hasan Tholabi </Text>
      <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
       Terletak di Kabupaten Tulungagung, Provinsi Jawa Timur, Indonesia.
       Lokasinya lebih tepatnya di Mangunsari.
     </Text>
      </View>

      <Image source={require('../bahan/hasan.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Raden KH Khasan Mimbar</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Kabupaten Tulungagung Provinsi Jawa Timur berlokasi di Desa Winong
    </Text>
     </View>

     <Image source={require('../bahan/langkir.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Mbah Langkir</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Kabupaten Tulungagung Provinsi Jawa Timur berlokasi di Desa Winong
    </Text>
     </View>

     <Image source={require('../bahan/mustakim.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Mbah Kyai Mustaqim</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak diMasjid, Mojasari, Mojosari, Kec. Kauman, Kabupaten Tulungagung, Jawa Timur
    </Text>
     </View>

     <Image source={require('../bahan/tanteksu.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Goa Tan Tek Sue </Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Lokasinya terletak di Desa Pucanglaban, Kecamatan Boyolangu, Kabupaten Tulungagung, Jawa Timur. Gua ini memiliki suasana yang tenang dan alami, serta menyuguhkan pemandangan yang eksotis. Untuk mencapai lokasi gua, pengunjung biasanya harus berjalan kaki melalui jalur setapak yang indah, yang membuat perjalanan ke Goa Tan Tek Sue menjadi lebih menarik.
    </Text>
     </View>
     </ScrollView>
      </SafeAreaView>
  );
};

export default WisataZiaroh;