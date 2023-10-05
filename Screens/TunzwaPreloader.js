import React, { useState, useEffect } from 'react';
import { View,Dimensions, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { EndPoint } from '../constantComponents/constants';
//import { useNavigation } from '@react-navigation/native';
// Inside Test.js
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import COLORS from '../constantComponents/colors';
import {PrimaryButton} from '../constantComponents/Button';

import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import {globalstyles,images} from '../Styles/globalstyles';
import Background from '../AccountScreens/PageStyling/Background';
import Btn from '../AccountScreens/PageStyling/Btn';
import {black} from '../AccountScreens/PageStyling/Constants';
import LoginField from '../AccountScreens/PageStyling/LoginField';

export default function PreLoaderScreen({navigation}) {
  //const navigation = useNavigation();
  const [userToken, setUserToken] = useState('');
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const [errorMessage404, setErrorMessage404] = useState(false);
  const [errorMessage401, setErrorMessage401] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const updateUserToken = async () => {
        const token = await AsyncStorage.getItem('userToken');
        setUserToken(token || '');
      };

      updateUserToken();

      const unsubscribe = navigation.addListener('updateUserToken', updateUserToken);

      return unsubscribe;
    }, [navigation])
  );

  useEffect(() => {
    checkLoggedIn();
  }, [userToken]);

  




const checkLoggedIn = async () => {
  const token = await AsyncStorage.getItem('userToken');
  if (token) {
    try {
      const userResponse = await axios.get(
        EndPoint + '/Account/user_data/',
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      const userData = userResponse.data;

      // Check user role and redirect accordingly
      if (userData.is_hotel_user) {
        navigation.navigate('Home Stack', { userData });
      } else if (userData.is_retails_user) {
        navigation.navigate('Retails Category', { userData });
      } else if (userData.is_restaurant_user) {
        navigation.navigate('Restaurants Category', { userData });
      } else {
        // Handle other user types or scenarios here
      }
    } catch (error) {
      setError(error);
      handleErrorMessage(error);
    }
  } else {
    navigation.navigate('Signin Stack');
  }
};





  const handleErrorMessage = (error) => {
    if (error.response) {
      // The request was made and the server responded with an error status code
      if (error.response.status === 401) {
        setErrorMessage('Authentication Error: You are not authorized.');
      } else if (error.response.status === 404) {
        setErrorMessage('Not Found: The requested resource was not found.');
        
      } else {
        setErrorMessage('An error occurred while processing your request.');
      }
    } else if (error.message === 'Network Error') {
      setErrorMessage('Network Error: Please check your internet connection.');
    } else {
      setErrorMessage('An unexpected error occurred.');
    }
  };

  const { width, height } = Dimensions.get('window');

 if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{errorMessage}</Text>

         <TouchableOpacity
          onPress={() => navigation.replace('Signin Stack')}
          > 
          <Btn textColor='white' bgColor={black} btnLabel="Login" />
         </TouchableOpacity>
      </View>
    );
  }


  return (
    <View style={styles.container}>


   
     
     <LottieView
  style={{
    
  }}
        source={require('../assets/Loading/loading5.json')} // Replace with your animation JSON file
        autoPlay
        loop
      />














    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red', // Customize the button's style
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

  errorText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 30,
  },
});
