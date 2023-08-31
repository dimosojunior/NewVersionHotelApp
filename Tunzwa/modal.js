import React, { useState } from 'react';
import { View, Text, Modal, Button ,StyleSheet, Pressable, TextInput} from 'react-native';
import {FontAwesome} from "@expo/vector-icons"
import {Picker} from '@react-native-picker/picker';


const ModalComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable style={Styles.open} onPress={() => setModalVisible(true)} >
          <Text style={{ fontSize:20 }}>Open</Text>
          </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={Styles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD NEW PRODUCT</Text>

            <View style={Styles.form}>
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Product Name</Text>
                    < View style={Styles.input}>
                        <FontAwesome style={Styles.icon} name='pencil'/>
                        <TextInput style={Styles.textInput}  placeholder='Product Name' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Unit Price</Text>
                    < View style={Styles.input}>
                        <FontAwesome style={Styles.icon} name='plus-circle'/>
                        <TextInput style={Styles.textInput}  placeholder='Unit Price' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                   
              < View style={Styles.inputTax}>
                        <Text style={Styles.TaxType}>
                            Tax Type
                        </Text>

                 <View style={Styles.picker}>

                        
                            <Picker
                            style={Styles.pickerInput}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item label="Select Tax" value="Kasamka" />
                             <Picker.Item label="Kasamka" value="Kasamka" />
                             <Picker.Item label="Dimoso" value="Dimoso" />
                             <Picker.Item label="Neema" value="Neema" />
                                
                            </Picker>

                     </View>
                      
                        
                        {/* <InputModeOptions placeholder="Select Tax"></InputModeOptions> */}
                        {/* <TextInput style={Styles.textInput}  placeholder='Unit Price' /> */}
                    </View>
                </View>


            </View>

            <View style={{ marginTop:20 }}>
                <Text style={{ fontSize:20, fontWeight:"bold" }}>Below are Optional Details</Text>
            </View>

            <View style={Styles.ButtonConatiner}>
                    <Pressable style={Styles.ButtonScan}  onPress={() => setModalVisible(false)} >
                        <Text>SCAN</Text>
                    </Pressable>
                    <Pressable style={Styles.ButtonBarcode}  onPress={() => setModalVisible(false)} >
                        <Text>...or Enter Barcode</Text>
                    </Pressable>
            </View>
            

            <View style={Styles.ButtonConatiner}>
                    <Pressable style={Styles.ButtonClose}  onPress={() => setModalVisible(false)} >
                        <Text>CLOSE</Text>
                    </Pressable>
                    <Pressable style={Styles.ButtonAdd}  onPress={() => setModalVisible(false)} >
                        <Text>ADD PRODUCT</Text>
                    </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;

const Styles = StyleSheet.create({
   ModalView:{
       padding:20,
       width:340,
       backgroundColor:"white",
       borderRadius:20,
   },
   ButtonClose:{

       alignItems:'center',
       justifyContent:"center",
       width:140,
       height:50,
       backgroundColor:"red",
       borderRadius:5,

   },
   ButtonAdd:{

    alignItems:'center',
    justifyContent:"center",
    width:140,
    height:50,
    backgroundColor:"green",
    borderRadius:5,

},
ButtonScan:{

    alignItems:'center',
    justifyContent:"center",
    width:140,
    height:50,
    backgroundColor:"gray",
    borderRadius:5,

},
ButtonBarcode:{

 alignItems:'center',
 justifyContent:"center",
 width:140,
 height:50,
//  backgroundColor:"green",
 borderRadius:5,
 borderWidth:1,

},ButtonConatiner:{
   flexDirection:'row',
   marginTop:20,
   justifyContent:"space-between"
},
   input:{
      flexDirection:"row",
      width:300,
      height:50,
      borderColor:"black",
      borderWidth:1,
      alignItems:"center",
      padding:10,
      borderRadius:10,
      marginTop:10
   },
inputTax:{
    flexDirection:"row",
    width:300,
    height:50,
    backgroundColor:'#746C70',
    // borderColor:"black",
    // borderWidth:1,
    alignItems:"center",
    padding:10,
    borderRadius:1,
    marginTop:10,
    justifyContent:'space-between'
 },
 picker:{
    width:170,
    height:40,
    backgroundColor:'white',
    borderRadius:5,
 },
 pickerInput:{
    top:-7
 },
   
   textInput:{
       fontSize:20
   },
   form:{
       marginTop:30,
       alignItems:'center'
   },
   icon:{
       fontSize:29,
       marginRight:10
       
   },
   TaxType:{
       fontSize:20,
       color:"black",
       fontWeight:'400'
   },
   open:{
       width:200,
       height:50,
       backgroundColor:'yellow',
       borderRadius:10,
       alignItems:'center',
       justifyContent:'center',
       elevation:5,

   }

})
