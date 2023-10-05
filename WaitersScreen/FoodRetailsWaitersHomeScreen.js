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
import {EndPoint} from '../constantComponents/constants';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const FoodRetailsWaitersHomeScreen =({navigation }) => {


//const navigation = useNavigation();
   const [userToken, setUserToken] = useState('');
   const [userData, setUserData] = useState({});


// TO GET USER TOKEN


useFocusEffect(
    React.useCallback(() => {
      const updateUserToken = async () => {
        const token = await AsyncStorage.getItem('userToken');
        setUserToken(token || '');
      };

      updateUserToken();

      // Listen for the 'updateUserToken' event
      const unsubscribe = navigation.addListener('updateUserToken', updateUserToken);

      // Cleanup the listener when the component unmounts
      return unsubscribe;
    }, [navigation])
  );





  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');
      if (userDataJSON) {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);
        
        // console.log("USERDATA ARE");
        // console.log(userData);
      }
    } catch (error) {
      console.log(error);
    }
  };


 
 // const [bookedFood, setBookedFood] = useState([
 //  {
 //    RoomName:'Room 5',
 //    RoomClass:'class A',
 //    RoomFloor:'Floor 4',
 //    RoomImage:"",
 //    id:'1'
 //  },

 // {
 //    RoomName:'Room 10',
 //    RoomClass:'class B',
 //    RoomFloor:'Floor 1',
 //    RoomImage:"",
 //    id:'2'
 //  },

 //   {
 //    RoomName:'Room 4',
 //    RoomClass:'class C',
 //    RoomFloor:'Floor 8',
 //    RoomImage:"",
 //    id:'3'
 //  },
 
  
 //    ]);



  //const [isPending, setIsPending] = useState(false);

   //FOR APIS
const { datas:queryset,setDatas:setQueryset, isPending, error } = useFetch(EndPoint+'/PostData/PostRetailsWaiters/');

 
//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);
const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();



 //const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;




// Define a function to format the date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};


 

const AddBooked =() =>{
  console.log("Booked Room");
  setModalVisible(true);
}

const ClickToAddBookedRoom =() =>{
  setModalVisible(false);
  navigation.navigate('Inventory Food Food')
}


//kwa ajili ya kurefresh pages
  const [refresh, setRefresh] = useState(false);

  const pullMe =() => {
    setRefresh(true)

    setTimeout (() => {
      setRefresh(false)
    }, 10)
  }












  



//mwisho wa load more









const CartCard = ({item}) => {
  

    return (
      <View style={globalstyles.UnitcartCard}>

      <View style={globalstyles.UnitCartTitle}>
      {item.username && 
         <Text
         style={globalstyles.UnitItemName1} 
         >{item.username }</Text>}

        {/* <Text
         style={globalstyles.UnitItemName2} 
         >{formatDate(item.Updated)}</Text>
*/}         
     </View>
      
      <TouchableOpacity
      onPress={() => navigation.replace('Retails Food Reports', item)} 
      >
        <View 
        style={globalstyles.UnitCartActionButtonText}
        >
         
          <View style={globalstyles.UnitactionBtn}>
        <FontAwesome name="eye" size={20} color={COLORS.white} />
                      
          </View>
        
        </View>

</TouchableOpacity>


      </View>
    );



   




          // mabano ya chini ni kufunga render item
  };



    
      
 return (

  <>
    {!isPending ? (


    <View style={globalstyles.container}>
    







<MinorHeader title="Waiters" pressMe={AddBooked} screenName="Retails Reports"/>





{userData && userData.is_waiter === false ? (

<>



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
            
            placeholder="Search waiter"
          />
          </TouchableOpacity>
        </View>
       
      </View>












{queryset && queryset.length > 0 ? (


      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={queryset}
        renderItem={({item}) => <CartCard item={item} />}
        
      />



) :(

     <View style={globalstyles.NoProductContainerContainer}>
  <Text style={globalstyles.NoProductText}>No any waiter</Text>
</View>


  )} 













</>





):(

 



 <View style={globalstyles.UnitcartCard}>

      <View style={globalstyles.UnitCartTitle}>
      {userData.username && 
         <Text
         style={globalstyles.UnitItemName1} 
         >{userData.username }</Text>}

           
     </View>
       
       <TouchableOpacity
      onPress={() => navigation.replace('Retails Food Reports', userData.id)} 
      >
        <View 
        style={globalstyles.UnitCartActionButtonText}
        >
         
          <View style={globalstyles.UnitactionBtn}>
        <FontAwesome name="eye" size={20} color={COLORS.white} />
                      
          </View>
        
        </View>

</TouchableOpacity>



      </View>





 )}






















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
                        <Text style={{
                          color:'white'
                        }}>CLOSE</Text>
                    </Pressable>
                    <Pressable style={globalstyles.ButtonAdd}  onPress={ClickToAddBookedRoom} >
                        <Text style={{
                          color:'white'
                        }}>CLICK TO ADD</Text>
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






  
export default FoodRetailsWaitersHomeScreen;



const styles = StyleSheet.create({
 
});