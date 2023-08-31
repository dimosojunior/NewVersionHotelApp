import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Dimensions,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';
// import {globalStyles} from '../Styles/GlobalStyles';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
import LottieView from 'lottie-react-native';


import { useNavigation } from '@react-navigation/native';
import MinorHeader from '../Headers/MinorHeader';
import {globalstyles} from '../Styles/globalstyles';

import HotelInventoryHomeScreenComponent from '../RenderedComponents/HotelInventoryHomeScreenComponent';

const {width,height} = Dimensions.get('window');



export default function HotelInventoryHomeScreen() {

  

const [isPending, setIsPending] = useState(false);



   // const navigation = useNavigation();

  const [inventory, setInventory] = useState([
  {CategoryName:'Rooms',CategoryImage:require('../assets/room.png'),id:'1'},
  {CategoryName:'Food',CategoryImage:require('../assets/food.png'),id:'2'},
  {CategoryName:'Drinks',CategoryImage:require('../assets/drinks.png'),id:'6'},
  {CategoryName:'Others',CategoryImage:require('../assets/otherinentory.png'), id:'5'},
 
    ]);
  
 //FOR  APIS
//const { services:inventory, isPending, error } = useFetch(MyDomain+'/apis/Inventory/');


 
  return (
    <View style={globalstyles.container}>
  
   
<MinorHeader title="Inventory" screenName="Home Stack" />







{ isPending ? (

<View 
style={globalstyles.ActivityIndicatorContainer}
>
  

  <ActivityIndicator 
  size="large" color="red" /> 
  </View>
  ):(


  <HotelInventoryHomeScreenComponent inventory={inventory} />


)} 









    </View>
  );
}

const styles = StyleSheet.create({
 





});