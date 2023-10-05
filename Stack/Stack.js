import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MinorHeader from '../Headers/MinorHeader';
import HomeScreen from '../Screens/HomeScreen';
import SigninScreen from '../AccountScreens/SigninScreen';


import HotelInventoryHomeScreen from '../HotelInventory/HotelInventoryHomeScreen';
import HotelInventoryFoodHomeScreen from '../HotelInventory/HotelInventoryFoodHomeScreen';
import HotelCustomersHomeScreen from '../HotelCustomers/HotelCustomersHomeScreen';
import HotelInventoryDrinksHomeScreen from '../HotelInventory/HotelInventoryDrinksHomeScreen';
import HotelInventoryOtherInventoryHomeScreen from '../HotelInventory/HotelInventoryOtherInventoryHomeScreen';
import HotelInventoryRoomsHomeScreen from '../HotelInventory/HotelInventoryRoomsHomeScreen';
//import HotelBookedRoomsHomeScreen from '../HotelInventory/HotelBookedRoomsHomeScreen'
import HotelReportsHomeScreen from '../HotelReports/HotelReportsHomeScreen';
import HotelFoodReportsHomeScreen from '../HotelReports/HotelFoodReportsHomeScreen';
import HotelDrinksReportsHomeScreen from '../HotelReports/HotelDrinksReportsHomeScreen';
import HotelRoomsReportsHomeScreen from '../HotelReports/HotelRoomsReportsHomeScreen';





import HotelNewSaleHomeScreen from '../HotelNewSale/HotelNewSaleHomeScreen'


import HotelNewSaleOtherNewSaleHomeScreen from '../HotelNewSale/HotelNewSaleOtherNewSaleHomeScreen';
import HotelNewSaleFoodHomeScreen from '../HotelNewSale/HotelNewSaleFoodHomeScreen';
import HotelNewSaleDrinksHomeScreen from '../HotelNewSale/HotelNewSaleDrinksHomeScreen';
import HotelNewSaleRoomsHomeScreen from '../HotelNewSale/HotelNewSaleRoomsHomeScreen';



import HotelInventorySoftDrinks from '../HotelInventory/HotelInventorySoftDrinks';
import HotelInventoryBeer from '../HotelInventory/HotelInventoryBeer';
import HotelInventoryPizza from '../HotelInventory/HotelInventoryPizza';
import HotelInventoryOtherFood from '../HotelInventory/HotelInventoryOtherFood';
import InventoryRoomsClassA from '../HotelInventory/InventoryRoomsClassA';
import InventoryRoomsClassB from '../HotelInventory/InventoryRoomsClassB';
import InventoryRoomsClassC from '../HotelInventory/InventoryRoomsClassC';
import InventoryRoomsClassD from '../HotelInventory/InventoryRoomsClassD';
import InventoryRoomsClassE from '../HotelInventory/InventoryRoomsClassE';


import HotelNewSaleBeer from '../HotelNewSale/HotelNewSaleBeer';
import HotelNewSaleSoftDrinks from '../HotelNewSale/HotelNewSaleSoftDrinks';
import HotelNewSalePizza from '../HotelNewSale/HotelNewSalePizza';
import HotelNewSaleOtherFood from '../HotelNewSale/HotelNewSaleOtherFood';

import NewSaleRoomsClassA from '../HotelNewSale/NewSaleRoomsClassA';
import NewSaleRoomsClassB from '../HotelNewSale/NewSaleRoomsClassB';
import NewSaleRoomsClassC from '../HotelNewSale/NewSaleRoomsClassC';
import NewSaleRoomsClassD from '../HotelNewSale/NewSaleRoomsClassD';
import NewSaleRoomsClassE from '../HotelNewSale/NewSaleRoomsClassE';


import HotelClassABookedRooms from '../BookedRooms/HotelClassABookedRooms';
import HotelClassBBookedRooms from '../BookedRooms/HotelClassBBookedRooms';
import HotelClassCBookedRooms from '../BookedRooms/HotelClassCBookedRooms';
import HotelClassDBookedRooms from '../BookedRooms/HotelClassDBookedRooms';
import HotelClassEBookedRooms from '../BookedRooms/HotelClassEBookedRooms';



import ViewBusinessUnitScreen from '../Screens/ViewBusinessUnitScreen';

import DisplayingOrderedItems from '../HotelNewSale/DisplayingOrderedItems';
import PreLoaderScreen from '../Screens/PreLoaderScreen';
import {NavigationContainer} from '@react-navigation/native';




import HotelFoodProducts from '../ViewProductsNewSale/HotelFoodProducts';
import HotelDrinksProducts from '../ViewProductsNewSale/HotelDrinksProducts';


import InventoryHotelFoodProducts from '../ViewProductsInventory/InventoryHotelFoodProducts';
import InventoryHotelDrinksProducts from '../ViewProductsInventory/InventoryHotelDrinksProducts';
import InventoryHotelRooms from '../ViewProductsInventory/InventoryHotelRooms';


import HotelRooms from '../ViewProductsNewSale/HotelRooms';
import ViewHotelBookedRooms from '../ViewProductsInventory/ViewHotelBookedRooms';
import HotelViewUnBookedRoomsHomeScreen from '../ViewProductsInventory/HotelViewUnBookedRoomsHomeScreen';
import HotelViewBookedRoomsHomeScreen from '../ViewProductsInventory/HotelViewBookedRoomsHomeScreen';


import ViewHotelFoodOrders from '../ViewOrders/ViewHotelFoodOrders';
import ViewHotelDrinksOrders from '../ViewOrders/ViewHotelDrinksOrders';
import ViewHotelRoomsOrders from '../ViewOrders/ViewHotelRoomsOrders';

//-----------------GUEST AND WALKING CUSTOMERS--------------


//HIZI NI CATEGORIES
import HotelRoomsGuestCustomersHomeScreen from '../HotelNewSale/HotelRoomsGuestCustomersHomeScreen';
import HotelRoomsWalkingCustomersHomeScreen from '../HotelNewSale/HotelRoomsWalkingCustomersHomeScreen';

import HotelFoodGuestCustomersHomeScreen from '../HotelNewSale/HotelFoodGuestCustomersHomeScreen';
import HotelFoodWalkingCustomersHomeScreen from '../HotelNewSale/HotelFoodWalkingCustomersHomeScreen';

import HotelDrinksGuestCustomersHomeScreen from '../HotelNewSale/HotelDrinksGuestCustomersHomeScreen';
import HotelDrinksWalkingCustomersHomeScreen from '../HotelNewSale/HotelDrinksWalkingCustomersHomeScreen';



//HIZI NI PRODUCTS ZENYEWE
import AllHotelWalkingRooms from '../ViewProductsNewSale/AllHotelWalkingRooms';
import AllHotelGuestRooms from '../ViewProductsNewSale/AllHotelGuestRooms';

import AllHotelWalkingFood from '../ViewProductsNewSale/AllHotelWalkingFood';
import AllHotelGuestFood from '../ViewProductsNewSale/AllHotelGuestFood';

import AllHotelWalkingDrinks from '../ViewProductsNewSale/AllHotelWalkingDrinks';
import AllHotelGuestDrinks from '../ViewProductsNewSale/AllHotelGuestDrinks';



//---------------WAITERS--------------
import FoodHotelWaitersHomeScreen from '../WaitersScreen/FoodHotelWaitersHomeScreen';
import DrinksHotelWaitersHomeScreen from '../WaitersScreen/DrinksHotelWaitersHomeScreen';
import RoomsHotelWaitersHomeScreen from '../WaitersScreen/RoomsHotelWaitersHomeScreen';

const Stack = createStackNavigator();

function MyStack( {naigation}){
  return (
  //kama unatumia drawer navigator na stack navigator haina haja ya kus
  //sorround hii stack.navigator na NavigationContainer ila km unatumia
  //stack navigation peke yake basi tumia NavigationContainer

// <NavigationContainer>
    <Stack.Navigator
    //initialRouteName="Home Stack"
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
      name="PreLoader Stack"
      component={PreLoaderScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



  <Stack.Screen
      name="Signin Stack"
      component={SigninScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


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
      name="Hotel Reports"
      component={HotelReportsHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Hotel Food Reports"
      component={HotelFoodReportsHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

    <Stack.Screen
      name="Hotel Drinks Reports"
      component={HotelDrinksReportsHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

      <Stack.Screen
      name="Hotel Rooms Reports"
      component={HotelRoomsReportsHomeScreen}
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
      name="Hotel Inventory Soft Drinks"
      component={HotelInventorySoftDrinks}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



 <Stack.Screen
      name="Hotel Inventory Beers"
      component={HotelInventoryBeer}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


 <Stack.Screen
      name="Hotel Inventory Pizza"
      component={HotelInventoryPizza}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

 <Stack.Screen
      name="Hotel Inventory Other Food"
      component={HotelInventoryOtherFood}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Inventory Rooms Class A"
      component={InventoryRoomsClassA}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


  <Stack.Screen
      name="Inventory Rooms Class B"
      component={InventoryRoomsClassB}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Inventory Rooms Class C"
      component={InventoryRoomsClassC}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


  <Stack.Screen
      name="Inventory Rooms Class D"
      component={InventoryRoomsClassD}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



      <Stack.Screen
      name="Inventory Rooms Class E"
      component={InventoryRoomsClassE}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




<Stack.Screen
      name="Hotel NewSale"
      component={HotelNewSaleHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hotel NewSale Food"
      component={HotelNewSaleFoodHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

       <Stack.Screen
      name="Hotel NewSale Drinks"
      component={HotelNewSaleDrinksHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

 <Stack.Screen
      name="Hotel NewSale Rooms"
      component={HotelNewSaleRoomsHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

 <Stack.Screen
      name="Hotel NewSale Others"
      component={HotelNewSaleOtherNewSaleHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



 <Stack.Screen
      name="Hotel NewSale Beers"
      component={HotelNewSaleBeer}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




   <Stack.Screen
      name="Hotel NewSale Pizza"
      component={HotelNewSalePizza}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




  
      <Stack.Screen
      name="Hotel NewSale Soft Drinks"
      component={HotelNewSaleSoftDrinks}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




 <Stack.Screen
      name="Hotel NewSale Other Food"
      component={HotelNewSaleOtherFood}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="NewSale Rooms Class A"
      component={NewSaleRoomsClassA}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="NewSale Rooms Class B"
      component={NewSaleRoomsClassB}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


  <Stack.Screen
      name="NewSale Rooms Class C"
      component={NewSaleRoomsClassC}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



  <Stack.Screen
      name="NewSale Rooms Class D"
      component={NewSaleRoomsClassD}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


  <Stack.Screen
      name="NewSale Rooms Class E"
      component={NewSaleRoomsClassE}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />








 <Stack.Screen
      name="Hotel Class A Booked Rooms"
      component={HotelClassABookedRooms}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


   <Stack.Screen
      name="Hotel Class B Booked Rooms"
      component={HotelClassBBookedRooms}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



     <Stack.Screen
      name="Hotel Class C Booked Rooms"
      component={HotelClassCBookedRooms}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



       <Stack.Screen
      name="Hotel Class D Booked Rooms"
      component={HotelClassDBookedRooms}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


       <Stack.Screen
      name="Hotel Class E Booked Rooms"
      component={HotelClassEBookedRooms}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



 <Stack.Screen
      name="Display Order"
      component={DisplayingOrderedItems}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />













 <Stack.Screen
      name="View Business Unit"
      component={ViewBusinessUnitScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />










 <Stack.Screen
      name="Hotel Inventory Food Products"
      component={InventoryHotelFoodProducts}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hotel Inventory Drinks Products"
      component={InventoryHotelDrinksProducts}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


  <Stack.Screen
      name="Inventory Hotel Rooms"
      component={InventoryHotelRooms}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



 <Stack.Screen
      name="View Hotel Booked Rooms"
      component={ViewHotelBookedRooms}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



 <Stack.Screen
      name="Hotel UnBookedRooms All Classes"
      component={HotelViewUnBookedRoomsHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


 <Stack.Screen
      name="Hotel BookedRooms All Classes"
      component={HotelViewBookedRoomsHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


    







{/*GUEST ANG WALKING CUSTOMERS*/}

<Stack.Screen
      name="Hotel Rooms Guest Customers"
      component={HotelRoomsGuestCustomersHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hotel Rooms Walking Customers"
      component={HotelRoomsWalkingCustomersHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hotel Food Walking Customers"
      component={HotelFoodWalkingCustomersHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



<Stack.Screen
      name="Hotel Food Guest Customers"
      component={HotelFoodGuestCustomersHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




<Stack.Screen
      name="Hotel Drinks Walking Customers"
      component={HotelDrinksWalkingCustomersHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



<Stack.Screen
      name="Hotel Drinks Guest Customers"
      component={HotelDrinksGuestCustomersHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




{/*----------PRODUCTS ZENYEWE------------------*/}

<Stack.Screen
      name="All Hotel Walking Rooms"
      component={AllHotelWalkingRooms}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="All Hotel Guest Rooms"
      component={AllHotelGuestRooms}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




<Stack.Screen
      name="All Hotel Walking Food"
      component={AllHotelWalkingFood}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="All Hotel Guest Food"
      component={AllHotelGuestFood}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



<Stack.Screen
      name="All Hotel Walking Drinks"
      component={AllHotelWalkingDrinks}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="All Hotel Guest Drinks"
      component={AllHotelGuestDrinks}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />















     <Stack.Screen
      name="Hotel Food Products"
      component={HotelFoodProducts}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


       <Stack.Screen
      name="Hotel Drinks Products"
      component={HotelDrinksProducts}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


         <Stack.Screen
      name="Hotel Rooms"
      component={HotelRooms}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />






          <Stack.Screen
      name="View Hotel Food Orders"
      component={ViewHotelFoodOrders}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

         <Stack.Screen
      name="View Hotel Drinks Orders"
      component={ViewHotelDrinksOrders}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


         <Stack.Screen
      name="View Hotel Rooms Orders"
      component={ViewHotelRoomsOrders}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




{/*-----------------ALL  WAITERS------------------*/}


      <Stack.Screen
      name="Food Hotel Waiters"
      component={FoodHotelWaitersHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

   <Stack.Screen
      name="Drinks Hotel Waiters"
      component={DrinksHotelWaitersHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



   <Stack.Screen
      name="Rooms Hotel Waiters"
      component={RoomsHotelWaitersHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />












      </Stack.Navigator>
      	// </NavigationContainer>

    );
  }
  export default MyStack;