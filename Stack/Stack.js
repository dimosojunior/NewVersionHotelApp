import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MinorHeader from '../Headers/MinorHeader';
import HomeScreen from '../Screens/HomeScreen';


import HotelInventoryHomeScreen from '../HotelInventory/HotelInventoryHomeScreen';
import HotelInventoryFoodHomeScreen from '../HotelInventory/HotelInventoryFoodHomeScreen';
import HotelCustomersHomeScreen from '../HotelCustomers/HotelCustomersHomeScreen';
import HotelInventoryDrinksHomeScreen from '../HotelInventory/HotelInventoryDrinksHomeScreen';
import HotelInventoryOtherInventoryHomeScreen from '../HotelInventory/HotelInventoryOtherInventoryHomeScreen';
import HotelInventoryRoomsHomeScreen from '../HotelInventory/HotelInventoryRoomsHomeScreen';
import HotelBookedRoomsHomeScreen from '../HotelInventory/HotelBookedRoomsHomeScreen'




import RestaurantCategoriesHomeScreen from '../Restaurant/RestaurantCategoriesHomeScreen';
import RestaurantCustomersHomeScreen from '../RestaurantCustomers/RestaurantCustomersHomeScreen';



import RetailsCategoriesHomeScreen from '../Retails/RetailsCategoriesHomeScreen';
import RetailsCustomersHomeScreen from '../RetailsCustomers/RetailsCustomersHomeScreen';




import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack( {naigation}){
  return (
  //kama unatumia drawer navigator na stack navigator haina haja ya kus
  //sorround hii stack.navigator na NavigationContainer ila km unatumia
  //stack navigation peke yake basi tumia NavigationContainer

// <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Home Stack"
      screenOptions={{
      	headerShown:false,
        headerStyle:{
          backgroundColor:"green",
           //height:100,

        },
        headerTintColor:"white",
        headerTitleStyle: {
              fontWeight: 'bold',
            },
      }}
      >



       <Stack.Screen
      name="Home Stack"
      component={HomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />
      


<Stack.Screen
      name="Hotel Inventory"
      component={HotelInventoryHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hotel Inventory Food"
      component={HotelInventoryFoodHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

       <Stack.Screen
      name="Hotel Inventory Drinks"
      component={HotelInventoryDrinksHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



 <Stack.Screen
      name="Hotel Customers"
      component={HotelCustomersHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

 <Stack.Screen
      name="Hotel Inventory Others"
      component={HotelInventoryOtherInventoryHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


  <Stack.Screen
      name="Hotel Inventory Rooms"
      component={HotelInventoryRoomsHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

       <Stack.Screen
      name="Hotel Booked Rooms"
      component={HotelBookedRoomsHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />















<Stack.Screen
      name="Restaurants Category"
      component={RestaurantCategoriesHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Restaurant Customers"
      component={RestaurantCustomersHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />















 <Stack.Screen
      name="Retails Category"
      component={RetailsCategoriesHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Retails Customers"
      component={RetailsCustomersHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />





      </Stack.Navigator>
      	// </NavigationContainer>

    );
  }
  export default MyStack;