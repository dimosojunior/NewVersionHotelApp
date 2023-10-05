import React, { useState, useEffect } from 'react';

import {View,Alert, Image,StyleSheet,ActivityIndicator, Text,Dimensions,ScrollView, Touchable, TouchableOpacity} from 'react-native';

import Background from './PageStyling/Background';
import Btn from './PageStyling/Btn';
import {black} from './PageStyling/Constants';
import LoginField from './PageStyling/LoginField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import {EndPoint} from '../constantComponents/constants';
import {globalstyles,images} from '../Styles/globalstyles';
import LottieView from 'lottie-react-native';
import { EventRegister } from 'react-native-event-listeners';

const SigninScreen = ({navigation}) => {
  const { width, height } = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //TO MAKE A LOADING MESSAGE ON A BUTTON
const [isPending, setPending] =useState(false);

  //const navigation = useNavigation();

  useEffect(() => {
    checkLoggedIn();
  }, []);

 const checkLoggedIn = async () => {
  const token = await AsyncStorage.getItem('userToken');
  if (token) {
    try {
      const userResponse = await axios.get(
        EndPoint+'/Account/user_data/',
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      const userData = userResponse.data;
      // Fetch and set cart data here
      // const cartResponse = await axios.get(
      //   'https://hotelappapisv1.pythonanywhere.com/Hotel/Cart/',
      //   {
      //     headers: {
      //       Authorization: `Token ${token}`,
      //     },
      //   }
      // );

      // const cartData = cartResponse.data;
      // // Update the cart state with the fetched data
      // setCart(cartData);

      navigation.replace('Home Stack', { userData });
    } catch (error) {
      console.log(error);
    }
  }
};


  const handleLogin = async () => {

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setPending(true);

    try {
      const response = await axios.post(EndPoint+'/Account/login_user/', {
        email: email,
        password: password,
      });

      const token = response.data.token;
      await AsyncStorage.setItem('userToken', token);
       //navigation.emit('updateUserToken', token);

      // Now, make another request to get user data
      const userResponse = await axios.get(EndPoint+'/Account/user_data/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      const userData = userResponse.data;
       // Save user data to AsyncStorage
    await AsyncStorage.setItem('userData', JSON.stringify(userData));

    // Emit the 'updateUserToken' event
    // hii inasaidia kupata a login user token automatically without
    // page refreshing
   EventRegister.emit('updateUserToken', token);



      // Pass the userData to Home Stack
      navigation.replace('MainScreen', { userData });
    } catch (error) {
      setError('Invalid credentials');
      setPending(false);
    }
  };

  return (
    
     
     
      <View style={{
        alignItems: 'center',
         width: width,
         justifyContent:'center',
         flex:1,
         backgroundColor:'white',

       }}>
        <ScrollView keyboardShouldPersistTaps="handled">





   
<View style={{
  justifyContent:'center',
  alignItems:'center',
  height:'10%',
  width:width,
}}> 

 <Image 
source={require('../assets/easy.jpg')}  
style={{
  width:'50%',
  height:40,
  marginBottom:20,
  borderRadius:8,
  marginTop:20,
}} 
          />


</View>




  
        <View
          style={{
            // backgroundColor: 'rgb(5,5,49)',
            
            // justifyContent:'center',
            height: height,
            width: width,
            borderTopLeftRadius: 0,
            paddingTop: 10,
            alignItems: 'center',
            marginTop:10,
          }}>
          <Text style={{
            fontSize: 25, 
            color: 'green', 
            fontWeight: 'bold',
            marginBottom:10,
          }}>
            Login
          </Text>

           <Text style={styles.errorText}>{error}</Text>

       

          <LoginField
            placeholder="Enter valid email"
            keyboardType={'email-address'}
            value={email}
        onChangeText={text => setEmail(text)}

          />
          <LoginField placeholder="Enter Password" secureTextEntry={true} 
         
        value={password}
        onChangeText={text => setPassword(text)}
        
          />
         
{ !isPending && 
          <TouchableOpacity
          onPress={handleLogin}
          >
          
          
          <Btn textColor='white' bgColor={black} btnLabel="Login" />
          

          
         </TouchableOpacity>}

      { isPending && 
          
          
          
      <LottieView
  style={{
    
  }}
        source={require('../assets/Loading/loading4.json')} // Replace with your animation JSON file
        autoPlay
        loop
      />
}

        {/*  <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ 
              fontSize: 16, 
              fontWeight:"bold",
              color:'red',
             }}>Don't have an account ? </Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate("Signup Stack")}
            >
            <Text style={{ color: black, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>*/}
        </View>

      
</ScrollView>

      </View>

      




   
  );
};
export default SigninScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});


