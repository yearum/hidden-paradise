import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Image } from 'react-native';



const WisataBahari = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 53 }}>Wisata Bahari</Text>
      
      <ScrollView>
      <Image source={require('../bahan/pantai.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
      <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Gemah</Text>
      <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
       Terletak di Kabupaten Tulungagung, Provinsi Jawa Timur, Indonesia.
       Lokasinya lebih tepatnya di Desa Keboireng, Kecamatan Besole, Tulungagung, Jawa Timur.
     </Text>
      </View>

      <Image source={require('../bahan/brumbung.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Brumbung</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di sekitar 10 kilometer dari pusat kota Tulungagung, pantai ini sangat mudah diakses oleh wisatawan yang ingin menikmati pesona pantai yang tenang di Jawa Timur.
    </Text>
     </View>

     <Image source={require('../bahan/coro.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Coro</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     terletak di Desa Coro, Kecamatan Besuki, Kabupaten Tulungagung, Jawa Timur, Indonesia. Pantai ini berjarak sekitar 60 kilometer dari pusat Kota Tulungagung.
     Dengan akses mudah dari pusat kota,
     Pantai Coro adalah tempat yang populer bagi warga setempat dan wisatawan yang mencari pesona pantai yang tenang di Jawa Timur.
    </Text>
     </View>

     <Image source={require('../bahan/dadap.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai dadap</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Kabupaten Tulungagung, Jawa Timur, Indonesia. Pantai Dadap dikenal dengan keindahan pasir putihnya dan ombak yang cocok untuk berenang dan berselancar.
    </Text>
     </View>

     <Image source={require('../bahan/dlodo.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai dlodo</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Desa Dlodo, Kecamatan Popoh, Kabupaten Tulungagung, Jawa Timur, Indonesia.
     Pantai Dlodo menawarkan pesona alam yang memukau dengan pasir putih yang luas, air laut yang jernih, dan ombak yang tenang, menjadikannya tempat yang sempurna untuk bersantai dan menikmati pemandangan laut yang indah.
    </Text>
     </View>

     <Image source={require('../bahan/gerangan.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Gerangan</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Kabupaten Tulungagung, Jawa Timur, Indonesia, adalah destinasi wisata pantai yang mempesona dengan keindahan alamnya.
      Pantai ini menawarkan pasir putih yang lembut, air laut yang jernih, dan pemandangan indah. 
    </Text>
     </View>

     <Image source={require('../bahan/klatak.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Klatak</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Tulungagung, Jawa Timur, Indonesia. Pantai ini menawarkan pemandangan alam yang menakjubkan dengan pasir putih yang luas, ombak yang tenang, dan pepohonan kelapa yang menambah pesona pantainya. 
    </Text>
     </View>

     <Image source={require('../bahan/lumbung.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Lumbung</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Kabupaten Tulungagung, Provinsi Jawa Timur, Indonesia. Pantai ini merupakan salah satu destinasi wisata alam yang indah dengan pasir putih yang luas, ombak yang tenang, dan pemandangan laut yang menakjubkan. 
    </Text>
     </View>

     <Image source={require('../bahan/molang.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Molang</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Desa Molang, Kecamatan Sendang, Tulungagung. Pantai Molang menawarkan pesona alam yang menakjubkan dengan pasir putih, air laut yang jernih, dan pemandangan laut yang menakjubkan. 
    </Text>
     </View>

     <Image source={require('../bahan/ngalur.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Ngalur</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Kabupaten Tulungagung, Jawa Timur, Indonesia, adalah sebuah destinasi pantai yang indah dan eksotis. Pantai Ngalur dikenal dengan pasir putihnya yang halus, ombak yang tenang, dan panorama alam yang memukau.  
    </Text>
     </View>

     <Image source={require('../bahan/ngapuraceng.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Ngapuraceng</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Tulungagung, Jawa Timur, Indonesia. Pantai ini menawarkan pesona alam yang indah dengan pasir putih, ombak yang tenang, dan hamparan pantai yang luas. Lokasinya yang terpencil membuatnya menjadi tempat yang cocok untuk bersantai, menikmati matahari terbenam, dan menjauh dari hiruk-pikuk perkotaan.  
    </Text>
     </View>

     <Image source={require('../bahan/pacar.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai pacar</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Desa Paciran, Kecamatan Paciran, pantai ini menawarkan suasana yang cocok untuk berjemur, berenang, atau hanya bersantai sambil menikmati angin laut. 
    </Text>
     </View>

     <Image source={require('../bahan/semrawang.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Srawang</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak di Kabupaten Tulungagung, Jawa Timur, Indonesia. Pantai ini terkenal dengan keindahan pemandangan pantai pasir putihnya, air laut yang jernih, dan ombak yang cukup tenang.
    </Text>
     </View>

     <Image source={require('../bahan/sine.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Sine</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak di sekitar Desa Sine, Kecamatan Besuki, sekitar 40 kilometer dari pusat Kota Tulungagung. Pantai Sine adalah tempat yang sempurna untuk bersantai, menikmati matahari, dan menikmati pemandangan laut yang menakjubkan, membuatnya menjadi salah satu tujuan liburan yang populer di wilayah Tulungagung.
    </Text>
     </View>

     <Image source={require('../bahan/sioro.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Sioro</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak di Kabupaten Tulungagung, Jawa Timur, Indonesia. Pantai ini terkenal dengan pasir putihnya yang indah dan ombak yang cukup tenang, sehingga cocok untuk berenang dan bermain pasir. 
    </Text>
     </View>

     <Image source={require('../bahan/popoh.png')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Popoh</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak di pesisir selatan Jawa Timur, pantai ini menawarkan pemandangan pasir putih yang luas, ombak yang indah, dan udara segar dari Samudera Hindia.
    </Text>
     </View>

     <Image source={require('../bahan/gebang.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Pathok Gebang</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak di Desa Gebang, Kecamatan Karangrejo, Kabupaten Tulungagung, Jawa Timur, Indonesia. Pantai ini memiliki pasir putih yang luas dan air laut yang jernih, menjadikannya tempat yang ideal untuk berenang dan berjemur.
    </Text>
     </View>

     <Image source={require('../bahan/muluk.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Tebing Banyu Muluk</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak Pantai Tebing Banyu Muluk terletak di Desa Gebang, Kecamatan Besuki, Kabupaten Tulungagung, Jawa Timur, Indonesia. Pantai ini dikenal dengan pesona tebing-tebing yang menjulang di sepanjang pantai yang memberikan pemandangan spektakuler. 
    </Text>
     </View>

     </ScrollView>
      </SafeAreaView>
  );
};

export default WisataBahari;