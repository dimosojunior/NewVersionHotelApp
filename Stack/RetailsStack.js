import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import MinorHeader from '../Headers/MinorHeader';



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






import { NavigationContainer } from '@react-navigation/native';

import RetailsFoodProducts from '../ViewProductsNewSale/RetailsFoodProducts';
import RetailsDrinksProducts from '../ViewProductsNewSale/RetailsDrinksProducts';


import InventoryRetailsFoodProducts from '../ViewProductsInventory/InventoryRetailsFoodProducts';
import InventoryRetailsDrinksProducts from '../ViewProductsInventory/InventoryRetailsDrinksProducts';


import ViewRetailsFoodOrders from '../ViewOrders/ViewRetailsFoodOrders';
import ViewRetailsDrinksOrders from '../ViewOrders/ViewRetailsDrinksOrders';


import FoodRetailsWaitersHomeScreen from '../WaitersScreen/FoodRetailsWaitersHomeScreen';
import DrinksRetailsWaitersHomeScreen from '../WaitersScreen/DrinksRetailsWaitersHomeScreen';


const Stack = createStackNavigator();

function RetailsStack({ naigation }) {
     return (
          //kama unatumia drawer navigator na stack navigator haina haja ya kus
          //sorround hii stack.navigator na NavigationContainer ila km unatumia
          //stack navigation peke yake basi tumia NavigationContainer

          // <NavigationContainer>
          <Stack.Navigator
               initialRouteName="Home Stack"
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



          </Stack.Navigator>
          // </NavigationContainer>

     );
}
export default RetailsStack;