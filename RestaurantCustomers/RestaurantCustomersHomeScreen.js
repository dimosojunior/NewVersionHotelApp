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
  Text,
  View,
  Image,
  Animated,
  Modal,
  Pressable

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

// kama unatumia APIS toa hiyo projects prop


// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const RestaurantCustomersHomeScreen =({navigation }) => {


  const [isPending, setIsPending] = useState(false);

  
 
//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);

const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();


 const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;





 const [customers, setCustomers] = useState([
  {
    FirstName:'Dimoso',
    SecondName:'El',
    LastName:'Junior',
    CustomerLocation:'Mbeya, Iyunga',
    CustomerImage:require('../assets/me.jpg'),
    id:'1'
  },

 {
    FirstName:'Sharifa',
    SecondName:'Saidi',
    LastName:'Abduli',
    CustomerLocation:'Tanga',
    CustomerImage:require('../assets/icon1.jpeg'),
    id:'2'
  },


 {
    FirstName:'Cornel',
    SecondName:'Mtavangu',
    LastName:'Issa',
    CustomerLocation:'Mbeya, Nzwovye',
    CustomerImage:require('../assets/icon2.png'),
    id:'3'
  },

   {
    FirstName:'Isack',
    SecondName:'Greyson',
    LastName:'Kasamka',
    CustomerLocation:'Mbeya,Cocacola',
    CustomerImage:require('../assets/icon1.jpeg'),
    id:'4'
  },


{
    FirstName:'Dimoso',
    SecondName:'El',
    LastName:'Junior',
    CustomerLocation:'Mbeya, Iyunga',
    CustomerImage:require('../assets/me.jpg'),
    id:'5'
  },




 
  
    ]);



 //FOR APIS
//const { services:ccustomers, isPending, error } = useFetch(MyDomain+'/apis/RestaurantCustomers/');


const AddCustomer =() =>{
  console.log("Add Restaurant Customer");
  setModalVisible(true);
}




 





    
      
 


  return (
    <View style={globalstyles.AllListcontainer}>


<MinorHeader title="Customers" pressMe={AddCustomer} screenName="Restaurants Category" />










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
            
            placeholder="Search customer"
          />
          </TouchableOpacity>
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}













      <FlatList
        data={customers}
        renderItem={({item, index}) => {

           // mwanzo kwa ajili ya search
    if (input === ""){

          return (

            <View style={globalstyles.itemView}>
            <View style={globalstyles.ImageListContainer}>
              <Image
                //source={{uri: item.data.imageUrl}}
                source = {item.CustomerImage}
                style={globalstyles.itemImage}
              /></View>
              <View style={globalstyles.nameView}>
                <Text style={globalstyles.nameText}>{item.FirstName} {item.SecondName}</Text>
                <Text style={globalstyles.LastNameText}>{item.LastName}</Text>

               
            

              </View>
              
              
             
            </View>
          );



// hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.FirstName.toLowerCase().includes(input.toLowerCase())){





  return (

            <View style={globalstyles.itemView}>
            <View style={globalstyles.ImageListContainer}>
              <Image
                //source={{uri: item.data.imageUrl}}
                source = {item.CustomerImage}
                style={globalstyles.itemImage}
              /></View>
              <View style={globalstyles.nameView}>
                <Text style={globalstyles.nameText}>{item.FirstName} {item.SecondName}</Text>
                <Text style={globalstyles.LastNameText}>{item.LastName}</Text>

               
            

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
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD CUSTOMER</Text>

            <View style={globalstyles.form}>

                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>First Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='First Name' />
                    </View>
                </View>

                   
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Second Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Second Name' />
                    </View>
                </View>


                 <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Last Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Last Name' />
                    </View>
                </View>





                <View  style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Customer Location</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='plus-circle'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Location' />
                    </View>
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















  
export default RestaurantCustomersHomeScreen;



const styles = StyleSheet.create({

 
});