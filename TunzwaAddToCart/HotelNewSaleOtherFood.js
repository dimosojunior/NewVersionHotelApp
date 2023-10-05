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
  Modal
} from 'react-native';
import {globalstyles,images} from '../Styles/globalstyles';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MinorHeader from '../Headers/MinorHeader';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
import {Picker} from '@react-native-picker/picker';
import FoodCart from '../CartComponents/FoodCart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {EndPoint} from '../constantComponents/constants'
// kama unatumia APIS toa hiyo projects prop


// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const HotelNewSaleOtherFood =({navigation }) => {


  //const [isPending, setIsPending] = useState(false);

  
 
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






 // const [drinks, setDrinks] = useState([

 //  {
 //    product_name:'Wali',
 //    Unit:'sahani 1',
 //    product_second_name:'Maharage',
 //    FoodImage:require('../assets/i2.png'),
 //    price:15000,
 //    id:'1'
 //  },

 // {
 //    product_name:'Ugali',
 //    Unit:'sahani 1',
 //    product_second_name:'Maharage',
 //    FoodImage:require('../assets/i3.png'),
 //    price:1000,
 //    id:'2'
 //  },

 //   {
 //    product_name:'Wali',
 //    Unit:'sahani 1',
 //    product_second_name:'Nyama',
 //    FoodImage:require('../assets/i4.png'),
 //    price:4000,
 //    id:'3'
 //  },
 
  
 //     ]);



 //FOR APIS
const { datas:drinks, isPending, error } = useFetch(EndPoint+'/Hotel/HotelFoodProducts/');




// const [input, setInput] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    checkLoggedIn();
    fetchCartItems();
  }, []);

  const checkLoggedIn = async () => {
    const token = await AsyncStorage.getItem('userToken');
    setUserToken(token);
  };

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        'https://hotelappapisv1.pythonanywhere.com/Hotel/Cart/',
        {
          headers: {
            Authorization: `Token ${userToken}`,
          },
        }
      );
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addCartItem = async () => {
    if (!selectedProduct || !quantity) {
      Alert.alert('Error', 'Please select a product and enter a quantity');
      return;
    }

    try {
      const response = await axios.post(
        'https://hotelappapisv1.pythonanywhere.com/Hotel/Cart/',
        {
          product: selectedProduct.id,
          quantity: parseInt(quantity),
        },
        {
          headers: {
            Authorization: `Token ${userToken}`,
          },
        }
      );

      // Update the local cart items list
      setCartItems([...cartItems, response.data]);

      // Close the modal and reset the selected product and quantity
      setModalVisible(false);
      setSelectedProduct(null);
      setQuantity('');
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };




const removeCartItem = async (itemId) => {
    try {
      await axios.delete(
        `https://hotelappapisv1.pythonanywhere.com/Hotel/Cart/?id=${itemId}`,
        {
          headers: {
            Authorization: `Token ${userToken}`,
          },
        }
      );

      // Update the local cart items list by removing the deleted item
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCartItems);
      console.log('Item removed successfully');
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

      
 


  return (
    <View style={globalstyles.AllListcontainer}>


<MinorHeader title="Food" pressMe={AddFood} screenName="Hotel NewSale Food" />






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
            
            placeholder="Search food"
          />
          </TouchableOpacity>
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}





<FoodCart />



<View style={globalstyles.CartListHeaderContainer}>
    <Text style={globalstyles.CartListHeader}>Food</Text>
    </View>




      <FlatList
        data={drinks}
        renderItem={({item, index}) => {

          // mwanzo kwa ajili ya search
    if (input === ""){

          return (
            <View style={globalstyles.itemView}>
            <View
            style={globalstyles.FoodNameView}

            >
              <Text style={globalstyles.nameText}>{item.product_name}</Text>
              <Text style={globalstyles.descText}>{item.product_second_name}</Text>

               
             </View>
                              

                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    {item.id} 
                  </Text>

                  <Text style={globalstyles.priceText}>
                    {item.price}/=
                  </Text>
                  
                </View>
            

              
              
              <View 
              style={globalstyles.IconContainer}
              >

                <TouchableOpacity
                 onPress={() => {
                setSelectedProduct(item);
                setModalVisible(true);
              }}

               >
                <MaterialCommunityIcons 
    name="gesture-tap-button"
     size={30} 
     color="green"
    style={globalstyles.ClickableIcon}

     />
                  
                </TouchableOpacity>




                
             </View>   
             
            </View>
          );



// hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.product_name.toLowerCase().includes(input.toLowerCase())){






          return (
            <View style={globalstyles.itemView}>
            <View
            style={globalstyles.FoodNameView}

            >
               <Text style={globalstyles.nameText}>{item.product_name}</Text>
               <Text style={globalstyles.descText}>{item.product_second_name}</Text>

               
             </View>
                              

                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    {item.id} 
                  </Text>

                  <Text style={globalstyles.priceText}>
                    {item.price}/=
                  </Text>
                  
                </View>
            

              
              
              <View 
              style={globalstyles.IconContainer}
              >

                <TouchableOpacity
                onPress={() => setModalVisible(true)}
               >
                <MaterialCommunityIcons 
    name="gesture-tap-button"
     size={30} 
     color="green"
    style={globalstyles.ClickableIcon}

     />
                  
                </TouchableOpacity>
             </View>   
             
            </View>
          );








// hili bano la chini ni la if ya pili mwisho
  }


          // mabano ya chini ni kufunga render item
        }}
      />
















{/*MODAL FOR MAKING ORDER*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ORDER PRODUCT</Text>

            <View style={globalstyles.form}>
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Quantity</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder=' Quantity' 
                        value={quantity}
                  onChangeText={text => setQuantity(text)}
                        />
                    </View>
                </View>

               

                <View  style={{ marginTop:20 }}>
                   
             
                </View>


            </View>

          
            

            <View style={globalstyles.ButtonConatiner}>
                    <Pressable style={globalstyles.ButtonClose}  onPress={() => setModalVisible(false)} >
                        <Text style={{
                          color:'white',
                        }}>CLOSE</Text>
                    </Pressable>
                    <Pressable 
                    style={globalstyles.ButtonAdd}  
                    onPress={addCartItem} >
                        <Text style={{
                          color:'white',
                        }}>CONFIRM</Text>
                    </Pressable>
            </View>
          </View>
        </View>
      </Modal>






















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

            <View style={globalstyles.form}>
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}>Product Quantity</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Product Quantity' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}>Product Price</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='plus-circle'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Product Price' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                   
             {/*EMPTY NOW*/}
                </View>


            </View>

            

           
            

            <View style={globalstyles.ButtonConatiner}>
                    <Pressable style={globalstyles.ButtonClose}  onPress={() => setModalVisibleAddProduct(false)} >
                        <Text style={{
                          color:'white',
                        }}>CLOSE</Text>
                    </Pressable>
                    <Pressable style={globalstyles.ButtonAdd}  onPress={() => setModalVisibleAddProduct(false)} >
                        <Text style={{
                          color:'white',
                        }}>ADD PRODUCT</Text>
                    </Pressable>
            </View>
          </View>
        </View>
      </Modal>










<FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.product_name}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <TouchableOpacity onPress={() => removeCartItem(item.id)}>
              <Text>Remove from Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />







    </View>
  );
};















  
export default HotelNewSaleOtherFood;



const styles = StyleSheet.create({

});