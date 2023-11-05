import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Modal, Button } from 'react-native'
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TiwulScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 25, marginTop: 53 }}>Nasi Tiwul</Text>
        
        
      <ScrollView >
        <Image source={require('../bahan/tiwul.jpg')}style={{ width: 295, height: 225, borderRadius: 20, marginLeft: 45, marginTop: 29 }}/>
        
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>🌰Nasi Tiwul Goreng</Text>
          <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
          Nasi Tiwul Goreng Tulungagung adalah hidangan khas dari daerah Tulungagung, Jawa Timur, Indonesia. Hidangan ini merupakan variasi dari nasi tiwul, yang terbuat dari singkong yang diolah dan diubah menjadi nasi kecil-kecil. Nasi tiwul biasanya digoreng menjadi camilan yang gurih dan renyah.
          Hidangan ini menggunakan nasi tiwul sebagai bahan utama. Nasi tiwul adalah nasi yang terbuat dari singkong yang diolah dan dihancurkan menjadi tekstur mirip nasi.
          Nasi tiwul dibuat dengan cara mengolah singkong menjadi adonan yang kemudian dihancurkan atau diulek menjadi butiran nasi kecil. Butiran-butiran nasi tiwul kemudian digoreng hingga menjadi renyah.
          Nasi Tiwul Goreng Tulungagung memiliki rasa yang gurih, asin, dan sedikit pedas, tergantung pada bumbu dan rempah-rempah yang digunakan dalam proses penggorengan. Hidangan ini sering disajikan dengan taburan bawang goreng, cabai, dan bumbu pelengkap lainnya.
          </Text>
        </View>
      </ScrollView>
    
        </SafeAreaView>
  );
};

export default TiwulScreen;