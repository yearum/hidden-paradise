import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);



  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffff' }}>
      <View style={{ backgroundColor: '#ffe4e1', borderRadius: 163, width: 400, height: 700, alignItems: 'center', justifyContent: 'center', marginTop: -240 }}>
  <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: 39, marginBottom: 55 }}> Welcome to </Text>
  <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: -16, marginLeft: -10 }}> Hidden </Text>
  <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: -50 }}> Paradise . </Text>

  <View style={{ position: 'relative', alignItems: 'center' }}>
  <TouchableOpacity style={{ width: 300, height: 60, transform: [{ rotate: '360deg' }], backgroundColor: 'white', borderRadius: 15, borderWidth: 1, borderColor: '#86f0ef', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 330 }}onPress={() => navigation.navigate("Discover")}>
  <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: '#86f0ef' }}>Let's Go</Animatable.Text>
  </TouchableOpacity>
  </View>
  </View>

    </SafeAreaView>
  );
};

export default HomeScreen;
