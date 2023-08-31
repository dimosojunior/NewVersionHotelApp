import React from 'react';
import { StyleSheet,Image, Text, View, Button,TouchableOpacity } from 'react-native';
import {globalstyles} from '../Styles/globalstyles';
import { Dimensions } from 'react-native';
export default function Card(props){

	return(

		<View >


    <View style={globalstyles.HomeHeaderContainer}>

 <Image 
          source={require('../assets/i3.png')}  
          style={globalstyles.HomeHeaderImage} 
          />
<Text style={globalstyles.HomeHeaderText}>easyFix</Text>


</View>

		
		</View>


		);
}


const styles = StyleSheet.create({
  
  });