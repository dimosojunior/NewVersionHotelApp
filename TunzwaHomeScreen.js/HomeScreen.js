import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Dimensions,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';
// import {globalStyles} from '../Styles/GlobalStyles';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
import LottieView from 'lottie-react-native';


import { useNavigation } from '@react-navigation/native';
import Header from '../Headers/header';
import {globalstyles} from '../Styles/globalstyles';

import HomeScreenComponent from '../RenderedComponents/HomeScreenComponent';

const {width,height} = Dimensions.get('window');



export default function HomeScreen() {

  

const [isPending, setIsPending] = useState(false);



   // const navigation = useNavigation();

  const [hotelCategories, setHotelCategories] = useState([
  {CategoryName:'New sale',CategoryImage:require('../assets/sales.png'),id:'1'},
    {CategoryName:'Reports',CategoryImage:require('../assets/reports.png'), id:'5'},
  {CategoryName:'Customers',CategoryImage:require('../assets/customers.png'),id:'6'},

  {CategoryName:'Inventory',CategoryImage:require('../assets/inventory.png'),id:'2'},
  
    ]);
  
 //FOR  APIS
//const { services, isPending, error } = useFetch(MyDomain+'/apis/Services/');


 
  return (
    <View style={globalstyles.container}>
  
   
<Header title="Good Morning" />







{ isPending ? (

<View 
style={globalstyles.ActivityIndicatorContainer}
>
  

  <ActivityIndicator 
  size="large" color="red" /> 
  </View>
  ):(


    <HomeScreenComponent hotelCategories={hotelCategories} />


)} 









    </View>
  );
}

const styles = StyleSheet.create({
 





});