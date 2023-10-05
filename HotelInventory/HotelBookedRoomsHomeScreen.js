import 'react-native-gesture-handler';
import 'react-native-reanimated';

import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Modal,Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
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
 import ProductUnitComponent from '../CartComponents/ProductUnitComponent';
import {Picker} from '@react-native-picker/picker';
import COLORS from '../constantComponents/colors';
import {PrimaryButton} from '../constantComponents/Button';
// kama unatumia APIS toa hiyo projects prop


// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const HotelBookedRoomsHomeScreen =({navigation }) => {


 
 const [bookedRooms, setBookedRooms] = useState([
  {
    RoomName:'Room 5',
    RoomClass:'class A',
    RoomFloor:'Floor 4',
    RoomImage:"",
    id:'1'
  },

 {
    RoomName:'Room 10',
    RoomClass:'class B',
    RoomFloor:'Floor 1',
    RoomImage:"",
    id:'2'
  },

   {
    RoomName:'Room 4',
    RoomClass:'class C',
    RoomFloor:'Floor 8',
    RoomImage:"",
    id:'3'
  },
 
  
    ]);



  const [isPending, setIsPending] = useState(false);

  
 
//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);
const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();



 const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;






 

const AddBooked =() =>{
  console.log("Booked Room");
  setModalVisible(true);
}

const ClickToAddBookedRoom =() =>{
  setModalVisible(false);
  navigation.navigate('Hotel Inventory Rooms')
}


//kwa ajili ya kurefresh pages
  const [refresh, setRefresh] = useState(false);

  const pullMe =() => {
    setRefresh(true)

    setTimeout (() => {
      setRefresh(false)
    }, 10)
  }





const CartCard = ({item}) => {
  if (input === ""){

    return (
      <View style={globalstyles.UnitcartCard}>

      <View style={globalstyles.UnitCartTitle}>
         <Text
         style={globalstyles.UnitItemName1} 
         >{item.RoomName }</Text>

         <Text
         style={globalstyles.UnitItemName1} 
         >{item.RoomClass }</Text>
         
     </View>
       
        <View
        style={globalstyles.UnitCartContainerCOntainer2}

         >
         <Text 
          style={globalstyles.UnitCartPriceText} 
          >Floor</Text>
       
          <Text 
          style={globalstyles.UnitCartPriceTextUnit} 
          >{item.RoomFloor}</Text>
        </View>
        <View 
        style={globalstyles.UnitCartActionButtonText}
        >
         
          <View style={globalstyles.UnitactionBtn}>
        <FontAwesome name="check-square-o" size={20} color={COLORS.white} />
                      
          </View>
        
        </View>
      </View>
    );



    // hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.RoomName.toLowerCase().includes(input.toLowerCase())){



 return (
      <View style={globalstyles.UnitcartCard}>

      <View style={globalstyles.UnitCartTitle}>
         <Text
         style={globalstyles.UnitItemName1} 
         >{item.RoomName }</Text>

         <Text
         style={globalstyles.UnitItemName1} 
         >{item.RoomClass }</Text>
         
     </View>
       
        <View
        style={globalstyles.UnitCartContainerCOntainer2}

         >
         <Text 
          style={globalstyles.UnitCartPriceText} 
          >Floor</Text>
       
          <Text 
          style={globalstyles.UnitCartPriceTextUnit} 
          >{item.RoomFloor}</Text>
        </View>
        <View 
        style={globalstyles.UnitCartActionButtonText}
        >
        
          <View style={globalstyles.UnitactionBtn}>
        <FontAwesome name="check-square-o" size={20} color={COLORS.white} />
                      
          </View>
          
        </View>
      </View>
    );






// hili bano la chini ni la if ya pili mwisho
  }


          // mabano ya chini ni kufunga render item
  };



    
      
 return (
    <View style={globalstyles.container}>
    







<MinorHeader title="Booked Rooms" pressMe={AddBooked} screenName="Hotel NewSale Rooms"/>











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











      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={bookedRooms}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
          
          </View>
        )}
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
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD BOOKED ROOM</Text>

            <View style={globalstyles.form}>
               

                

               

            </View>

            

            
            

            <View style={globalstyles.ButtonConatiner}>
                    <Pressable style={globalstyles.ButtonClose}  onPress={() => setModalVisible(false)} >
                        <Text>CLOSE</Text>
                    </Pressable>
                    <Pressable style={globalstyles.ButtonAdd}  onPress={ClickToAddBookedRoom} >
                        <Text>CLICK TO ADD</Text>
                    </Pressable>
            </View>
          </View>
        </View>
      </Modal>









</View>
  );
};






  
export default HotelBookedRoomsHomeScreen;



const styles = StyleSheet.create({
 
});