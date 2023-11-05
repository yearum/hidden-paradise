import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen.js';
import Discover from './Screens/Discover.js';
import WisataBahari from './Screens/WisataBahari.js';
import WisataAlam from './Screens/WisataAlam.js';
import WisataZiaroh from './Screens/WisataZiaroh.js';
import WisataCagarBudaya from './Screens/WisataCagarBudaya.js';
import Kuliner from './Screens/Kuliner.js';
import Event from './Screens/Event.js';
import DetailScreen from './Screens/DetailWisata.js';
import TiwulScreen from './Screens/TiwulScreen.js';
import ReogScreen from './Screens/ReogScreen.js';
import DetailWisata from './Screens/DetailWisata.js';



 const Stack = createNativeStackNavigator();


export default function App() {
  return (
    
    <TailwindProvider>
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="WisataBahari" component={WisataBahari} />
        <Stack.Screen name="WisataAlam" component={WisataAlam} />
        <Stack.Screen name="WisataZiaroh" component={WisataZiaroh} />
        <Stack.Screen name="WisataCagarBudaya" component={WisataCagarBudaya} />
        <Stack.Screen name="Kuliner" component={Kuliner} />
        <Stack.Screen name="Event" component={Event} />
        <Stack.Screen name="DetailWisata" component={DetailWisata} />
        <Stack.Screen name="TiwulScreen" component={TiwulScreen} />
        <Stack.Screen name="ReogScreen" component={ReogScreen} />
        


      </Stack.Navigator>
      
    </NavigationContainer>
    </TailwindProvider>
  );
}

