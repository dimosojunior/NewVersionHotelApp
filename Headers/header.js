
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


  return (
  
<View style={globalstyles.headerHeaderFile}>
      <MaterialIcons name='menu' 
      size={28} onPress={openMenu} style={globalstyles.iconHeaderFile} />

        <Text style={globalstyles.headerTextHeaderFile}>{title}</Text>
<Image source={require('../assets/me.jpg')} 
  style={globalstyles.headerImageHeaderFile} />

        </View>  
    
  );
}

const styles = StyleSheet.create({
  
     });

