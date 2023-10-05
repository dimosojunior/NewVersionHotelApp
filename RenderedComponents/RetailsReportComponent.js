import React, {useEffect, useState} from "react";
import {View,StyleSheet,Modal,TouchableOpacity,Pressable,Image,Text,SafeAreaView, FlatList} from "react-native";
import {globalstyles} from '../Styles/globalstyles';
import axios from "axios";
import { getFormatedDate } from "react-native-modern-datepicker";
import DatePicker from "react-native-modern-datepicker";



const RetailsReportComponent = () => {
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

    const [articles,setArticles] = useState([


    {
    ItemName:'Food',
    TotalAmount:4500000,
    Sales:25000,
    ItemImage:require('../assets/i2.png'),
    Purchases:200000,
    Tax:10000,
    Rent:50000,
    Profit:100000,
    id:'1'

  },

  {
    ItemName:'Drinks',
    TotalAmount:4500000,
    Sales:35000,
    ItemImage:require('../assets/i2.png'),
    Purchases:200000,
    Tax:10000,
    Rent:50000,
    Profit:100000,
    id:'2'

  },


  {
    ItemName:'Rooms',
    TotalAmount:4500000,
    Sales:25000,
    ItemImage:require('../assets/i2.png'),
    Purchases:200000,
    Tax:10000,
    Rent:50000,
    Profit:100000,
    id:'3'

  },

])
    // const getNews = () => {
    //     axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=c1ef3317ba2e48c8aeab23ad33adb6e9',{
    //         params:{
    //             category: "technology",
    //         }
    //     })
    //         .then( (response) =>{
    //             // handle success
    //             setArticles(response.data.articles);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .then(function () {
    //             // always executed
    //         });
    // }

    // useEffect(() => {
    //     getNews();
    // },[]);




const Article = (props) => {

    // const goToSource = () =>{
    //     WebBrowser.openBrowserAsync(props.url);
    // }

    return(
        <Pressable style={globalstyles.ReportScreencontainer} >
            {/* image */}
            <Text style={globalstyles.ReportScreenreportCardHeader}>{props.ItemName}</Text>

            <View 
            style={globalstyles.ReportScreenItemcontainer}
            >

        {/*    MWANZO */}


           <View >
     <Text style={globalstyles.ReportScreentitle}>Sales:</Text>

            <Text style={globalstyles.ReportScreendescription} numberOfLines={3}>
                Purchases
            </Text>


            <Text style={globalstyles.ReportScreentitle}>Tax:</Text>

            <Text style={globalstyles.ReportScreendescription} numberOfLines={3}>
                Rent 
                </Text>


            <Text style={globalstyles.ReportScreendescription} numberOfLines={3}>
                Total Amount 
                </Text>


            </View>
 {/*    MWISHO */}



   {/*    MWANZO */}


           <View >
     <Text style={globalstyles.ReportScreentitle}>{props.Sales}/=:</Text>

      
            <Text style={globalstyles.ReportScreendescription} numberOfLines={3}>
                {props.Purchases}/=
            </Text>

             <Text style={globalstyles.ReportScreentitle}>{props.Tax}/=</Text>

      
            <Text style={globalstyles.ReportScreendescription} numberOfLines={3}>
                {props.Rent}/=
            </Text>

            <Text style={globalstyles.ReportScreendescription} numberOfLines={3}>
                {props.TotalAmount} /=
                </Text>


            </View>
 {/*    MWISHO */}


       

     



            </View>
        </Pressable>
    )
}












    return(
        <SafeAreaView style={{
            //flex:4,
        }}>





            <FlatList
                data={articles}
                renderItem = {({item}) =>
                    <Article
                        ItemImage = {item.ItemImage}
                        ItemName = {item.ItemName}
                        TotalAmount = {item.TotalAmount}
                        Sales = {item.Sales}
                        Purchases = {item.Purchases}
                        Tax = {item.Tax}
                        Rent={item.Rent}
                    />}
                keyExtractor = {(item) => item.id}
            />






<TouchableOpacity
onPress={() => setModalVisible(true)}
style={globalstyles.ReportScreenFilterReportContainer}
 >
    <Text 
    style={globalstyles.ReportScreenFilterReportContainerText}

   >Filter Report</Text>

</TouchableOpacity>


















{/*MODAL FOR MAKING ORDER*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View 
        style={globalstyles.ReportScreenFilterformContainer}
       >
          <View style={globalstyles.ModalView}>
            <Text 
            style={globalstyles.ReportScreenFilterText}
            >FILTER REPORT</Text>

            <View style={globalstyles.form}>

               

                   
            

          <View 
          style={globalstyles.ReportCalenderContainer}
          
          >
            <View>
              <Text
              style={globalstyles.ReportCalenderStartDateText} 
              >Start Date</Text>
              <TouchableOpacity
                style={globalstyles.ReportScreeninputBtn}
                onPress={handleOnPressStartDate}
              >
                <Text>{selectedStartDate}</Text>
              </TouchableOpacity>
            </View>


             <View style={globalstyles.ReportScreenEndDateContainer}>
              <Text 
               style={globalstyles.ReportCalenderEndDateText} 
              >End Date</Text>
              <TouchableOpacity
                style={globalstyles.ReportScreeninputBtn}
                onPress={handleOnPressEndDate}
              >
                <Text>{selectedEndDate}</Text>
              </TouchableOpacity>
            </View>



           
          </View>










               

                


            </View>

            

          
            

            <View style={[{
                      justifyContent:'space-between',
                      alignItems:'center',
                      flexDirection:'row',
                      marginVertical:15,
                      margin:6,
                    },globalstyles.ButtonConatinere]}>
                    
                    <Pressable style={[globalstyles.ButtonAdd,{
                        width:'45%',
                        backgroundColor:'red'
                    }]}  onPress={() => setModalVisible(false)} >
                        <Text style={{
                            color:'white'
                        }}>CANCEL</Text>
                    </Pressable>


                     <TouchableOpacity
              onPress={() => console.log("Subimit data")}
              style={[globalstyles.ButtonAdd, {
                width:'45%'
              }]}
            >
              <Text style={{  color: "white" }}>SEARCH</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>










 {/* Create modal for start date picker */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
          >


            <View style={globalstyles.ReportScreencenteredView}>
              <View style={globalstyles.ReportScreenmodalView}>
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










          {/* Create modal for END date picker */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={openEndDatePicker}
          >


            <View style={globalstyles.ReportScreencenteredView}>
              <View style={globalstyles.ReportScreenmodalView}>
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






        </SafeAreaView>
    )
}

export default RetailsReportComponent;

const styles = StyleSheet.create({
     


})