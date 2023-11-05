import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';




const Discover = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [isCancel, setIsCancel] = useState(false); 
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const categories = [ 'Wisata Bahari', 'Wisata Alam', 'Wisata Ziaroh', 'Wisata Cagar Budaya'];

  const data = [
    'Labuhan Bajo', 'WBL', 'Raja Ampat', 'Pantai Gemah', 'Pantai Coro', 'Pantai Molang',
    'Pantai Popoh', 'Pantai Kedung Tumpang', 'Pantai Pathok gebang', 'Pantai Ngalur', 'Pantai Sine',
    'Pantai Lumbung', 'Pantai Klatak', 'Pantai Brumbung', 'Pantai TebingBanyu Muluk',
    'Pantai Pacar', 'Pantai Gerangan', 'Pantai Dlodo', 'Pantai Ngapuraceng', 'Pantai Semrawang',
    'Pantai Sioro', 'Pantai Dadap', 'Gunung Budheg', 'Taman Aloon Aloon', 'Ranu Gumbolo',
    'Sendang', 'Air Terjun Alas Kandung', 'Air Terjun Slendang Biru', 'Hutan Kota', 'waduk Wonorejo',
    'Jurang Senggani', 'Kyai Abd. Fatah Hasan Tholabi', 'Mbah Noeryahman', 'Mbah Langkir', 'Mbah Maddhali', 'Mbah Ghozali', 'Candi Gayatri', 'Beli Kopi', 'Janji Jiwa', 'Pago Creative Space',
    'Kathekan', 'Warkop Madjumapan', 'Terimoe Kopi', 'Waris', 'Air Terjun Pandan Wangi', 'Air Terjun Coban Kromo', 'Air Terjun Lawean', 'Goa Pasir', 'Goa Selo Mangkleng', 'Goa Tan Tek Sue', 'Masjid Almunawar', 'Masjid Pelem', 'Splase Waterpark', 
    'Jmboolan Waterpark', 'Argo Wisata Blimbing', 'Bukit Cemenung', 'Musium Tulungagung', 'Candi Dadi', 'Candi Penampihan', 'Candi Ampel', 'Klenteng Tjoe Tik Kiong', 'Candi Sanggrahan', 'Bakso Kikil', 
    'Sate Klopo', 'Nasi Pecel', 'Rawon Setan', 'Soto Tulungagung', 'Mie Lethek', 'Keripik Tempe', 'Rambak', 'Klepon', 'Pecel Lele', 'Kupang Lontong', 'Lodho', 'Punten Pecel', 'Tiwul Goreng', 'Pawai Budaya', 'Pagelaran Wayang Kulit',
    'Festival Seni Rupa', 'Pentas Seni Tradisional', 'Festival Batik', 'Lomba Seni Budaya', 'Festival Tradisional Anak-Anak', 'Pameran Kerajinan Tangan', 'Reog Kendang'
  ];

  const handleSearchResultPress = (result) => {
    if (result.toLowerCase().includes("pantai")) {
      navigation.navigate('WisataBahari');
    } else if (result.toLowerCase().includes("gunung")) {
      navigation.navigate('WisataAlam');
    } else {
      window.open('https://instagram.com/pago.creativespace?igshid=NGVhN2U2NjQ0Yg=='); 
    }
    setIsDropdownVisible(false);
  };

  const performSearch = () => {
    if (searchText === '') {
      setSearchResults([]);
    } else {
      const results = data.filter((item) => item.toLowerCase().includes(searchText.toLowerCase()));
      setSearchResults(results);
    }
  };
  useEffect(() => {
    performSearch();
  }, [searchText]);

  const handleCategorySelect = (category) => {
    if (isCancel) {
      setSelectedCategory('');
      setIsCancel(false);
      setShowCategoryModal(false);
    } else {
      setSelectedCategory(category);
      setShowCategoryModal(false);
      switch (category) {
        case 'Wisata Bahari':
          navigation.navigate('WisataBahari');
          break;
        case 'Wisata Alam':
          navigation.navigate('WisataAlam');
          break;
        case 'Wisata Ziaroh':
          navigation.navigate('WisataZiaroh');
          break;
        case 'Wisata Cagar Budaya':
          navigation.navigate('WisataCagarBudaya');
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    performSearch();
  }, [searchText]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 53 }}>Hidden.Paradise</Text>
      <Text style={{ fontSize: 10, marginLeft: 17, marginBottom: 16, color: '#7c7c7c' }}>cari destinasi yang cocok untukmu</Text>

      <View style={{ width: 300, height: 45, padding: 10, backgroundColor: '#fdfdfd', borderRadius: 25, borderColor: '#cdcdcd', borderWidth: 1, marginLeft: 15, marginTop: 1 }}>
        <TextInput
          placeholder="🔎Cari..."
          onChangeText={(text) => {
            setSearchText(text);
          }}
          value={searchText}
        />
      </View>

      {isDropdownVisible && searchResults.length > 0 && (
        <View style={{ position: 'relative', top: 80, left: 15, width: 500, maxHeight: 900, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 0, borderColor: '#cdcdcd', borderWidth: 1, zIndex: 2, overflow: 'hidden' }}>
          <ScrollView>
            {searchResults.map((result, index) => (
              <TouchableOpacity key={index} onPress={() => handleSearchResultPress(result)}>
                <Text style={{ padding: 10 }}>{result}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      
        <View style={{ marginTop: 25, marginLeft: 20 }}>
          <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#1E1E1E' }}>Kategori: {selectedCategory}</Text>
        </View>

        <TouchableOpacity
        onPress={() => {
          if (selectedCategory) {
            setIsCancel(true);
          }
          setShowCategoryModal(true);
        }}
      >
        
        <View style={{ width: 98, height: 40, backgroundColor: 'white', borderRadius: 20, borderColor: '#E9E9E9', borderWidth: 1, marginLeft: 29, marginTop: 30 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 10, marginLeft: 40, color: '#1E1E1E', marginRight: 11, marginTop: 5 }}>{isCancel? 'Kembali' : 'Wisata ' + selectedCategory}</Text>
            <Image source={require('../bahan/peta.jpg')} style={{ width: 27, height: 26,  marginLeft: -88, marginTop: 5}} />
          </View>
        </View>
      </TouchableOpacity>
      

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Kuliner')}>
          <View style={{ width: 98, height: 40, backgroundColor: 'white', borderRadius: 20, borderColor: '#E9E9E9', borderWidth: 1, marginLeft: 100, marginTop: -39 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 10, marginLeft: 40, color: '#1E1E1E', marginRight: 11, marginTop: 5 }}>Kuliner</Text>
              <Image source={require('../bahan/kuliner.png')} style={{ width: 27, height: 26, marginLeft: -88, marginTop: 7 }} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Event')}>
          <View style={{ width: 98, height: 40, backgroundColor: 'white', borderRadius: 20, borderColor: '#E9E9E9', borderWidth: 1, marginLeft: 13, marginTop: -39 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 10, marginLeft: 40, color: '#1E1E1E', marginRight: 12, marginTop: 5 }}>Event</Text>
              <Image source={require('../bahan/ipen.png')} style={{ width: 27, height: 26, marginLeft: -80, marginTop: 7 }} />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView>
      <View style={{ width: 117, height: 91, backgroundColor: 'white', borderRadius: 20, borderColor: '#E9E9E9', borderWidth: 1, marginTop: 40, marginLeft: 30 }}>
      <TouchableOpacity onPress={() => navigation.navigate('DetailWisata')}>
        <View>
          <Image source={require('../bahan/pantai.jpg')} style={{ width: 117, height: 115, borderRadius: 20, marginLeft: -1, marginTop: -26 }} />
        </View>
      </TouchableOpacity>
    </View>

    <View style={{ padding: 20 }}>
  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>📍Pantai Gemah</Text>
  <Text style={{ textAlign: 'auto', fontSize: 12 }}>
    Terletak di Kabupaten Tulungagung, Provinsi Jawa Timur, Indonesia.
    Lokasinya lebih tepatnya di Desa Keboireng, Kecamatan Besole, Tulungagung, Jawa Timur.
  </Text>
</View>

<View style={{ flex: 2 }}>
<View style={{ width: 189, height: 110, marginLeft: 165, marginTop: -250 }}>
  <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: -8.2625, 
      longitude: 111.770833, 
      latitudeDelta: 0.02, 
      longitudeDelta: 0.02,
    }}
  >
    <Marker
      coordinate={{
        latitude: -8.2625, 
        longitude: 111.770833, 
      }}
      title="Pantai Gemah"
      description="Lokasi Pantai Gemah"
    />
  </MapView>
</View>
</View>

<View style={{width: 117, height: 91, backgroundColor: "white", borderRadius: 20, borderColor: '#E9E9E9', borderWidth: 1, marginTop: 40, marginLeft: 30}}>
<TouchableOpacity onPress={() => navigation.navigate('TiwulScreen')}>
      <View>
        <Image source={require('../bahan/tiwul.jpg')} style={{ width: 117, height: 115, borderRadius:20,  marginLeft: -1, marginTop: -26}} />
      </View>
      </TouchableOpacity>
    </View>

    <View style={{ padding: 20 }}>
  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Tiwul Goreng</Text>
  <Text style={{ textAlign: 'auto', fontSize: 12 }}>
    Merupakan makanan khas Tulungagung yang terbuat dari bahan dasar tiwul. Tiwul sendiri merupakan makanan tradisional Indonesia yang terbuat dari singkong yang dihaluskan dan dikeringkan. 
  </Text>
</View>

<View style={{ flex: 2 }}>
<View style={{ width: 189, height: 110, marginLeft: 165, marginTop: -275 }}>
  <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: -8.065246 , 
      longitude: 111.902758, 
      latitudeDelta: 0.02, 
      longitudeDelta: 0.02,
    }}
  >
    <Marker
      coordinate={{
        latitude: -8.065246 , 
        longitude: 111.902758, 
      }}
      title="Warung Nasi Tiwul"
      description="Lokasi Nasi Tiwul"
    />
  </MapView>
</View>
</View>

<View style={{width: 117, height: 91, backgroundColor: "white", borderRadius: 20, borderColor: '#E9E9E9', borderWidth: 1, marginTop: 40, marginLeft: 30}}>
<TouchableOpacity onPress={() => navigation.navigate('ReogScreen')}>
      <View>
        <Image source={require('../bahan/reog.jpg')} style={{ width: 117, height: 115, borderRadius:20,  marginLeft: -1, marginTop: -26}} />
      </View>
      </TouchableOpacity>
    </View>

    <View style={{ padding: 20 }}>
  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Reog Kendang</Text>
  <Text style={{ textAlign: 'auto', fontSize: 12 }}>
    Merupakan kesenian tari tradisional khas Tulungagung.
    Reog Kendang menggabungkan unsur tari, musik, dan seni visual, dan ditampilkan dalam berbagai acara budaya dan perayaan.
  </Text>
</View>

<View style={{ flex: 2 }}>
<View style={{ width: 189, height: 110, marginLeft: 165, marginTop: -275 }}>
  <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: -8.091221 , 
      longitude: 111.964173, 
      latitudeDelta: 0.02, 
      longitudeDelta: 0.02,
    }}
  >
    <Marker
      coordinate={{
        latitude: -8.091221, 
        longitude: 111.964173, 
      }}
      title="Reog Kendang Tulungagung"
      description="Lokasi Reog Kendang Tulungagung"
    />
  </MapView>
</View>
</View>
</ScrollView>


      <FlatList
        data={searchResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item}</Text>
        )}
      />
        <Modal visible={showCategoryModal} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: 200, borderRadius: 11, borderColor: '#AFAFAF', borderWidth: 1, backgroundColor: '#E9E9E9'  }}>
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleCategorySelect(category)}
              >
                <Text style={{ fontSize: 16, padding: 10 }}>{category}</Text>
              </TouchableOpacity>
            ))}
            </View>
          </View>
      </Modal>
    
    


    </SafeAreaView>
  );
    };
export default Discover;
