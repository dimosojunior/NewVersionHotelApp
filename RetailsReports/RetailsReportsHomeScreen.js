import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,
  Pressable,Dimensions,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';
// import {globalStyles} from '../Styles/GlobalStyles';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
import LottieView from 'lottie-react-native';


import { useNavigation } from '@react-navigation/native';
import Header from '../Headers/header';
import {globalstyles} from '../Styles/globalstyles';

import MinorHeader from '../Headers/MinorHeader';
const {width,height} = Dimensions.get('window');

import {MotiView} from 'moti';
import Card2 from '../Shared/Card2';
import {Picker} from '@react-native-picker/picker';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Logo from '../Shared/Logo';
import {AppColor} from '../constantComponents/colors'

export default function RetailsReportsHomeScreen({navigation}) {

  

const [isPending, setIsPending] = useState(false);

const [modalVisible, setModalVisible] = useState(false);

   // const navigation = useNavigation();

 
  
 //FOR  APIS
//const { services:RetailsCategories, isPending, error } = useFetch(MyDomain+'/apis/RetailsCategories/');


 
  return (
    <View style={globalstyles.container}>
  
   
<MinorHeader  title="Reports"  screenName="Home Stack"/>






<ScrollView>


 














{/*mwanzo wa view iliyofunika items zote*/}
<View style={{
  flexDirection:'row',
  flex:1,

}} >





{/*mwanzo wa view iliyofunika items ya 1 na ya 2*/}
<View style={{
  
  flex:1,
  marginRight:0,
  marginLeft:10,
  
}}>
























  {/*-------------MWANZO WA ITEM 2---------*/}
      <TouchableOpacity
       activeOpacity={1} 
         onPress={() => navigation.navigate('Drinks Retails Waiters')}>

      <MotiView
        style={[{
          height:200,


        },globalstyles.HoteCategorieslistContainer]}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        >

      
        <View style={globalstyles.HoteCategoriesimageContainer}>
        
         
        <FontAwesome name="glass" size={70} color={AppColor} />

       
        </View>
     







        <Text style={globalstyles.HoteCategoriesnameText}>Drinks</Text>
     
          
       


      </MotiView>
       </TouchableOpacity>
  {/*-------------MWISHO WA ITEM 2---------*/}
    









</View>

{/*mwisho wa view iliyofunika items 1 na ya 2*/}













{/*mwazo wa view iliyofunika items ya 3 na 4*/}
<View style={{
  
  flex:1,
  marginRight:0,
  
}}>




    {/*-------------MWANZO WA ITEM 3---------*/}
      <TouchableOpacity 
       activeOpacity={1}
         onPress={() => navigation.navigate('Food Retails Waiters')}>

      <MotiView
        style={[{
          height:200,
        },globalstyles.HoteCategorieslistContainer]}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        >

      
        <View style={[{
          paddingBottom:0,

        },globalstyles.HoteCategoriesimageContainer]}>
        
        <FontAwesome name="cutlery" size={70} color={AppColor} />

       
        </View>
     







        <Text style={globalstyles.HoteCategoriesnameText}>Food</Text>
     
          
       


      </MotiView>
       </TouchableOpacity>
  {/*-------------MWISHO WA ITEM 3---------*/}























</View>

{/*mwisho wa view iliyofunika items ya 3 na ya 4*/}










</View>
{/*mwisho wa view iliyofunika items zote*/}





















{/*MODAL FOR MAKING ORDER*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD NEW SALE</Text>

            <View style={globalstyles.form}>

                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Product Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Product Name' />
                    </View>
                </View>

                   
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Product Price</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Product Price' />
                    </View>
                </View>


                 <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Product Quantity</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Product Quantity' />
                    </View>
                </View>





               

                


            </View>

            

          
            

            <View style={globalstyles.ButtonConatiner}>
                    <Pressable style={globalstyles.ButtonClose}  onPress={() => setModalVisible(false)} >
                        <Text>CLOSE</Text>
                    </Pressable>
                    <Pressable style={globalstyles.ButtonAdd}  onPress={() => setModalVisible(false)} >
                        <Text>ADD PRODUCT</Text>
                    </Pressable>
            </View>
          </View>
        </View>
      </Modal>















</ScrollView>





    </View>
  );
}

const styles = StyleSheet.create({
 





});