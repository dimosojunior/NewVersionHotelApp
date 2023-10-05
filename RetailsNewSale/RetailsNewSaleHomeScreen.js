import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Dimensions,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';
// import {globalStyles} from '../Styles/GlobalStyles';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
import LottieView from 'lottie-react-native';

import LotterViewScreen from '../Screens/LotterViewScreen';

import { useNavigation } from '@react-navigation/native';
import MinorHeader from '../Headers/MinorHeader';
import {globalstyles} from '../Styles/globalstyles';

import RetailsNewSaleHomeScreenComponent from '../RenderedComponents/RetailsNewSaleHomeScreenComponent';

const {width,height} = Dimensions.get('window');

import {EndPoint} from '../constantComponents/constants';

export default function RetailsNewSaleHomeScreen() {

  

//const [isPending, setIsPending] = useState(false);



   // const navigation = useNavigation();

  // const [inventory, setInventory] = useState([
  // {CategoryName:'Rooms',CategoryImage:require('../assets/room.png'),id:'1'},
  // {CategoryName:'Food',CategoryImage:require('../assets/food.png'),id:'2'},
  // {CategoryName:'Drinks',CategoryImage:require('../assets/drinks.png'),id:'6'},
  // // {CategoryName:'Others',CategoryImage:require('../assets/otherinentory.png'), id:'5'},
 
  //   ]);
  
 //FOR APIS
const { datas:inventory,setDatas:setInventory, isPending, error } = useFetch(EndPoint+'/PostData/PostRetailsInventory/');
//const { services:inventory, isPending, error } = useFetch(MyDomain+'/apis/Inventory/');


 
  return (

 <>
    {!isPending ? (



    <View style={globalstyles.container}>
  
   
<MinorHeader title="New sale" screenName="Retails Category" />







{inventory && inventory.length > 0 ? (

  <RetailsNewSaleHomeScreenComponent inventory={inventory} />


  ) :(

     <View style={globalstyles.NoProductContainerContainer}>
  <Text style={globalstyles.NoProductText}>No Data</Text>
</View>


  )} 









    </View>


      ):(

<LotterViewScreen />

)}

    </>
  
  );
}

const styles = StyleSheet.create({
 





});