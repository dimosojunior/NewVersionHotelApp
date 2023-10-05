
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
import {globalstyles} from '../Styles/globalstyles';

export default function Header(  {title} ) {

  

const navigation = useNavigation();

  const openMenu = () => {
    navigation.openDrawer();
  }


   const [greeting, setGreeting] = useState('');

  // Function to get the current time and set the greeting based on the time
  const setGreetingBasedOnTime = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour <= 15) {
      setGreeting('Good Afternoon');
    } else if (currentHour > 15 && currentHour <= 18){
      setGreeting('Good Evening');
    } else {
      setGreeting('Good Night');
    }

  };

  // Use useEffect to set the initial greeting and update it when needed
  useEffect(() => {
    setGreetingBasedOnTime();
  }, []);



  return (
  
<View style={globalstyles.headerHeaderFile}>
      <MaterialIcons name='menu' 
      size={28} onPress={openMenu} style={globalstyles.iconHeaderFile} />

        <Text style={globalstyles.headerTextHeaderFile}>{greeting}</Text>
<Image source={require('../assets/easy.jpg')} 
  style={globalstyles.headerImageHeaderFile} />

        </View>  
    
  );
}

const styles = StyleSheet.create({
  
     });

