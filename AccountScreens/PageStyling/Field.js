import React from 'react';
import {black} from './Constants';
import {View,TextInput, Text,Dimensions, Touchable, TouchableOpacity} from 'react-native';



const Field = props => {
  const {width,height} = Dimensions.get('window');
  return (
    <TextInput
      {...props}
      style={{borderRadius: 20,
       color: 'black', 
       paddingHorizontal: 20, 
       width:width-70, backgroundColor: 'rgb(220,220, 220)',
        marginVertical: 10,
        paddingVertical:15,
        marginTop:30,
    }}
      placeholderTextColor={black}></TextInput>
  );
};

export default Field;
