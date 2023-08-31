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
import {MotiView} from 'moti';
import Card from '../Shared/Card';
import Logo from '../Shared/Logo';
import ListItemsCard from '../Shared/ListItemsCard';
const {width,height} = Dimensions.get('window');



export default function HomeScreen() {

  

const [isPending, setIsPending] = useState(false);



   // const navigation = useNavigation();

  const [services, setServices] = useState([
  {ServiceName:'Hotels',ServiceImage:require('../assets/hotel.png'),id:'1'},
  {ServiceName:'Restaurants',ServiceImage:require('../assets/restaurant.png'),id:'2'},
  {ServiceName:'Retails',ServiceImage:require('../assets/retail.png'),id:'6'},
  {ServiceName:'More',ServiceImage:require('../assets/more.png'), id:'5'},
 
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


    





















       <TouchableOpacity 
         >

<ListItemsCard>

      <MotiView
        style={globalstyles.listContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        >

      
        <View style={globalstyles.imageContainer}>
        
        
          <Image 
          source={require('../assets/i3.png')}  
          style={globalstyles.image} 
          />

        
        </View>

        <Text style={globalstyles.nameText}>Hotels</Text>
        
         
        
          
       


      </MotiView>

      </ListItemsCard>
       </TouchableOpacity>


)} 









    </View>
  );
}

const styles = StyleSheet.create({
 





});