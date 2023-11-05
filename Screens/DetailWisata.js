import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Modal, Button } from 'react-native'
import { Image } from 'react-native';
import { useState } from 'react';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailWisata = () => {
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
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 25, marginTop: 53 }}>Detail Wisata</Text>
        
        <View style={{ flexDirection: 'column' }}>
      <ScrollView horizontal={true}>
        <Image
          source={require('../bahan/pantai.jpg')}
          style={{ width: 295, height: 225, borderRadius: 20, marginLeft: 45, marginTop: 29 }}
        />
        <Image
          source={require('../bahan/gmh.jpg')}
          style={{ width: 295, height: 225, borderRadius: 20, marginLeft: 45, marginTop: 29 }}
        />
        <Image
          source={require('../bahan/kp.jpg')}
          style={{ width: 295, height: 225, borderRadius: 20, marginLeft: 30, marginTop: 29 }}
        />
      </ScrollView>
      </View>

      
      <ScrollView >
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Gemah</Text>
        <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
          Terletak di Kabupaten Tulungagung, Provinsi Jawa Timur, Indonesia.
          Lokasinya lebih tepatnya di Desa Keboireng, Kecamatan Besole, Tulungagung, Jawa Timur. Akses menuju pantai relatif mudah dengan kendaraan pribadi atau transportasi umum. Pantai Gemah menawarkan pemandangan pantai yang menakjubkan. Pantai ini dikenal dengan pasir putihnya yang lembut, air laut yang jernih, dan ombak yang sesuai untuk berenang. Pantai ini adalah tempat yang sempurna untuk bersantai, berjemur, bermain pasir, atau sekadar menikmati keindahan laut. Selain berenang dan berjemur, Pantai Gemah juga menyediakan berbagai aktivitas wisata lainnya, seperti bermain voli pantai, berkeliling pantai dengan perahu nelayan, dan menikmati makanan laut segar di warung-warung pinggir pantai. Pantai Gemah dikelilingi oleh hutan mangrove yang indah, menciptakan suasana yang sejuk dan menenangkan.
        </Text>
      </ScrollView>

      <TouchableOpacity onPress={handleBookingPress} style={{ alignItems: 'center' }}>
        <View style={{ backgroundColor: '#008FA0', width: 100, padding: 10, borderRadius: 5, margin: 20 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Booking</Text>
        </View>
      </TouchableOpacity>

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
  )
}

export default DetailWisata;