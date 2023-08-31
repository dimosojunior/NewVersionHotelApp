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
 import RoomCart from '../CartComponents/RoomCart';

// kama unatumia APIS toa hiyo projects prop


// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const HotelInventoryRoomsHomeScreen =({navigation }) => {


  const [isPending, setIsPending] = useState(false);

  
 
//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);

const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();



const AddRoom =() =>{
  console.log("Room");
   setModalVisible(true);
}

 const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;






 const [rooms, setRooms] = useState([
  {
    RoomName:'Room 1',
    RoomClass:'class A',
    RoomFloor:'Floor 4',
    RoomImage:"",
    id:'1'
  },

 {
    RoomName:'Room 2',
    RoomClass:'class B',
    RoomFloor:'Floor 1',
    RoomImage:"",
    id:'2'
  },

   {
    RoomName:'Room 3',
    RoomClass:'class C',
    RoomFloor:'Floor 8',
    RoomImage:"",
    id:'3'
  },
 
  
    ]);



 //FOR APIS
//const { services:rooms, isPending, error } = useFetch(MyDomain+'/apis/Rooms/');















    
      
 


  return (
    <View style={globalstyles.AllListcontainer}>


<MinorHeader title="Rooms" pressMe={AddRoom} screenName="Hotel Inventory" />






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







<RoomCart />




  <View style={globalstyles.CartListHeaderContainer}>
    <Text style={globalstyles.CartListHeader}>Rooms</Text>
    </View>


      <FlatList
        data={rooms}
        renderItem={({item, index}) => {

          // mwanzo kwa ajili ya search
    if (input === ""){

          return (
            <View style={globalstyles.itemView}>

            <View
            style={globalstyles.FoodNameView}

            >
                       <Text style={globalstyles.nameText}>{item.RoomName}</Text>
                <Text style={globalstyles.descText}>{item.RoomClass}</Text>
             </View>
              <View style={globalstyles.nameView}>
                

                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    Floor Number  
                  </Text>

                  <Text style={globalstyles.priceText}>
                    {item.RoomFloor}
                  </Text>
                  
                </View>
            

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
    style={globalstyles.icon}

     />
                  
                </TouchableOpacity>
             </View>   
             
            </View>
          );



// hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.RoomName.toLowerCase().includes(input.toLowerCase())){






  return (
            <View style={globalstyles.itemView}>

            <View
            style={globalstyles.FoodNameView}

            >
                       <Text style={globalstyles.nameText}>{item.RoomName}</Text>
                <Text style={globalstyles.descText}>{item.RoomClass}</Text>
             </View>
              <View style={globalstyles.nameView}>
                

                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    Floor Number  
                  </Text>

                  <Text style={globalstyles.priceText}>
                    {item.RoomFloor}
                  </Text>
                  
                </View>
            

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
    style={globalstyles.icon}

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
            <Text style={{ marginLeft:90,fontSize:15 }}>BOOK ROOM</Text>

            <View style={globalstyles.form}>
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Room Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Room Name' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Room Class</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='plus-circle'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Room Class' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                   
              
                </View>


            </View>

            

          
            

            <View style={globalstyles.ButtonConatiner}>
                    <Pressable style={globalstyles.ButtonClose}  onPress={() => setModalVisible(false)} >
                        <Text>CLOSE</Text>
                    </Pressable>
                    <Pressable style={globalstyles.ButtonAdd}  onPress={() => setModalVisible(false)} >
                        <Text>CONFIRM</Text>
                    </Pressable>
            </View>
          </View>
        </View>
      </Modal>





































    </View>
  );
};















  
export default HotelInventoryRoomsHomeScreen;



const styles = StyleSheet.create({


});