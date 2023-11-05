import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Modal, Button } from 'react-native'
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ReogScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 25, marginTop: 53 }}>Reog Kendang</Text>
        
        
      <ScrollView >
        <Image source={require('../bahan/reog.jpg')}style={{ width: 295, height: 225, borderRadius: 20, marginLeft: 45, marginTop: 29 }}/>
        
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>   Reog Kendang Tulungagung</Text>
          <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
          Reog Kendang Tulungagung adalah sebuah seni pertunjukan tradisional yang berasal dari Kabupaten Tulungagung, Jawa Timur, Indonesia. Pertunjukan ini menggabungkan unsur-unsur seni tari, seni musik, dan kostum yang khas, sehingga menciptakan pengalaman visual dan auditori yang sangat unik. 
          Salah satu ciri khas dari Reog Kendang adalah penggunaan kostum dan topeng yang menakjubkan. Topeng yang digunakan biasanya sangat besar dan berat, terbuat dari bahan seperti kulit kerbau atau kertas tebal, dan dihias dengan warna-warna cerah. Topeng ini seringkali menggambarkan makhluk mitos, seperti singa, macan tutul, atau gajah. Kostum pemain juga dirancang dengan detail dan dihiasi dengan aksen-aksen yang indah.
          Reog Kendang merupakan bagian penting dari warisan budaya Tulungagung dan Jawa Timur secara keseluruhan. Pertunjukan ini tidak hanya menjadi hiburan, tetapi juga simbol identitas budaya masyarakat setempat.
          </Text>
        </View>
      </ScrollView>
    
        </SafeAreaView>
  );
};

export default ReogScreen;