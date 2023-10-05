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
import LotterViewScreen from '../Screens/LotterViewScreen';

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
import {EndPoint} from '../constantComponents/constants';

// kama unatumia APIS toa hiyo projects prop


// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const RetailsInventoryDrinksHomeScreen =({navigation }) => {


  //const [isPending, setIsPending] = useState(false);

  
 
//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);

const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

const [modalVisibleAddProduct, setModalVisibleAddProduct] = useState(false);
  



    

const AddFood =() =>{
  console.log("Drinks");
   setModalVisibleAddProduct(true);
}

 const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;





 // const [inventory, setInventory] = useState([
 //  {
 //    CategoryName:'Soft Drinks',
 //    CategoryImage:require('../assets/room.png'),
 //    Store:60,
 //    id:'1'
 //  },

 //  {
 //    CategoryName:'Beers',
 //    CategoryImage:require('../assets/food.png'),
 //    Store:100,
 //    id:'2'
 //  },
 //  // {CategoryName:'Drinks',CategoryImage:require('../assets/drinks.png'),id:'6'},
 //  // {CategoryName:'Others',CategoryImage:require('../assets/otherinentory.png'), id:'5'},
 
 //    ]);


 //FOR APIS
const { datas:inventory,setDatas:setInventory, isPending, error } = useFetch(EndPoint+'/PostData/PostRetailsDrinksCategories/');




const [CategoryName, setCategoryName] = useState('');
    const move = (CategoryName) =>{
      setCategoryName(CategoryName);
      console.log(CategoryName)
      navigation.navigate('Retails Inventory ' +CategoryName);
    }









    
      
 


  return (
     <>
    {!isPending ? (

    <View style={globalstyles.AllListcontainer}>


<MinorHeader title="Drinks" pressMe={AddFood} screenName="Retails Inventory" />















{inventory && inventory.length > 0 ? (


      <FlatList
        data={inventory}
        renderItem={({item, index}) => {

        
          return (
           <>
            <TouchableOpacity 
             activeOpacity={1}
             onPress={() => navigation.navigate('Retails Inventory Drinks Products', item)}
            >
            <View style={globalstyles.itemView}>
            <View
            style={globalstyles.FoodNameView}

            >
                       <Text style={globalstyles.nameText}>{item.CategoryName}</Text>
                
             </View>
             
                
                 <View style={globalstyles.priceView}>
                <Text style={globalstyles.UnitText}>
                    {item.unit ? item.Unit : 'Chupa'} 
                  </Text>
                   </View>



                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    Qty  
                  </Text>

                  <Text style={globalstyles.priceText}>
                    {item.Store}
                  </Text>
                  
                </View>
            
           
              
              
            
             
            </View>
            </TouchableOpacity >
            </>

          );









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

            <View style={globalstyles.form}>
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Product Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Product Name' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Product Price</Text>
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
                        <Text  style={{
                          color:'white'
                        }}>CLOSE</Text>
                    </Pressable>
                    <Pressable style={globalstyles.ButtonAdd}  onPress={() => setModalVisibleAddProduct(false)} >
                        <Text  style={{
                          color:'white'
                        }}>ADD PRODUCT</Text>
                    </Pressable>
            </View>
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















  
export default RetailsInventoryDrinksHomeScreen;



const styles = StyleSheet.create({

});