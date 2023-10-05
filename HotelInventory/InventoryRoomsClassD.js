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
  Modal ,
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
 import RoomCart from '../CartComponents/RoomCart';
 import {EndPoint} from '../constantComponents/constants';

// kama unatumia APIS toa hiyo projects prop


// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const InventoryRoomsClassD =({navigation }) => {


  //const [isPending, setIsPending] = useState(false);

  
 
//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);

const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();



const [modalVisibleAddProduct, setModalVisibleAddProduct] = useState(false);
  


const AddRoom =() =>{
  console.log("Food");
   setModalVisibleAddProduct(true);
}

 const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;






 // const [rooms, setRooms] = useState([
 //  {
 //    RoomName:'Room 1',
 //    RoomClass:'class A',
 //    RoomFloor:'Floor 4',
 //    RoomImage:"",
 //    id:'1'
 //  },

 // {
 //    RoomName:'Room 2',
 //    RoomClass:'class B',
 //    RoomFloor:'Floor 1',
 //    RoomImage:"",
 //    id:'2'
 //  },

 //   {
 //    RoomName:'Room 3',
 //    RoomClass:'class C',
 //    RoomFloor:'Floor 8',
 //    RoomImage:"",
 //    id:'3'
 //  },
 
  
 //    ]);



//FOR APIS
const { datas:myItems,setDatas:setMyItems, isPending, error } = useFetch(EndPoint+'/PostData/PostHotelRoomsClassD/');



 // State variable to store the RoomClasses data
  const [roomClasses, setRoomClasses] = useState([]);
  // State variable to store the selected RoomClass
  const [selectedRoomClass, setSelectedRoomClass] = useState(null);

  // Fetch RoomClasses data from your Django API when the component mounts
  useEffect(() => {
    fetch(`${EndPoint}/PostData/PostRoomsClasses`)
      .then((response) => response.json())
      .then((data) => {
        setRoomClasses(data);
        console.log("DATA FETCHED SUCCESSFULLY")
        // Set the default selectedRoomClass if needed
        //setSelectedRoomClass(data[0]); // For example, set the first RoomClass as default
      })
      .catch((error) => {
        console.error('Error fetching RoomClasses:', error);
      });
  }, []);







   const [product, setProduct] = useState({
    RoomName: '',
    RoomFloor: '',
    price: '',
    //RoomClass: '',
    //ProductQuantity: '',

  });
const handleSubmit = () => {
    if (
      product.RoomName.trim() === '' ||
      product.price.trim() === '' ||
      product.RoomFloor.trim() === '' ||
      !selectedRoomClass // Check if a RoomClass is selected
    ) {
      Alert.alert('Error', 'All fields are required');
    } else if (isNaN(Number(product.price))) {
      Alert.alert('Error', 'Price must be a valid number');
    } else {
      const formData = {
        ...product,
        RoomClass: selectedRoomClass.id, // Pass the RoomClass ID
      };

      fetch(`${EndPoint}/PostData/PostHotelRoomsClassD/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Room added:', data);
          Alert.alert('Success', 'Room added successfully');
          setModalVisibleAddProduct(false);
          setProduct({
            RoomName: '',
            RoomFloor: '',
            price: '',
          });
          setMyItems((prevmyItems) => [data, ...prevmyItems]);
        })
        .catch((error) => {
          console.error('Error adding Room:', error);
          Alert.alert('Error', 'Failed to add Room');
        });
    }
  };






    
      
 


  return (

 <>
    {!isPending ? (





    <View style={globalstyles.AllListcontainer}>


<AddMinorHeader title="Class D Rooms" pressMe={AddRoom} screenName="Hotel Inventory Rooms" />






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
            
            placeholder="Search room"
          />
          </TouchableOpacity>
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}







<TouchableOpacity 
         onPress={() => navigation.navigate('Hotel Class D Booked Rooms')}>
          <View style={globalstyles.BookedUnitactionBtn}>
            <Text style={{
              color:'white',
              fontWeight:'bold',


            }}>Class D Booked Rooms</Text> 

          </View>
          </TouchableOpacity>



  <View style={globalstyles.CartListHeaderContainer}>
    <Text style={globalstyles.CartListHeader}>Rooms</Text>
    </View>





{myItems && myItems.length > 0 ? (
      <FlatList
        data={myItems}
        renderItem={({item, index}) => {

          // mwanzo kwa ajili ya search
    if (input === ""){

        
          return (
            <View style={globalstyles.InventoryitemView}>
            <View
            style={globalstyles.InventoryFoodNameView}

            >
             <Text style={globalstyles.InventorynameText}>{item.RoomName}</Text>
              
                
             </View>
             
                

                <View style={globalstyles.InventorypriceView1}>

                <Text style={globalstyles.InventoryUnitText}>
                    Price  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.price}/=
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView2}>

                <Text style={globalstyles.InventoryUnitText}>
                    Floor Number  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.RoomFloor}
                  </Text>
                  
                </View>




               

              
              
            
             
            </View>
          );



// hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.RoomName.toLowerCase().includes(input.toLowerCase())){





       return (
            <View style={globalstyles.InventoryitemView}>
            <View
            style={globalstyles.InventoryFoodNameView}

            >
             <Text style={globalstyles.InventorynameText}>{item.RoomName}</Text>
              
                
             </View>
             
                

                <View style={globalstyles.InventorypriceView1}>

                <Text style={globalstyles.InventoryUnitText}>
                    Price  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.price}/=
                  </Text>
                  
                </View>




                <View style={globalstyles.InventorypriceView2}>

                <Text style={globalstyles.InventoryUnitText}>
                    Floor Number  
                  </Text>

                  <Text style={globalstyles.InventorypriceText}>
                    {item.RoomFloor}
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
  <Text style={globalstyles.NoProductText}>No any room added</Text>
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
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD ROOM</Text>
<ScrollView keyboardShouldPersistTaps="handled" >
            
           {/* ADD PRODUCT  Form*/}
           
            


{/*mwanzo wa form*/}
     <View style={globalstyles.form}>
               {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Room Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Room Name' 
                        onChangeText={(text) =>
          setProduct({ ...product, RoomName: text })
        }
        value={product.RoomName}
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}

               {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Room Floor</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Room Floor' 
                        onChangeText={(text) =>
          setProduct({ ...product, RoomFloor: text })
        }
        value={product.RoomFloor}
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}


                {/*mwanzo  wa field*/}
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Room  Price</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput 
                        style={globalstyles.textInput}  
                        placeholder='Room Price' 
                        onChangeText={(text) =>
          setProduct({ ...product, price: text })
        }
        value={product.price}
        keyboardType="numeric" // Set the keyboard type to numeric
                           />
                    </View>
                </View>
              {/*mwisho wa field*/}


                 


               



 <View style={{ marginTop: 20 }}>
        

        < View style={globalstyles.inputTax}>
            <Text style={globalstyles.TaxType}>
                Room Class
            </Text>

     <View style={globalstyles.picker}>

            
          <Picker
           style={globalstyles.pickerInput}
            selectedValue={selectedRoomClass}
            onValueChange={(itemValue) => setSelectedRoomClass(itemValue)}
          >

            {roomClasses.map((roomClass) => (
              <Picker.Item
                key={roomClass.id}
                label={roomClass.RoomClass}
                value={roomClass}
              />
            ))}
          </Picker>

         </View>
          
            
          
        
    </View>








      </View>
{/*mwisho wa view ya margin 20*/}


















               

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















  
export default InventoryRoomsClassD;



const styles = StyleSheet.create({


});