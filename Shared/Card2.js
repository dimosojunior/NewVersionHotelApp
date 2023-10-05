import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import {globalstyles} from '../Styles/globalstyles';
import { Dimensions } from 'react-native';
export default function Card(props){

	return(

		<View style={styles.card}>

		<View style={styles.cardContent}>

		{props.children}
			

		</View>



			

		</View>


		);
}


const styles = StyleSheet.create({
  card: {
    // ila uidisplay verticaly ziweke
    //flex: 1,
    // height:100,
    borderRadius:6,
     width:Dimensions.get('window').width,
     //width:'100%',
    elevation:3,
    //backgroundColor:'black',
    shadowOffset:{width:1, height:1},
    shadowColor:'#C0C0C0',
    shadowOpacity:1,
    shadowRadius:2,
    padding:10,
    

    
    
  },
  cardContent:{
    marginHorizontal:50,
    backgroundColor:'#F8F4F4'
  	

    //width:Dimensions.get('window').width,
    //width:'80%'
  }
,
  });