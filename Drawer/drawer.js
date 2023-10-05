import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {DrawerItemList,createDrawerNavigator} from '@react-navigation/drawer';

import {NavigationContainer, DarkTheme,DefaultTheme} from '@react-navigation/native';

// import Header from '../Shared/header';


import { StyleSheet,Image,Switch,Dimensions,ScrollView,TouchableOpacity,Modal, Text, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons, FontAwesome, AntDesign} from '@expo/vector-icons';



import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import HomeScreen from '../Screens/HomeScreen';
 import MyStack from '../Stack/Stack';
 import AccountStack from '../Stack/AccountStack';
 import RestaurantStack from '../Stack/RestaurantStack';
import RetailsStack from '../Stack/RetailsStack';
import BusinessUnitScreen from '../Screens/BusinessUnitScreen';

import UsersScreen from '../Screens/UsersScreen';
import AboutScreen from '../Screens/AboutScreen';
import ShareScreen from '../Screens/ShareScreen';
import ChangePasswordScreen from '../Screens/ChangePasswordScreen';
//import { useNavigation } from '@react-navigation/native';
import Test from '../Screens/Test';
import ProductAddScreen from '../Screens/ProductAddScreen';

import {EndPoint} from '../constantComponents/constants'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {globalstyles,images} from '../Styles/globalstyles';

 import Slider from '../Screens/Slider';
// import HotelCategoriesHomeScreen from '../Hotels/HotelCategoriesHomeScreen';
// import RestaurantCategoriesHomeScreen from '../Restaurants/RestaurantCategoriesHomeScreen';
// import RetailsCategoriesHomeScreen from '../Retails/RetailsCategoriesHomeScreen';
import SigninScreen from '../AccountScreens/SigninScreen';

import PreLoaderScreen from '../Screens/PreLoaderScreen';

import ShareStack from '../Stack/ShareStack';
import UsersStack from '../Stack/UsersStack';

const Drawer = createDrawerNavigator();

function MyDrawer({userToken,setUserToken}){
const navigation = useNavigation();
  const {width,height} = Dimensions.get('window');
const [isLogout, setIsLogout] = useState(false);

const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();


   const [userData, setUserData] = useState({});
    //const [userToken, setUserToken] = useState('');



  useEffect(() => {
    fetchUserData();
  }, [userData]);

  const fetchUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');
      if (userDataJSON) {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);
        
        //console.log(parsedUserData);
        //console.log(userDataJSON);
      }
    } catch (error) {
      console.log(error);
    }
  };














// useFocusEffect(
//     React.useCallback(() => {
//       const updateUserToken = async () => {
//         const token = await AsyncStorage.getItem('userToken');
//         setUserToken(token || '');
//       };

//       updateUserToken();

//       // Listen for the 'updateUserToken' event
//       const unsubscribe = navigation.addListener('updateUserToken', updateUserToken);

//       // Cleanup the listener when the component unmounts
//       return unsubscribe;
//     }, [navigation])
//   );




  useEffect(() => {
    checkLoggedIn();


  }, [userToken]);

  const checkLoggedIn = async () => {
    const token = await AsyncStorage.getItem('userToken');
    setUserToken(token);
  };

  //console.log("Drawer User Token", userToken);

  const handleLogout = async () => {
    try {
      if (!userToken) {
        //console.log('User token is missing');
        console.error('User token is missing');
        return;
      }

      // Make a POST request to your Django logout API
      const response = await axios.post(
        `${EndPoint}/Account/logout_user/`,
        null,
        {
          headers: {
            Authorization: `Token ${userToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // If the logout was successful, remove the user token from AsyncStorage
      if (response.status === 200) {
        await AsyncStorage.removeItem('userToken', () => {
          setModalVisible(false);
          // Callback function to navigate to the Signin screen after token removal
          navigation.navigate('Signin Stack');
        });
        console.log('TOKEN REMOVED');
      } else {
        console.log('Failed to logout');
      }
    } catch (error) {
      console.error('Error while logging out:', error);
    }
  };










  return(



     
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <>
              
              <View style={{
                // backgroundColor: 'rgb(5,5,49)',
              }}>
              <ScrollView>
              
                <View
                  style={{
                    // height: height,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1,
                    marginBottom:12,
                    
                  }}
                >
             {userData && userData.profile_image ? 
                  <Image
                    //source={require('../assets/i3.png')}
        source={{uri:EndPoint+'/'+userData.profile_image }}

                    style={{
                      height: 110,
                      width: 110,
                      borderRadius: 60,
                      marginBottom:10,
                      marginTop:10,
                    }}
                  />
                  : ''}


 <Text style={{
  fontSize:18,
  fontWeight:'bold',
 }}>{userData ? userData.username : ''}</Text>



   </View>
 

                  
             







                <DrawerItemList {...props} />
             




    
</ScrollView>











      
     


     
   











              </View>

               { userToken && (
      <TouchableOpacity 
      style={{
        //marginTop:50,
        //alignItems:'center',
        position:"absolute",
        bottom:10,
        // right:width/5,
        right:10,
        backgroundColor:'green',
        padding:10,
        borderRadius:6,

      }}
      // onPress={handleLogout}
        onPress={() => {
                
                setModalVisible(true);
              }}
      >
        <Text style={{
        //bottom:0,
        paddingHorizontal:20,
        color:'white',
        fontWeight:'bold',
        
        fontSize:18,

      }}>Logout</Text>
      </TouchableOpacity>

      )}





      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>Hello {userData.username}</Text>

            <ScrollView keyboardShouldPersistTaps="handled">

                <View style={globalstyles.form}>
                 
     <Text style={{ fontSize:16, marginLeft:3 }}>Are you sure you want to logout ?</Text>
              

                <View  style={{ marginTop:20 }}>
                   
             
                </View>


            </View>

          
            

            <View style={globalstyles.ButtonConatiner}>
                    <TouchableOpacity style={globalstyles.ButtonClose}  onPress={() => setModalVisible(false)} >
                        <Text style={{
                          color:'white',
                        }}>NO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={globalstyles.ButtonAdd}  
                    onPress={handleLogout} >
                        <Text style={{
                          color:'white',
                        }}>YES</Text>
                    </TouchableOpacity>
            </View>

            </ScrollView>
          </View>
        </View>
      </Modal>
</>
              
            )
          }
        }
        screenOptions={{
        headerShown:false,
          drawerStyle: {
            // backgroundColor: 'rgb(5,5,49)',
            backgroundColor: '#F0F0F0',
            width: 260
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "black",
            fontSize:16,

          },
          // drawerIconStyle: {
          //   color: "white",
          //   fontSize:16,
          //   border:4,
          //   borderColor:'red',

          // }
        }}
      >

{/*{ userToken && (
  <Drawer.Screen
          name="Login"
          options={{
            drawerLabel: "Login",
            title: "Login",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <MaterialIcons name="home" size={20} color="black" />
              </View>
            )
          }}
          component={AccountStack}
        />

)}*/}



 
        <Drawer.Screen
          name="Hotel user"
          options={{
            drawerLabel: "Hotel user",
            title: "Hotel user",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <MaterialIcons name="home" size={20} color="black" />
              </View>
            )
          }}
          component={MyStack}
        />
        

{userData.is_restaurant_user === true && (
     <Drawer.Screen
          name="Restaurant user"
          options={{
            drawerLabel: "Restaurant user",
            title: "Restaurant user",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <FontAwesome name="industry" size={20} color="black" />
              </View>
            )
          }}
          component={RestaurantStack}
        />

    )}

{userData.is_retails_user === true && (
         <Drawer.Screen
          name="Retail user"
          options={{
            drawerLabel: "Retail user",
            title: "Retail user",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <MaterialIcons name="book" size={20} color="black" />
              </View>
            )
          }}
          component={RetailsStack}
        />

)}
  


{/*<Drawer.Screen
          name="About"
          options={{
            drawerLabel: "About",
            title: "About",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <AntDesign name="exclamationcircleo" size={20} color="black" />
              </View>
            )
          }}
          component={AboutScreen}
          />
*/}



<Drawer.Screen
          name="Users"
          options={{
            drawerLabel: "Users",
            title: "Users",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <FontAwesome name="users" size={20} color="black" />
              </View>
            )
          }}
          component={UsersStack}
        />





<Drawer.Screen
          name="Share"
          options={{
            drawerLabel: "Share",
            title: "Share",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <FontAwesome name="share" size={20} color="black" />
              </View>
            )
          }}
          component={ShareStack}
          />



       {/*   <Drawer.Screen
          name="Change Password"
          options={{
            drawerLabel: "Change Password",
            title: "Change Password",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <FontAwesome name="unlock-alt" size={20} color="black" />
              </View>
            )
          }}
          component={ChangePasswordScreen}
          />
*/}




{/*
     <Drawer.Screen
          name="Test"
          options={{
            drawerLabel: "Test",
            title: "Test",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <FontAwesome name="unlock-alt" size={20} color="black" />
              </View>
            )
          }}
          component={Test}
          />

*/}

{/*  <Drawer.Screen
          name="Business Unit"
          options={{
            drawerLabel: "Business Unit",
            title: "Business Unit",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <MaterialIcons name="home" size={20} color="black" />
              </View>
            )
          }}
          component={BusinessUnitScreen}
        />
*/}
      
      </Drawer.Navigator>
    
    
    

    );
}
export default MyDrawer;




const styles = StyleSheet.create({
    menuicon: { 

       // color:'black', 
        


    },

     });