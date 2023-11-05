import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Image } from 'react-native';

const WisataCagarBudaya = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 53 }}>Wisata Cagar Budaya</Text>
      
      <ScrollView>
      <Image source={require('../bahan/ampel.png')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
      <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Candi Ampel Tulungagung</Text>
      <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
       Terletak di Kabupaten Tulungagung, Jawa Timur, Indonesia. Candi ini adalah peninggalan sejarah dari masa lampau yang menjadi bukti perkembangan keagamaan dan budaya di wilayah ini. 
     </Text>
      </View>

      <Image source={require('../bahan/cemenung.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Bukit Cemenung </Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Kabupaten Tulungagung, Jawa Timur, Indonesia. Bukit ini terkenal karena keindahan alamnya yang menakjubkan dan merupakan tujuan populer bagi para pengunjung yang ingin menikmati pemandangan alam yang spektakuler.
    </Text>
     </View>

     <Image source={require('../bahan/dadi.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Candi Dadi</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     terletak di Kabupaten Tulungagung, Jawa Timur, Indonesia. Candi ini merupakan salah satu peninggalan bersejarah yang berasal dari masa kerajaan Kediri, sekitar abad ke-11 hingga ke-12. Candi Dadi dikenal dengan arsitektur candi Hindu yang klasik, dengan ciri khas yaitu struktur bangunan candi yang terdiri dari beberapa tingkat atau teras.
    </Text>
     </View>

     <Image source={require('../bahan/gayatri.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Candi Gayatri</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di desa Ngrowo, kecamatan Boyolangu, Kabupaten Tulungagung, Jawa Timur. Candi ini dapat dijangkau dengan mudah dari berbagai wilayah di sekitarnya dan merupakan destinasi yang menarik bagi para pencinta sejarah, agama, dan budaya.
    </Text>
     </View>

     <Image source={require('../bahan/musium.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Musium Tulungagung</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak  di Jalan Jaksa Agung Suprapto No. 3, Tulungagung, dan berfungsi sebagai pusat edukasi dan informasi bagi pengunjung yang ingin lebih memahami sejarah, seni, dan budaya kota ini. Museum Tulungagung menampilkan berbagai koleksi, seperti artefak sejarah, seni rupa, dan benda-benda tradisional yang mencerminkan kekayaan warisan budaya masyarakat Tulungagung dan sekitarnya. 
    </Text>
     </View>

     <Image source={require('../bahan/penampihan.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Candi Penampihan</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Kabupaten Tulungagung, Provinsi Jawa Timur, Indonesia. Candi ini merupakan salah satu peninggalan budaya dari masa lampau yang mencerminkan keindahan arsitektur dan seni dari zaman tersebut. 
    </Text>
     </View>

     <Image source={require('../bahan/pasir.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Goa Pasir</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak Goa Pasir Tulungagung adalah sebuah objek wisata alam yang terletak di Kabupaten Tulungagung, Provinsi Jawa Timur, Indonesia. Goa ini terkenal karena memiliki pasir putih yang unik dan indah di dalam goa. Pasir putih ini memberikan kesan eksotis dan menambah daya tarik objek wisata ini. Goa Pasir Tulungagung juga dikelilingi oleh hutan hijau yang alami, menciptakan lingkungan yang menenangkan bagi para pengunjung.
    </Text>
     </View>

     <Image source={require('../bahan/sanggrahan.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Candi Sanggrahan</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     di Kabupaten Tulungagung, Jawa Timur, Indonesia. Candi ini merupakan peninggalan masa Kerajaan Majapahit yang berasal dari abad ke-14. Candi Sanggrahan dikenal sebagai salah satu peninggalan arkeologi yang signifikan di Jawa Timur dan menjadi destinasi wisata budaya populer.
    </Text>
     </View>
     </ScrollView>
      </SafeAreaView>
  )
}

export default WisataCagarBudaya