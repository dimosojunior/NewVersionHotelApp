import React from 'react';
import {black} from './Constants';
import {View,TextInput, Text,Dimensions, Touchable, TouchableOpacity} from 'react-native';



const LoginField = props => {
  const {width,height} = Dimensions.get('window');
  return (
    <TextInput
      {...props}
      style={{borderRadius: 20,
       color: 'black', 
       paddingHorizontal: 20, 
       width:width-70, backgroundColor: 'white',
        marginVertical: 30,
        paddingVertical:15,
        borderWidth:1,
        borderColor:'green'
    }}
      placeholderTextColor={black}></TextInput>
  );
};

export default LoginField;
