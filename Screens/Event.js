import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Image } from 'react-native';

const Event = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 20, marginTop: 53 }}>Event Dan Kesenian Tulungagung</Text>
      
      <ScrollView>
      <Image source={require('../bahan/reog.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
      <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Reog Kendang</Text>
      <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
      Reog Kendang Tulungagung adalah salah satu pertunjukan seni tradisional dari Tulungagung, Jawa Timur, Indonesia. Pertunjukan ini merupakan bagian dari kebudayaan Jawa yang kaya, dan biasanya digelar dalam acara-acara adat, seperti pernikahan atau upacara keagamaan.
     </Text>
      </View>

      <Image source={require('../bahan/eskacang.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Genre Ska</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Merupakan sebuah acara musik di Tulungagung yang memfokuskan pada genre musik Ska. Acara ini juga menghadirkan beragam genre musik lainnya untuk memenuhi selera berbagai penikmat musik. Dalam event ini, Anda dapat menikmati musik Ska yang penuh semangat dan irama yang khas, serta variasi musik dari berbagai genre lainnya. 
    </Text>
     </View>

     <Image source={require('../bahan/jatilan.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Jathilan Tulungagung</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Jathilan Tulungagung adalah seni pertunjukan tradisional Jawa yang berasal dari Kabupaten Tulungagung, Jawa Timur, Indonesia. Pertunjukan ini melibatkan tarian dan musik yang menampilkan sekelompok penari yang mengenakan topeng kuda atau kerbau dan bergerak bersamaan dalam irama musik gamelan. 
    </Text>
     </View>

     <Image source={require('../bahan/pameran.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Pameran Tulungagung</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Pameran Tulungagung adalah sebuah acara pameran seni dan budaya yang diadakan di wilayah Tulungagung, Jawa Timur, Indonesia. Acara ini bertujuan untuk mempromosikan seni, kerajinan tangan, dan warisan budaya lokal.
    </Text>
     </View>

     <Image source={require('../bahan/ketoprak.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Ketoprak Tulungagung</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Ketoprak Tulungagung adalah bentuk seni pertunjukan tradisional Indonesia yang berasal dari daerah Tulungagung, Jawa Timur. Pertunjukan Ketoprak Tulungagung menggabungkan unsur-unsur drama, tari, musik, dan komedi. Biasanya, pertunjukan ini menceritakan cerita-cerita legenda atau mitos yang memiliki makna moral dan sosial.
    </Text>
     </View>

     <Image source={require('../bahan/p.jpg')} style={{ width: 255, height: 225, borderRadius: 20,  marginLeft: 50, marginTop: 29}} />
     
     <View style={{ padding: 20 }}>
     <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Pawai Budaya Tulungagung</Text>
     <Text style={{ textAlign: 'left', fontSize: 12, marginTop: 5, marginLeft: 20 }}>
     Pawai Budaya Tulungagung adalah sebuah perayaan budaya yang diadakan di Kota Tulungagung, Jawa Timur, Indonesia. Acara ini menampilkan beragam seni dan budaya lokal, seperti tarian tradisional, musik tradisional, pakaian adat, serta berbagai hiasan dan hiasan yang menggambarkan kekayaan budaya daerah tersebut.  
    </Text>
     </View>
     </ScrollView>
      </SafeAreaView>
  );
};

export default Event;