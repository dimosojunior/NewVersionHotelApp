import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import MinorHeader from '../Headers/MinorHeader';
import {globalstyles,images} from '../Styles/globalstyles';
import HomeCard from '../Shared/HomeCard';
import {Picker} from '@react-native-picker/picker';

import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';

export default function Slider() {
  const [modalVisible, setModalVisible] = useState(false);

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const [openEndDatePicker, setOpenEndDatePicker] = useState(false);

  const today = new Date();

  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );

   const endDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );


  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");

  const [startedDate, setStartedDate] = useState("01/09/2023");
  const [endedDate, setEndedDate] = useState("12/10/2023");

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

   function handleChangeEndDate(propDate) {
    setEndedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const handleOnPressEndDate = () => {
    setOpenEndDatePicker(!openEndDatePicker);
  };


const AddReport =() =>{
  console.log("Report");
   setModalVisible(true);
}

  return (
    <SafeAreaView style={{ flex: 1 }}>

    <MinorHeader title="Reports" pressMe={AddReport} screenName="Home Stack" />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : ""}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
        }}
      >
        <View style={styles.DatePickerContainer}>
         
<HomeCard>
          <View style={{ width: "100%", paddingHorizontal: 22, marginTop: 14 }}>
            <View>
              <Text style={{ fontSize: 18 }}>Start Date</Text>
              <TouchableOpacity
                style={styles.inputBtn}
                onPress={handleOnPressStartDate}
              >
                <Text>{selectedStartDate}</Text>
              </TouchableOpacity>
            </View>


             <View style={styles.EndDateContainer}>
              <Text style={{ fontSize: 18 }}>End Date</Text>
              <TouchableOpacity
                style={styles.inputBtn}
                onPress={handleOnPressEndDate}
              >
                <Text>{selectedEndDate}</Text>
              </TouchableOpacity>
            </View>



            <TouchableOpacity
              onPress={() => console.log("Subimit data")}
              style={styles.submitBtn}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Submit</Text>
            </TouchableOpacity>
          </View>

</HomeCard>


          {/* Create modal for start date picker */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
          >


            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  mode="calendar"
                  minimumDate={startDate}
                  selected={startedDate}
                  onDateChanged={handleChangeStartDate}
                  onSelectedChange={(date) => setSelectedStartDate(date)}
                  options={{
                    backgroundColor: "#080516",
                    textHeaderColor: "red",
                    textDefaultColor: "#FFFFFF",
                    selectedTextColor: "#FFF",
                    mainColor: "red",
                    textSecondaryColor: "#FFFFFF",
                    borderColor: 'red',
                  }}
                />

                <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text style={{ color: "white" }}>Select</Text>
                </TouchableOpacity>
              </View>
            </View>




          </Modal>















          {/* Create modal for start date picker */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={openEndDatePicker}
          >


            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  mode="calendar"
                  minimumDate={endDate}
                  selected={endedDate}
                  onDateChanged={handleChangeEndDate}
                  onSelectedChange={(date) => setSelectedEndDate(date)}
                  options={{
                    backgroundColor: "#080516",
                    textHeaderColor: "red",
                    textDefaultColor: "#FFFFFF",
                    selectedTextColor: "#FFF",
                    mainColor: "red",
                    textSecondaryColor: "#FFFFFF",
                    borderColor: 'red',
                  }}
                />

                <TouchableOpacity onPress={handleOnPressEndDate}>
                  <Text style={{ color: "white" }}>Select</Text>
                </TouchableOpacity>
              </View>
            </View>




          </Modal>



























{/*MODAL FOR MAKING ORDER*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD NEW REPORT</Text>

            <View style={globalstyles.form}>

                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Title</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Title' />
                    </View>
                </View>

                   
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Date Created</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Date Created' />
                    </View>
                </View>


                 <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Added By</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Added By' />
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




        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  DatePickerContainer:{
    flex: 1, 
    alignItems: "center" ,
    

  },
  
 
  textSubHeader: {
    fontSize: 20,
    color: "#111",
  },
  inputBtn: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#222",
    height: 50,
    paddingLeft: 8,
    fontSize: 18,
    justifyContent: "center",
    marginTop: 14,
  },
  submitBtn: {
    backgroundColor: "green",
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 16,
    width:200,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#080516",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  EndDateContainer:{
    marginTop:15,
  }
});