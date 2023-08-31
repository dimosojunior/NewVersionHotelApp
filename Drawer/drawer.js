import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {DrawerItemList,createDrawerNavigator} from '@react-navigation/drawer';

import {NavigationContainer, DarkTheme,DefaultTheme} from '@react-navigation/native';

// import Header from '../Shared/header';


import { StyleSheet,Image,Switch,Dimensions,ScrollView, Text, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons, FontAwesome} from '@expo/vector-icons';



import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
// import HomeScreen from '../Screens/HomeScreen';
 import MyStack from '../Stack/Stack';
 import RestaurantCategoriesHomeScreen from '../Restaurant/RestaurantCategoriesHomeScreen';
import RetailsCategoriesHomeScreen from '../Retails/RetailsCategoriesHomeScreen';




 import Slider from '../Screens/Slider';
// import HotelCategoriesHomeScreen from '../Hotels/HotelCategoriesHomeScreen';
// import RestaurantCategoriesHomeScreen from '../Restaurants/RestaurantCategoriesHomeScreen';
// import RetailsCategoriesHomeScreen from '../Retails/RetailsCategoriesHomeScreen';
const Drawer = createDrawerNavigator();
function MyDrawer({navigation}){

  const {width,height} = Dimensions.get('window');






  return(



     <NavigationContainer>
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <ScrollView>
              <View style={{
                // backgroundColor: 'rgb(5,5,49)',
              }}>
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
                  <Image
                    source={require('../assets/i3.png')}
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 50,
                      marginBottom:10,
                      marginTop:10,
                    }}
                  />

   </View>


                  
             







                <DrawerItemList {...props} />
             





              





              </View>
              </ScrollView>
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
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <MaterialIcons name="home" size={30} color="black" />
              </View>
            )
          }}
          component={MyStack}
        />

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
              <FontAwesome name="industry" size={30} color="black" />
              </View>
            )
          }}
          component={RestaurantCategoriesHomeScreen}
        />


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
              <MaterialIcons name="book" size={30} color="black" />
              </View>
            )
          }}
          component={RetailsCategoriesHomeScreen}
        />


  <Drawer.Screen
          name="Calender"
          options={{
            drawerLabel: "Calender",
            title: "Calender",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <MaterialIcons name="home" size={30} color="black" />
              </View>
            )
          }}
          component={Slider}
        />






      
      </Drawer.Navigator>
    </NavigationContainer>
    
    

    );
}
export default MyDrawer;




const styles = StyleSheet.create({
    menuicon: { 

       // color:'black', 
        


    },

     });