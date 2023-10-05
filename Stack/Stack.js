import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
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

import RestaurantCategoriesHomeScreen from '../Restaurant/RestaurantCategoriesHomeScreen';
import RestaurantCustomersHomeScreen from '../RestaurantCustomers/RestaurantCustomersHomeScreen';

import RestaurantInventoryHomeScreen from '../RestaurantInventory/RestaurantInventoryHomeScreen';
import RestaurantInventoryFoodHomeScreen from '../RestaurantInventory/RestaurantInventoryFoodHomeScreen';
import RestaurantInventoryDrinksHomeScreen from '../RestaurantInventory/RestaurantInventoryDrinksHomeScreen';


import RestaurantReportsHomeScreen from '../RestaurantReports/RestaurantReportsHomeScreen'
import RestaurantFoodReportsHomeScreen from '../RestaurantReports/RestaurantFoodReportsHomeScreen';
import RestaurantDrinksReportsHomeScreen from '../RestaurantReports/RestaurantDrinksReportsHomeScreen';



import RestaurantNewSaleHomeScreen from '../RestaurantNewSale/RestaurantNewSaleHomeScreen'



import RestaurantNewSaleFoodHomeScreen from '../RestaurantNewSale/RestaurantNewSaleFoodHomeScreen';
import RestaurantNewSaleDrinksHomeScreen from '../RestaurantNewSale/RestaurantNewSaleDrinksHomeScreen';


import RestaurantInventorySoftDrinks from '../RestaurantInventory/RestaurantInventorySoftDrinks';
import RestaurantInventoryBeer from '../RestaurantInventory/RestaurantInventoryBeer';
import RestaurantInventoryPizza from '../RestaurantInventory/RestaurantInventoryPizza';
import RestaurantInventoryOtherFood from '../RestaurantInventory/RestaurantInventoryOtherFood';

import RestaurantNewSaleBeer from '../RestaurantNewSale/RestaurantNewSaleBeer';
import RestaurantNewSaleSoftDrinks from '../RestaurantNewSale/RestaurantNewSaleSoftDrinks';
import RestaurantNewSalePizza from '../RestaurantNewSale/RestaurantNewSalePizza';
import RestaurantNewSaleOtherFood from '../RestaurantNewSale/RestaurantNewSaleOtherFood';


import RestaurantFoodProducts from '../ViewProductsNewSale/RestaurantFoodProducts';
import RestaurantDrinksProducts from '../ViewProductsNewSale/RestaurantDrinksProducts';



import InventoryRestaurantFoodProducts from '../ViewProductsInventory/InventoryRestaurantFoodProducts';
import InventoryRestaurantDrinksProducts from '../ViewProductsInventory/InventoryRestaurantDrinksProducts';

import ViewRestaurantFoodOrders from '../ViewOrders/ViewRestaurantFoodOrders';
import ViewRestaurantDrinksOrders from '../ViewOrders/ViewRestaurantDrinksOrders';


import FoodRestaurantWaitersHomeScreen from '../WaitersScreen/FoodRestaurantWaitersHomeScreen';
import DrinksRestaurantWaitersHomeScreen from '../WaitersScreen/DrinksRestaurantWaitersHomeScreen';


import RetailsCategoriesHomeScreen from '../Retails/RetailsCategoriesHomeScreen';
import RetailsCustomersHomeScreen from '../RetailsCustomers/RetailsCustomersHomeScreen';

import RetailsInventoryHomeScreen from '../RetailsInventory/RetailsInventoryHomeScreen';


import RetailsInventoryFoodHomeScreen from '../RetailsInventory/RetailsInventoryFoodHomeScreen';
import RetailsInventoryDrinksHomeScreen from '../RetailsInventory/RetailsInventoryDrinksHomeScreen';

import RetailsReportsHomeScreen from '../RetailsReports/RetailsReportsHomeScreen'
import RetailsFoodReportsHomeScreen from '../RetailsReports/RetailsFoodReportsHomeScreen';
import RetailsDrinksReportsHomeScreen from '../RetailsReports/RetailsDrinksReportsHomeScreen';


import RetailsNewSaleHomeScreen from '../RetailsNewSale/RetailsNewSaleHomeScreen'



import RetailsNewSaleFoodHomeScreen from '../RetailsNewSale/RetailsNewSaleFoodHomeScreen';
import RetailsNewSaleDrinksHomeScreen from '../RetailsNewSale/RetailsNewSaleDrinksHomeScreen';




import RetailsInventorySoftDrinks from '../RetailsInventory/RetailsInventorySoftDrinks';
import RetailsInventoryBeer from '../RetailsInventory/RetailsInventoryBeer';
import RetailsInventoryPizza from '../RetailsInventory/RetailsInventoryPizza';
import RetailsInventoryOtherFood from '../RetailsInventory/RetailsInventoryOtherFood';


import RetailsNewSaleBeer from '../RetailsNewSale/RetailsNewSaleBeer';
import RetailsNewSaleSoftDrinks from '../RetailsNewSale/RetailsNewSaleSoftDrinks';
import RetailsNewSalePizza from '../RetailsNewSale/RetailsNewSalePizza';
import RetailsNewSaleOtherFood from '../RetailsNewSale/RetailsNewSaleOtherFood';







import RetailsFoodProducts from '../ViewProductsNewSale/RetailsFoodProducts';
import RetailsDrinksProducts from '../ViewProductsNewSale/RetailsDrinksProducts';


import InventoryRetailsFoodProducts from '../ViewProductsInventory/InventoryRetailsFoodProducts';
import InventoryRetailsDrinksProducts from '../ViewProductsInventory/InventoryRetailsDrinksProducts';


import ViewRetailsFoodOrders from '../ViewOrders/ViewRetailsFoodOrders';
import ViewRetailsDrinksOrders from '../ViewOrders/ViewRetailsDrinksOrders';


import FoodRetailsWaitersHomeScreen from '../WaitersScreen/FoodRetailsWaitersHomeScreen';
import DrinksRetailsWaitersHomeScreen from '../WaitersScreen/DrinksRetailsWaitersHomeScreen';
import ShareScreen from '../Screens/ShareScreen';
import UsersScreen from '../Screens/UsersScreen';
import MyDrawer from '../Drawer/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

function MyStack({ naigation }) {
      return (
            //kama unatumia drawer navigator na stack navigator haina haja ya kus
            //sorround hii stack.navigator na NavigationContainer ila km unatumia
            //stack navigation peke yake basi tumia NavigationContainer

            <NavigationContainer>
                  <Stack.Navigator
                        //initialRouteName="Home Stack"
                        screenOptions={{
                              headerShown: false,
                              headerStyle: {
                                    backgroundColor: "green",
                                    //height:100,

                              },
                              headerTintColor: "white",
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
                              component={MyDrawer}
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
                              name="Restaurant Inventory"
                              component={RestaurantInventoryHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Restaurant Reports"
                              component={RestaurantReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Restaurant Food Reports"
                              component={RestaurantFoodReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Restaurant Drinks Reports"
                              component={RestaurantDrinksReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Restaurant Inventory Food"
                              component={RestaurantInventoryFoodHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Restaurant Inventory Drinks"
                              component={RestaurantInventoryDrinksHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />




                        <Stack.Screen
                              name="Restaurant Inventory Soft Drinks"
                              component={RestaurantInventorySoftDrinks}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />



                        <Stack.Screen
                              name="Restaurant Inventory Beers"
                              component={RestaurantInventoryBeer}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Restaurant Inventory Pizza"
                              component={RestaurantInventoryPizza}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Restaurant Inventory Other Food"
                              component={RestaurantInventoryOtherFood}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />









                        <Stack.Screen
                              name="Restaurant NewSale"
                              component={RestaurantNewSaleHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Restaurant NewSale Food"
                              component={RestaurantNewSaleFoodHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Restaurant NewSale Drinks"
                              component={RestaurantNewSaleDrinksHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />





                        <Stack.Screen
                              name="Restaurant NewSale Beers"
                              component={RestaurantNewSaleBeer}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />




                        <Stack.Screen
                              name="Restaurant NewSale Pizza"
                              component={RestaurantNewSalePizza}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />





                        <Stack.Screen
                              name="Restaurant NewSale Soft Drinks"
                              component={RestaurantNewSaleSoftDrinks}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />




                        <Stack.Screen
                              name="Restaurant NewSale Other Food"
                              component={RestaurantNewSaleOtherFood}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />












                        <Stack.Screen
                              name="Restaurant Inventory Food Products"
                              component={InventoryRestaurantFoodProducts}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Restaurant Inventory Drinks Products"
                              component={InventoryRestaurantDrinksProducts}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />









                        <Stack.Screen
                              name="Restaurant Food Products"
                              component={RestaurantFoodProducts}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Restaurant Drinks Products"
                              component={RestaurantDrinksProducts}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />





                        <Stack.Screen
                              name="View Restaurant Food Orders"
                              component={ViewRestaurantFoodOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="View Restaurant Drinks Orders"
                              component={ViewRestaurantDrinksOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />











                        <Stack.Screen
                              name="Food Restaurant Waiters"
                              component={FoodRestaurantWaitersHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Drinks Restaurant Waiters"
                              component={DrinksRestaurantWaitersHomeScreen}
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

                        <Stack.Screen
                              name="Retails Inventory"
                              component={RetailsInventoryHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />
                        <Stack.Screen
                              name="Retails Reports"
                              component={RetailsReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Retails Food Reports"
                              component={RetailsFoodReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Retails Drinks Reports"
                              component={RetailsDrinksReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Retails Inventory Food"
                              component={RetailsInventoryFoodHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Retails Inventory Drinks"
                              component={RetailsInventoryDrinksHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />





                        <Stack.Screen
                              name="Retails Inventory Soft Drinks"
                              component={RetailsInventorySoftDrinks}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />



                        <Stack.Screen
                              name="Retails Inventory Beers"
                              component={RetailsInventoryBeer}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Retails Inventory Pizza"
                              component={RetailsInventoryPizza}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Retails Inventory Other Food"
                              component={RetailsInventoryOtherFood}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />














                        <Stack.Screen
                              name="Retails NewSale"
                              component={RetailsNewSaleHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Retails NewSale Food"
                              component={RetailsNewSaleFoodHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Retails NewSale Drinks"
                              component={RetailsNewSaleDrinksHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />













                        <Stack.Screen
                              name="Retails NewSale Beers"
                              component={RetailsNewSaleBeer}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />




                        <Stack.Screen
                              name="Retails NewSale Pizza"
                              component={RetailsNewSalePizza}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />





                        <Stack.Screen
                              name="Retails NewSale Soft Drinks"
                              component={RetailsNewSaleSoftDrinks}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />




                        <Stack.Screen
                              name="Retails NewSale Other Food"
                              component={RetailsNewSaleOtherFood}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />






                        <Stack.Screen
                              name="Retails Inventory Food Products"
                              component={InventoryRetailsFoodProducts}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Retails Inventory Drinks Products"
                              component={InventoryRetailsDrinksProducts}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />







                        <Stack.Screen
                              name="Retails Food Products"
                              component={RetailsFoodProducts}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Retails Drinks Products"
                              component={RetailsDrinksProducts}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />




                        <Stack.Screen
                              name="View Retails Food Orders"
                              component={ViewRetailsFoodOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="View Retails Drinks Orders"
                              component={ViewRetailsDrinksOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Food Retails Waiters"
                              component={FoodRetailsWaitersHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Drinks Retails Waiters"
                              component={DrinksRetailsWaitersHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Share Stack"
                              component={ShareScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Users Stack"
                              component={UsersScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                  </Stack.Navigator>
                  <StatusBar style='auto' />
            </NavigationContainer>

      );
}
export default MyStack;