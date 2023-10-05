import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { EndPoint } from '../constantComponents/constants';
import {globalstyles,images} from '../Styles/globalstyles';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductAddScreen = () => {
  const [product, setProduct] = useState({
    product_name: '',
    product_second_name: '',
    price: '',
    ProductUnit: '',
    ProductQuantity: '',
  });

  const handleSubmit = () => {
    if (
      product.product_name.trim() === '' ||
      product.product_second_name.trim() === '' ||
      product.price.trim() === '' ||
      product.ProductUnit.trim() === '' ||
      product.ProductQuantity.trim() === ''
    ) {
      // Validation: Check if any field is empty
      Alert.alert('Error', 'All fields are required');
    } else if (
      isNaN(Number(product.price)) ||
      isNaN(Number(product.ProductQuantity))
    ) {
      // Validation: Check if price and ProductQuantity are not integers
      Alert.alert('Error', 'Price and Product Quantity must be valid numbers');
    } else {
      // Validation passed, make the API request
      fetch(EndPoint + '/Hotel/HotelFoodProducts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle success response, maybe navigate to a success screen
          console.log('Product added:', data);
          Alert.alert('Success', 'Product added successfully');
          // Clear the form after successful submission
          setProduct({
            product_name: '',
            product_second_name: '',
            price: '',
            ProductUnit: '',
            ProductQuantity: '',
          });
        })
        .catch((error) => {
          // Handle error, maybe show an error message to the user
          console.error('Error adding product:', error);
          Alert.alert('Error', 'Failed to add product');
        });
    }
  };

  return (
    <View>




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
                    <Text style={{ fontSize:16, marginLeft:3 }}> Product  Unit</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Product Unit' 
                        onChangeText={(text) =>
          setProduct({ ...product, ProductUnit: text })
        }
        value={product.ProductUnit}
       
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


          

      {/*<Button title="Submit" onPress={handleSubmit} />*/}
    </View>
  );
};

export default ProductAddScreen;
