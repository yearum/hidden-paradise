import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Modal, Button } from 'react-native'
import { Image } from 'react-native';
import { useState } from 'react';
import { Linking } from 'react-native';



const WisataAlam = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleBookingPress = () => {
    setShowBookingModal(true);
  };

  const handleModalClose = () => {
    setShowBookingModal(false);
  };

  const handleTrafalokaPress = async () => {
    const appUrl = 'traveloka://'; 
    const webUrl = 'https://www.traveloka.com/en-id/'; 

    try {
      const supported = await Linking.canOpenURL(appUrl);

      if (supported) {
        
        await Linking.openURL(appUrl);
      } else {
        
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      console.error('Tidak dapat membuka aplikasi Trafaloka atau situs web:', error);
    }
  };

  const handleTiketPress = async () => {
    const appUrl = 'tiketcom://'; 
    const webUrl = 'https://www.tiket.com'; 

    try {
      const supported = await Linking.canOpenURL(appUrl);

      if (supported) {
        
        await Linking.openURL(appUrl);
      } else {
        
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      console.error('Tidak dapat membuka aplikasi Tiket.com atau situs web:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      
      <ScrollView>
      <Image source={require('../bahan/aa.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
      <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Taman Aloon Aloon Tulungagung</Text>
      <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak di Tulungagung, Jawa Timur, Indonesia. 
      Taman ini merupakan tempat rekreasi yang populer di wilayah tersebut dan sering dijadikan tempat berkumpul oleh warga setempat. Taman Aloon-Aloon Tulungagung memiliki taman yang hijau dan rindang, serta banyak fasilitas seperti tempat duduk, area bermain anak-anak, serta area untuk berolahraga.
     </Text>
      </View>

      <Image source={require('../bahan/agro.png')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Agro Belimbing Tulungagung</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Tulungagung, Jawa Timur, Indonesia. Tempat ini terkenal dengan budidaya buah belimbing yang berkualitas tinggi. Belimbing adalah buah yang memiliki bentuk unik dan rasa segar yang sangat populer di Indonesia. Agro Belimbing Tulungagung menawarkan pengalaman berwisata pertanian, di mana pengunjung dapat melihat proses penanaman, perawatan, dan panen belimbing.
    </Text>
     </View>

     <Image source={require('../bahan/bledek.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Tumpak Bledeg</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Desa Pronojiwo, Kabupaten Tulungagung, Jawa Timur, Indonesia. Air terjun ini terkenal karena keindahan alamnya dan merupakan tujuan wisata populer bagi para pengunjung yang ingin menikmati pemandangan alam yang menakjubkan. 
    </Text>
     </View>

     <Image source={require('../bahan/kromo.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Air Terjun Coban Kromo</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak di Desa Sumber Pinang, Kecamatan Ngunut, Tulungagung, Jawa Timur. Air terjun ini menawarkan suasana alam yang segar dengan air yang jatuh dari ketinggian ke dalam kolam alami. 
    </Text>
     </View>

     <Image source={require('../bahan/budek.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Gunung Budheg</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak di Kabupaten Tulungagung, Jawa Timur, Indonesia. Gunung ini dikenal dengan pemandangan alam yang indah dan menjadi tujuan populer bagi para pendaki dan pecinta alam.
    </Text>
     </View>

     <Image source={require('../bahan/huko.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Hutan Kota Tulungagung</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak di dalam kawasan kota Tulungagung, memberikan tempat bagi penduduk setempat dan pengunjung untuk menikmati alam, berolahraga, dan bersantai. Terletak di kawasan perkotaan, Hutan Kota Tulungagung menawarkan udara segar dan hijauan alami yang menyegarkan, membuatnya menjadi tempat yang populer untuk rekreasi dan menghindari hiruk-pikuk kota.
    </Text>
     </View>

     <Image source={require('../bahan/kandung.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Air Terjun Alas Kandung</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak di Kabupaten Tulungagung, Jawa Timur, Indonesia. Air terjun ini menawarkan pemandangan yang menakjubkan dengan air jernih yang jatuh dari ketinggian ke dalam kolam alami yang mempesona. 
    </Text>
     </View>

     <Image source={require('../bahan/lawean.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Air Terjun lawean Tulungagung</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak di Kabupaten Tulungagung, Provinsi Jawa Timur, Indonesia. Air terjun ini adalah salah satu destinasi alam yang menakjubkan di daerah tersebut. Lawean Waterfall dikelilingi oleh hutan yang hijau dan alam yang masih asri, menciptakan lingkungan yang menenangkan.
    </Text>
     </View>

     <Image source={require('../bahan/minten.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Kedung Minten</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak didesa geger sendang di Kabupaten Tulungagung, Jawa Timur, Indonesia. Desa ini dikenal dengan keindahan alamnya, terutama air terjun yang menarik, serta hamparan sawah yang hijau di sekitarnya.
    </Text>
     </View>

     <Image source={require('../bahan/pandan.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Air Terjun Pandan Wangi Tulungagung</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak di desa Jatibanteng, Kecamatan Sendang, Tulungagung, Jawa Timur, Indonesia. Air terjun ini dikenal dengan keindahan alamnya yang mempesona.
    </Text>
     </View>

     <Image source={require('../bahan/ranu.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Ranu Gumbolo Tulungagung</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak di Kabupaten Tulungagung, Jawa Timur, Indonesia. Danau ini merupakan salah satu objek wisata alam yang populer di daerah tersebut. Ranu Gumbolo dikelilingi oleh hutan hijau yang indah dan menawarkan pemandangan alam yang menakjubkan.
    </Text>
     </View>

     <Image source={require('../bahan/senggani.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Jurang Senggani</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Terletak di Tulungagung, Jawa Timur, Indonesia. Jurang Senggani menawarkan pemandangan alam yang menakjubkan, terdiri dari perbukitan hijau yang memikat dan sungai yang mengalir dengan air jernih.
    </Text>
     </View>

     <Image source={require('../bahan/waduk.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Bendungan Wonorejo</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
    Terletak di Kabupaten Tulungagung, Jawa Timur, Indonesia. Bendungan ini berfungsi untuk mengendalikan aliran sungai dan menyediakan pasokan air untuk irigasi pertanian di sekitarnya. 
    </Text>
     </View>

     <Image source={require('../bahan/wilis.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Air Terjun Jurang Senggani</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Terletak di Desa Senggani, Kecamatan Besuki, Kabupaten Tulungagung, Provinsi Jawa Timur, Indonesia. Air terjun ini dikenal karena keindahan alamnya yang menakjubkan. Air terjun ini memiliki dua tingkat yang cukup tinggi dengan air yang jatuh dari tebing batu karst yang hijau dan terdapat hutan tropis yang lebat di sekitarnya. 
    </Text>
     </View>

     <TouchableOpacity onPress={handleBookingPress} style={{ alignItems: 'center' }}>
      <View style={{ backgroundColor: '#008FA0', width: 100, padding: 10, borderRadius: 5, margin: 20 }}>
      <Text style={{ color: 'white', textAlign: 'center' }}>Booking</Text>
      </View>
     </TouchableOpacity>
      </ScrollView>

  <Modal transparent={true} visible={showBookingModal} onRequestClose={handleModalClose}>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 5 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Pilihan Booking:</Text>

  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
   <TouchableOpacity onPress={handleTrafalokaPress}>
    <Image source={require('../bahan/travel.png')} style={{ width: 25, height: 22, borderRadius: 0, marginRight: 10 }} />
     </TouchableOpacity>
     <TouchableOpacity onPress={handleTrafalokaPress}>
    <Text style={{ fontSize: 16, padding: 10 }}>Traveloka</Text>
     </TouchableOpacity>
    </View>

<View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
  <TouchableOpacity onPress={handleTiketPress}>
    <Image source={require('../bahan/tiket.png')} style={{ width: 25, height: 22, borderRadius: 0, marginRight: 10 }} />
    </TouchableOpacity>
    <TouchableOpacity onPress={handleTiketPress}>
    <Text style={{ fontSize: 16, padding: 10 }}>Tiket.com</Text>
    </TouchableOpacity>
    </View>

<Button title="Tutup" onPress={handleModalClose} />
 </View>
  </View>
    </Modal>
     </SafeAreaView>
  );
};

export default WisataAlam;