import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MinorHeader from '../Headers/MinorHeader';



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


import {NavigationContainer} from '@react-navigation/native';

import RestaurantFoodProducts from '../ViewProductsNewSale/RestaurantFoodProducts';
import RestaurantDrinksProducts from '../ViewProductsNewSale/RestaurantDrinksProducts';



import InventoryRestaurantFoodProducts from '../ViewProductsInventory/InventoryRestaurantFoodProducts';
import InventoryRestaurantDrinksProducts from '../ViewProductsInventory/InventoryRestaurantDrinksProducts';

import ViewRestaurantFoodOrders from '../ViewOrders/ViewRestaurantFoodOrders';
import ViewRestaurantDrinksOrders from '../ViewOrders/ViewRestaurantDrinksOrders';


import FoodRestaurantWaitersHomeScreen from '../WaitersScreen/FoodRestaurantWaitersHomeScreen';
import DrinksRestaurantWaitersHomeScreen from '../WaitersScreen/DrinksRestaurantWaitersHomeScreen';

const Stack = createStackNavigator();

function RestaurantStack( {naigation}){
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



      </Stack.Navigator>
      	// </NavigationContainer>

    );
  }
  export default RestaurantStack;