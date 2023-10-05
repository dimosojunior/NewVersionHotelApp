import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Switch,TouchableOpacity,ScrollView, Text, View, Button, Image } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';


import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import MinorHeader from '../Headers/MinorHeader'
import LottieView from 'lottie-react-native';
export default function LotterViewScreen() {
  const navigation = useNavigation();
  
 
  return (
    


   


  <LottieView
  style={{
    
  }}
        source={require('../assets/Loading/loading6.json')} // Replace with your animation JSON file
        autoPlay
        loop
      />





  );
}

const styles = StyleSheet.create({

  Profilecontainer:{
    // justifyContent:'center',
    // alignItems:'center',
     //flex:1,
     justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'wheat',
    zIndex:1,
  },


});