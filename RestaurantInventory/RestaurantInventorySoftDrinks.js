import 'react-native-gesture-handler';
import 'react-native-reanimated';

import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  Animated,
  Modal,
  ScrollView,
  Alert
} from 'react-native';
import {globalstyles,images} from '../Styles/globalstyles';
import { MaterialIcons } from '@expo/vector-icons';
import LotterViewScreen from '../Screens/LotterViewScreen';

import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AddMinorHeader from '../Headers/AddMinorHeader';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
import {Picker} from '@react-native-picker/picker';
import FoodCart from '../CartComponents/FoodCart';
import {EndPoint} from '../constantComponents/constants';
// kama unatumia APIS toa hiyo projects prop


// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const RestaurantInventorySoftDrinks =({navigation }) => {


  //const [isPending, setIsPending] = useState(false);

  //kwa ajili ya kurefresh pages
  const [refresh, setRefresh] = useState(false);

  const pullMe =() => {
    setRefresh(true)

    setTimeout (() => {
      setRefresh(false)
    }, 10)
  }

 
//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);

const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

const [modalVisibleAddProduct, setModalVisibleAddProduct] = useState(false);
  


const AddFood =() =>{
  console.log("Food");
   setModalVisibleAddProduct(true);
}

 const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;






 // const [myItems, setmyItems] = useState([
 //  {
 //    product_name:'Wali',
 //    Unit:'chupa 1 1',
 //    FoodName2:'Maharage',
 //    FoodImage:require('../assets/i2.png'),
 //    price:15000,
 //    id:'1'
 //  },

 // {
 //    product_name:'Ugali',
 //    Unit:'chupa 1 1',
 //    FoodName2:'Maharage',
 //    FoodImage:require('../assets/i3.png'),
 //    price:1000,
 //    id:'2'
 //  },

 //   {
 //    product_name:'Wali',
 //    Unit:'chupa 1 1',
 //    FoodName2:'Nyama',
 //    FoodImage:require('../assets/i4.png'),
 //    price:4000,
 //    id:'3'
 //  },
 
  
 //    ]);



 //FOR APIS
const { datas:myItems,setDatas:setMyItems, isPending, error } = useFetch(EndPoint+'/PostData/PostRestaurantSoftDrinksProducts/');







   const [product, setProduct] = useState({
    product_name: '',
    product_second_name: '',
    price: '',
    productCategory: 'Soft Drinks',
    ProductQuantity: '',

  });

 const handleSubmit = () => {
  if (
    product.product_name.trim() === '' ||
    // product.product_second_name.trim() === '' ||
    product.price.trim() === '' ||
    product.ProductQuantity.trim() === ''
  ) {
    // Validation: Check if any field is empty
    Alert.alert('Error', 'All fields are required except product second name');
  } else if (
    isNaN(Number(product.price)) ||
    isNaN(Number(product.ProductQuantity))
  ) {
    // Validation: Check if price and ProductQuantity are not integers
    Alert.alert('Error', 'Price and Product Quantity must be valid numbers');
  } else {
    // Validation passed, make the API request
    const formData = {
      ...product,
      productCategory: 'Soft Drinks', // Set the value of ProductCategory here
    };

    fetch(EndPoint + '/PostData/PostRestaurantSoftDrinksProducts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success response, maybe navigate to a success screen
        console.log('Product added:', data);
        Alert.alert('Success', 'Product added successfully');
        setModalVisibleAddProduct(false);
        // Clear the form after successful submission
        setProduct({
          product_name: '',
          product_second_name: '',
          price: '',
          ProductQuantity: '',
        });

         // Add the newly added product to the productList state
    setMyItems((prevmyItems) => [ data, ...prevmyItems]);

      })
      .catch((error) => {
        // Handle error, maybe show an error message to the user
        console.error('Error adding product:', error);
        Alert.alert('Error', 'Failed to add product');
      });
  }
};






    
      
 


  return (


 <>
    {!isPending ? (



    <View style={globalstyles.InventoryAllListcontainer}>


<AddMinorHeader title="Soft Drinks" pressMe={AddFood} screenName="Restaurant Inventory Drinks" />






{/*MWANZO WA VIEW YA SEARCH*/}

      <View 
      style={globalstyles.SearchContainer}
      >
        
        <View
          
            
       style={globalstyles.InputContainer}     
            

          >

          <TouchableOpacity>
          {/*<FontAwesome size={20} name="search" />*/}
          
          <TextInput
          style={globalstyles.TextInput}
          value={input} onChangeText ={(text) => setInput(text)}
            
            placeholder="Search drink"
          />
          </TouchableOpacity>
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}









<View style={globalstyles.CartListHeaderContainer}>
    <Text style={globalstyles.CartListHeader}>Soft Drinks</Text>
    </View>


{myItems && myItems.length > 0 ? (

      <FlatList
      refreshControl={
        <RefreshControl
        refreshing={refresh}
        onRefresh={() => pullMe()}
        />
       }
      showsVerticalScrollIndicator={false}
        data={myItems}
        renderItem={({item, index}) => {

          // mwanzo kwa ajili ya search
    if (input === ""){

          return (
            <View style={globalstyles.InventoryitemView}>
            <View
            style={globalstyles.InventoryFoodNameView}

            >
             <Text style={globalstyles.InventorynameText}>{item.product_name}</Text>
                {item.product_second_name && 
              <Text style={globalstyles.InventorydescText}>{item.product_second_name}</Text>
               }
                
             </View>
             
                

                <View style={globalstyles.InventorypriceView1}>

                <Text style={globalstyles.InventoryUnitText}>
                    chupa 1  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.price}/=
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView2}>

                <Text style={globalstyles.InventoryUnitText}>
                    Present  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.ProductQuantity}
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView3}>

                <Text style={globalstyles.InventoryUnitText}>
                    Initially  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.InitialProductQuantity ? item.InitialProductQuantity : item.ProductQuantity}
                  </Text>
                  
                </View>
            

              
              
            
             
            </View>
          );



// hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.product_name.toLowerCase().includes(input.toLowerCase())){





   return (
            <View style={globalstyles.InventoryitemView}>
            <View
            style={globalstyles.InventoryFoodNameView}

            >
             <Text style={globalstyles.InventorynameText}>{item.product_name}</Text>
                {item.product_second_name && 
              <Text style={globalstyles.InventorydescText}>{item.product_second_name}</Text>
               }
                
             </View>
             
                

                <View style={globalstyles.InventorypriceView1}>

                <Text style={globalstyles.InventoryUnitText}>
                    chupa 1  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.price}/=
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView2}>

                <Text style={globalstyles.InventoryUnitText}>
                    Present  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.ProductQuantity}
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView3}>

                <Text style={globalstyles.InventoryUnitText}>
                    Initially  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.InitialProductQuantity ? item.InitialProductQuantity : item.ProductQuantity}
                  </Text>
                  
                </View>
            

              
              
            
             
            </View>
          );







// hili bano la chini ni la if ya pili mwisho
  }


          // mabano ya chini ni kufunga render item
        }}
      />



) :(

     <View style={globalstyles.NoProductContainerContainer}>
  <Text style={globalstyles.NoProductText}>No Data</Text>
</View>


  )} 































{/*-----------------MODAL FOR ADD PRODUCT---------------*/}



      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleAddProduct}
        onRequestClose={() => setModalVisibleAddProduct(false)}
      >

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD PRODUCT</Text>
<ScrollView keyboardShouldPersistTaps="handled">
            
           {/* ADD PRODUCT  Form*/}
           
            


{/*mwanzo wa form*/}
     <View style={globalstyles.form}>
               {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Product Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Product Name' 
                        onChangeText={(text) =>
          setProduct({ ...product, product_name: text })
        }
        value={product.product_name}
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}

               {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Product Second Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Product Second Name' 
                        onChangeText={(text) =>
          setProduct({ ...product, product_second_name: text })
        }
        value={product.product_second_name}
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}


                {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Product  Price</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Product Price' 
                        onChangeText={(text) =>
          setProduct({ ...product, price: text })
        }
        value={product.price}
        keyboardType="numeric" // Set the keyboard type to numeric
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}


                 


                {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Product  Quantity</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Product Quantity' 
                        onChangeText={(text) =>
          setProduct({ ...product, ProductQuantity: text })
        }
        value={product.ProductQuantity}
        keyboardType="numeric" // Set the keyboard type to numeric
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}



               

                <View  style={{ marginTop:20 }}>
                   
             
                </View>


            </View>
{/*mwisho wa form*/}
          
  <View style={globalstyles.ButtonConatiner}>
                    <TouchableOpacity style={globalstyles.ButtonClose}  
                    onPress={() => setModalVisibleAddProduct(false)} >
                        <Text style={{
                          color:'white',
                        }}>CLOSE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={globalstyles.ButtonAdd}  
                    onPress={handleSubmit} >
                        <Text style={{
                          color:'white',
                        }}>CONFIRM</Text>
                    </TouchableOpacity>
            </View>

{/*MWISHO WA ADD PRODUCT FORM*/}
</ScrollView>
          </View>


        </View>

      </Modal>





















    </View>


      ):(

<LotterViewScreen />

)}

    </>
  
  );
};















  
export default RestaurantInventorySoftDrinks;



const styles = StyleSheet.create({

});