import React, {useEffect, useState} from "react";
import {View,StyleSheet,RefreshControl,ScrollView, Modal,TouchableOpacity,Pressable,Image,Text,SafeAreaView, FlatList} from "react-native";
import {globalstyles} from '../Styles/globalstyles';
import axios from "axios";
import { getFormatedDate } from "react-native-modern-datepicker";
import DatePicker from "react-native-modern-datepicker";
import LotterViewScreen from '../Screens/LotterViewScreen';
import { useNavigation } from '@react-navigation/native';
import { EndPoint } from "../constantComponents/constants";

const HotelFoodReportsComponent = () => {

  const navigation = useNavigation();

const move =() =>{
  setModalVisible(false);
  navigation.navigate('Hotel Reports');
}



  const [modalVisible, setModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [orders, setOrders] = useState([]);
  const [mainTotalPrice, setMainTotalPrice] = useState(null);
  const [refresh, setRefresh] = useState(false);

const [isPending, setisPending] = useState(false);
const [isRange, setisRange] = useState(false);
  // Utility function to format the date as "YYYY-MM-DD"
  const formatDate = (dateString) => {
    if (!dateString) {
      return null;
    }
    const [year, month, day] = dateString.split("/");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (startDate && endDate) {
      handleFilter();
      //setisPending(true);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    // Make a GET request to fetch orders and main total price
    axios.get(EndPoint + '/Cart/HotelFoodOrderReport/')

      .then((response) => {
        const { orders, main_total_price } = response.data;
        setOrders(orders);
        setisPending(true);
         setisRange(false);
        setMainTotalPrice(main_total_price);
        
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setisPending(true);
      });
  }, []);

  const handleFilter = () => {
    // Convert the selected dates to the desired format (e.g., "YYYY-MM-DD")
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);

    if (!startDate || !endDate) {
      // Check if either startDate or endDate is falsy (null or undefined)
      alert("Please select both start and end dates.");
      return;
    }

    axios
      .get(
        `${EndPoint}/Cart/FilterHotelFoodOrderReport/?startDate=${formattedStartDate}&endDate=${formattedEndDate}`
      )
      .then((response) => {
        const { orders, main_total_price } = response.data;
        setOrders(orders);
        //setisPending(true);
        setModalVisible(false);
        setMainTotalPrice(main_total_price);
        setisRange(true);
        console.log("DATA FETCHED SUCCESSFULLY");

        // setStartDate('');
        // setEndDate('');
      })
      .catch((error) => {
        console.error("Error fetching filtered data: ", error);
        //setisPending(true);
      });
  };






const formatToThreeDigits = (number) => {
  if (number !== null) {
    return number.toLocaleString('en-US', {
      minimumFractionDigits: 2, // Ensure two decimal places
      maximumFractionDigits: 2, // Limit to two decimal places
      minimumIntegerDigits: 1, // Ensure at least one integer digit
    });
  }
  return null;
};







const FoodReportCard = ({order}) => {

    // const goToSource = () =>{
    //     WebBrowser.openBrowserAsync(item.url);
    // }

    return(

      
        <Pressable style={globalstyles.ReportScreencontainer2} >
              
        {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Order Id:</Text>
     </View>

     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     <Text style={globalstyles.ReportScreentitle}>{order.id}</Text>
     </View>

            </View>
 {/*    MWISHO */}



     {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Order Total Price:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Tsh. {formatToThreeDigits(order.price)}/=</Text>
     </View>

            </View>
 {/*    MWISHO */}





     {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Order Date:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     <Text style={globalstyles.ReportScreentitle}>{order.order.created}</Text>
     </View>

            </View>
 {/*    MWISHO */}

 




     {/*    MWANZO */}

{orders && order.user && order.user.username ? ( 
           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Issued By:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
      
     <Text style={globalstyles.ReportScreentitle}>{order.user.username}</Text>
   
     </View>


            </View>
              ): '' }
 {/*    MWISHO */}


       

     



           
        </Pressable>
       
    )
}



















  return (

     <>
    {isPending ? (

       <SafeAreaView style={{
            flex:1,
        }}>



    <ScrollView
      style={globalstyles.FilterModalcontainer}
    >
     
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
      <ScrollView>
        <View style={globalstyles.FilterModalmodalContainer}>
          <View style={globalstyles.FilterModalmodalContent}>
         {/* <TouchableOpacity 
          onPress ={move}>
            <Text style={globalstyles.modalTitle}>ALL</Text>
            </TouchableOpacity>*/}
            <DatePicker
              mode="calendar"
              selected={startDate}
              onDateChange={(date) => setStartDate(date)}
              format="YYYY-MM-DD" // Set the date format to "YYYY-MM-DD"
               options={{
                    backgroundColor: "#080516",
                    textHeaderColor: "red",
                    textDefaultColor: "#FFFFFF",
                    selectedTextColor: "#FFF",
                    mainColor: "red",
                    textSecondaryColor: "#FFFFFF",
                    borderColor: 'red',
                    borderRadius:10,
                  }}
            />

            <DatePicker
              mode="calendar"
              selected={endDate}
              onDateChange={(date) => setEndDate(date)}
              format="YYYY-MM-DD" // Set the date format to "YYYY-MM-DD"
              options={{
                    backgroundColor: "#080516",
                    textHeaderColor: "red",
                    textDefaultColor: "#FFFFFF",
                    selectedTextColor: "#FFF",
                    mainColor: "red",
                    textSecondaryColor: "#FFFFFF",
                    borderColor: 'red',
                    borderRadius:10,
                  }}
            />
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
              onPress={handleFilter}
               
              style={[globalstyles.ButtonAdd, {
                width:'45%'
              }]}
            >
              <Text style={{  color: "white" }}>SEARCH</Text>
            </TouchableOpacity>
            </View>




          </View>
        </View>
        </ScrollView>
      </Modal>

    








{/*MWANZO WA FOOD REPORT*/}





{orders && orders.length > 0 ? (
 <View>
    <View style={globalstyles.OrderCheckOutContainer}>
      <Text style={[{
        color:'green'
      },globalstyles.CartOrderTotalText]}>Total Amount</Text>
      <Text style={[{
        color:'green'
      },globalstyles.CartOrderTotalPriceText]}>
       Tsh. {formatToThreeDigits(mainTotalPrice)}/=
      </Text>
    </View>
    
  </View>

 ) : ''}  








 {orders && orders.length > 0 ? (

   <View >
               
 <View style={globalstyles.CartListHeaderContainer}>
 

  <Text style={globalstyles.CartListHeader}>Food Report</Text>
  {isRange ? (
  <Text style={globalstyles.ReportRangeText}>
  from {formatDate(startDate)} to {formatDate(endDate)}
  </Text>): ''}

  </View>


















    {orders.map((order, index) => {
      return <FoodReportCard order={order} key={order.id || index} />;
    })}
  </View>


  ) :(
   <View style={globalstyles.NoProductContainerContainer}>
  <Text style={globalstyles.NoProductText}>No any food report
  
  </Text>
</View>

  )}  








{/*MWISHO WA FOOD REPORT*/}







    </ScrollView>





<TouchableOpacity
onPress={() => setModalVisible(true)}
style={globalstyles.ReportScreenFilterReportContainer}
 >
    <Text 
    style={globalstyles.ReportScreenFilterReportContainerText}

   >Filter Report</Text>

</TouchableOpacity>







</SafeAreaView>


):(

<LotterViewScreen />

)}

    </>


  );
};

const styles = StyleSheet.create({
 
});

export default HotelFoodReportsComponent;
