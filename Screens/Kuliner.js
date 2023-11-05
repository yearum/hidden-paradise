import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Image } from 'react-native';


const Kuliner = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 53 }}>Kuliner Khas Tulungagung</Text>
      
      <ScrollView>
      <Image source={require('../bahan/bakso.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
      <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>🌰Bakso Kikil</Text>
      <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Rekomendasi untuk menikmati Bakso Kikil Tulungagung adalah di Warung Bakso Kikil "Pak Kumis" yang terletak di pusat Kota Tulungagung. Warung ini telah menjadi ikon kuliner setempat dan dikenal dengan cita rasa bakso kikil yang otentik. 
     </Text>
      </View>

      <Image source={require('../bahan/sabun.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>🌰Jenang Sabun</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Rekomendasi
Salah satu tempat terkenal untuk menikmati Jenang Sabun di Tulungagung adalah "Warung Mbak Slamet." Warung ini terletak di pusat kota Tulungagung dan menyajikan Jenang Sabun yang lezat dengan berbagai pilihan topping. 
    </Text>
     </View>

     <Image source={require('../bahan/kriptem.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>🌰Kripik Tempe</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Rekomendasi untuk menikmati Kripik Tempe Tulungagung adalah di Tulungagung, Jawa Timur, Indonesia. Tulungagung terkenal sebagai pusat produksi kripik tempe terbaik di Indonesia. Anda dapat menemukan berbagai produsen kripik tempe di kota ini, yang menawarkan beragam varian rasa, mulai dari pedas, asin, hingga manis. Selain itu, Anda juga dapat menemukan Kripik Tempe Tulungagung di berbagai toko oleh-oleh dan pasar tradisional di daerah tersebut.
    </Text>
     </View>

     <Image source={require('../bahan/lonkik.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>🌰Lontong Kikil</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Rekomendasi untuk menikmati Lontong Kikil Tulungagung dapat ditemukan di berbagai warung makan dan penjual kaki lima di sekitar Tulungagung. Salah satu tempat yang terkenal adalah pasar tradisional Tulungagung, tempat Anda dapat menikmati hidangan ini dengan cita rasa yang autentik.
    </Text>
     </View>

     <Image source={require('../bahan/pecel.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>🌰Nasi Pecel</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Rekomendasi lokasi untuk menikmati Nasi Pecel Tulungagung adalah di warung "Cik Ani" botoran gang 7 dekat masjid pelem kota Tulungagung. Anda dapat menikmati hidangan ini dengan harga yang murah dan enak otentik dan nikmat.
    </Text>
     </View>

     <Image source={require('../bahan/rawon.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>🌰Nasi Rawon</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Rekomendasi lokasi untuk menikmati Nasi Pecel Tulungagung adalah di warung "Cik Ani" botoran gang 7 dekat masjid pelem kota Tulungagung. Anda dapat menikmati hidangan ini dengan harga yang murah. 
    </Text>
     </View>

     <Image source={require('../bahan/tiwul.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>🌰Nasi Tiwul Goreng</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Rekomendasi untuk menikmati Nasi Tiwul Goreng di Tulungagung biasanya dapat ditemukan di warung-warung makan khas Jawa Timur, penjual kaki lima, atau restoran lokal di kota Tulungagung. Hidangan ini adalah pilihan yang lezat untuk mencicipi cita rasa autentik Tulungagung dan menggoyang lidah Anda dengan kombinasi rasa gurih dan pedas.
    </Text>
     </View>
     </ScrollView>
      </SafeAreaView>
  );
};

export default Kuliner;