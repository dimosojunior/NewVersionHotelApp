import React, {useEffect, useState} from "react";
import {View,StyleSheet,RefreshControl,ScrollView, Modal,TouchableOpacity,Pressable,Image,Text,SafeAreaView, FlatList} from "react-native";
import {globalstyles} from '../Styles/globalstyles';
import axios from "axios";
import { getFormatedDate } from "react-native-modern-datepicker";
import DatePicker from "react-native-modern-datepicker";
import LotterViewScreen from '../Screens/LotterViewScreen';
import { useNavigation } from '@react-navigation/native';
import { EndPoint } from "../constantComponents/constants";
import MinorHeader from '../Headers/MinorHeader';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';


const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      EASY-FIX
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;



const ViewHotelFoodOrders = ({route ,navigation }) => {

   const { 
    total_price,
    order_status,
    id 
   } = route.params

  //const navigation = useNavigation();
   const [userToken, setUserToken] = useState('');
   const [userData, setUserData] = useState({});

const move =() =>{
  setModalVisible(false);
  navigation.navigate('Hotel Reports');
}




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
  }, [userData]);

  const fetchUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');
      if (userDataJSON) {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);
        
        //console.log("USERDATA ARE");
        //console.log(userData);
      }
    } catch (error) {
      console.log(error);
    }
  };











  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleProcessOrder, setModalVisibleProcessOrder] = useState(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [queryset, setQueryset] = useState([]);
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
    // Make a GET request to fetch queryset and main total price
    axios.get(`${EndPoint}/Cart/GetHotelFoodOrderItems/?id=${id}`)


      .then((response) => {
        const { queryset, main_total_price } = response.data;
        setQueryset(queryset);
        setisPending(true);
         setisRange(false);
        setMainTotalPrice(main_total_price);
        
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setisPending(true);
      });
  }, []);

  










const removeOrderItem = (cartId) => {
  console.log("CARTID",cartId);

   navigation.replace('View Hotel Food Orders', {id}); 
  // Make an API request to delete the item from the cart
  const apiUrl = `${EndPoint}/Cart/HotelFoodDeleteOrderItem/?cartId=${cartId}`;
  console.log("URL",apiUrl);
  
  axios
    .delete(apiUrl, {
      headers: {
        Authorization: `Token ${userToken}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.status === 204) {
        // Item removed successfully, update the cartItems state
        setQueryset(queryset.filter((item) => item.id !== cartId));
         //setIsOrderButtonVisible(false);
         Alert.alert('item is removed successfully from your order');

         // navigation.replace('Hotel NewSale Other Food');  

     

      } 
      else {
        // Handle the error if the item couldn't be removed
        console.error('Failed to remove item from cart:', response);
        Alert.alert('Error', 'Failed to remove item from cart');
      }
    })
    .catch((error) => {
      console.error('Error removing item from cart:', error);
      // Handle the error here, for example, show a user-friendly error message
      Alert.alert('Error', 'Failed to remove item from cart');
    });
};







//----------------PRINTING RECEIPT-----------------

 const [selectedPrinter, setSelectedPrinter] = React.useState();
 const [order, setOrder] = useState([]);
 const [modalVisibleReceipt, setModalVisibleReceipt] = useState(false);






  const print = async () => {
    setModalVisible(false);
    console.log("DATA PRINTED");
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html: createDynamicTable(),
      printerUrl: selectedPrinter?.url, // iOS only
    });
  }

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  }

  // const array = [
  //   { product_name: "Wali maharage", price: 25000, quantity: 1, id:1 },
  //   { product_name: "Wali nazi", price: 3000, quantity: 2, id:2},
  //   { product_name: "Wali samaki", price: 2400, quantity: 4, id:3 },
  //   { product_name: "Chipsi yai", price: 10000, quantity: 2, id:4 },
  //   { product_name: "sambusa Nyama", price: 70000, quantity: 1, id:5 },
  //   { product_name: "Chipsi Kuku", price:32000, quantity: 5, id:6 },
  // ]
  const createDynamicTable = () => {
    var table = '';
    for (let i in queryset) {
      const item = queryset[i];
      table = table + `
      <tr>
        <td>${item.id}</td>
        <td>${item.product.product_name} 
      
        ${item?.product.product_second_name}</td>
       
        <td>${item.quantity}</td>
         <td>${item.product.price}</td>
        
      </tr>
      `
    }
    console.log(table);
    console.log(total_price);
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
      <style>
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        
        td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        
        tr:nth-child(even) {
          background-color: #dddddd;
        }
        h2{
          color:black;
          font-weight:bold;
          font-size:16;
        }

         h1{
          color:white;
          font-weight:bold;
          text-align:center;
          font-size:18;

        }
        img{
          width:50%;
          height:40px;
          marginBottom:20;
         border-radius:8;
        margin-top:20;
        }
        #totalCartPrice{

        }

         #totalCartPrice h3{
          text-align:center;
          font-size:20;
          margin-top:20;

        }

        #Header-container{
          background-color:'green';
          padding:15px;
          border-radius:6px;
        }

      #company_name{
        margin-bottom:15px;
        color:white;
        font-size:18px;
      }
      </style>
      </head>
      <body>

      <div class="Header-container" style="background-color:green;">

        <h1>EASY-FIX</h1>
       

 <div id="totalCartPrice">

      <h3 id="company_name"> ${userData.company_name}</h3>
      </div>

</div>




      
      <h2>Receipt</h2>
      
      <table>
        <tr>
          <th>ID</th>
          <th>Product Name</th> 
          <th>Quantity Ordered</th>
          <th>Item Price</th>
          
        </tr>
        ${table}
      </table>



      <div id="totalCartPrice">

      <h3>Total Order Price: ${total_price}/=</h3>

       <h3>Issued By: ${userData.username}</h3>
      </div>
      
      </body>
    </html>
      `;
    return html;
  }











const setOrderStatusTrue = () => {
  navigation.replace('Hotel Food Reports');
  setModalVisibleProcessOrder(false);
  const url = `${EndPoint}/Cart/HotelFoodOrderChangeStatusToTrue/?id=${id}`;
  fetch(url, {
    method: 'POST',
  })
    .then((response) => {
      if (response.ok) {
        // Request was successful
        console.log("Order status changed successfully");
        
      } else {
        // Request failed with a status code other than 200
        console.error("Request failed with status:", response.status);
      }
    })
    .catch((error) => {
      // Handle request error
      console.error("Request error:", error.message);
    });
};

const setOrderStatusFalse = () => {
  navigation.replace('Hotel Food Reports');
  setModalVisibleProcessOrder(false);
  const url = `${EndPoint}/Cart/HotelFoodOrderChangeStatusToFalse/?id=${id}`;
  fetch(url, {
    method: 'POST',
  })
    .then((response) => {
      if (response.ok) {
        // Request was successful
        console.log("Order status changed successfully");
      } else {
        // Request failed with a status code other than 200
        console.error("Request failed with status:", response.status);
      }
    })
    .catch((error) => {
      // Handle request error
      console.error("Request error:", error.message);
    });
};





const formatToThreeDigits = (number) => {
  if (number !== null) {
    return number.toLocaleString('en-US', {
      minimumFractionDigits: 0, // Ensure two decimal places
      maximumFractionDigits: 2, // Limit to two decimal places
      minimumIntegerDigits: 1, // Ensure at least one integer digit
    });
  }
  return null;
};




















// Function to format the datetime to date
  const formatToShortDate = (dateTimeString) => {
    if (!dateTimeString) {
      return "";
    }
    const date = new Date(dateTimeString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };





const FoodReportCard = ({order, index}) => {

    // const goToSource = () =>{
    //     WebBrowser.openBrowserAsync(item.url);
    // }

    return(

       
        <Pressable 

         onPress={() => navigation.navigate('View Hotel Food Orders', item)}
        

        style={globalstyles.ReportScreencontainer2} >
              
        {/*    MWANZO */}

          
           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Item Name:</Text>

      {order.product.product_second_name && (
     <Text style={globalstyles.ReportScreentitle}>Item Second Name:</Text>
      )}
     </View>

     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     <Text style={[{color:'green'},globalstyles.ReportScreentitle]}>{order.product.product_name}
    </Text>

     {order.product.product_second_name && (
     <Text style={[{color:'green'},globalstyles.ReportScreentitle]}>
     
    {order.product.product_second_name}
    </Text>
    )}
   

     
     </View>

            </View>
 {/*    MWISHO */}



     {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Total Price:</Text>
     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Tsh. {formatToThreeDigits(order.price)}/=</Text>
     
     </View>

            </View>
 {/*    MWISHO */}





     {/*    MWANZO */}


           <View style={globalstyles.ReportScreenItemscontainer2}>
     
     <View style={globalstyles.ReportScreenIndividualItemLeftcontainer}>
     <Text style={globalstyles.ReportScreentitle}>Quantity:</Text>
     <Text style={globalstyles.ReportScreentitle}>Item Price:</Text>
     <Text style={globalstyles.ReportScreentitle}>Order Date:</Text>

     <Text style={globalstyles.ReportScreentitle}>Cancel Order:</Text>

     </View>


     <View style={globalstyles.ReportScreenIndividualItemRightcontainer}>
       <Text style={globalstyles.ReportScreentitle}>{order.quantity}</Text>
       <Text style={globalstyles.ReportScreentitle}>{order.product.price}/=</Text>
 
     <Text style={globalstyles.ReportScreentitle}>{formatToShortDate(order.Created)}</Text>
    





     </View>

            </View>
 {/*    MWISHO */}

 




     {/*    MWANZO */}

{queryset && order.user && order.user.username ? ( 
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

<MinorHeader title="Items"  screenName="Hotel Food Reports" />



    <ScrollView
      style={globalstyles.FilterModalcontainer}
    >
     

    






{/*MWANZO WA FOOD REPORT*/}





{queryset && queryset.length > 0 ? (
 <View>
    <View style={globalstyles.OrderCheckOutContainer}>
      <Text style={[{
        color:'green'
      },globalstyles.CartOrderTotalText]}>Total Amount</Text>
      <Text style={[{
        color:'green'
      },globalstyles.CartOrderTotalPriceText]}>
       Tsh. {formatToThreeDigits(total_price)}/=
      </Text>
    </View>
    
  </View>

 ) : ''}  








 {queryset && queryset.length > 0 ? (

   <View style={{
    marginBottom:50,
   }} >
               
 <View style={globalstyles.CartListHeaderContainer}>
 

  <Text style={globalstyles.CartListHeader}>Ordered Items</Text>
  

  </View>


















    {queryset.map((order, index) => {
      return <FoodReportCard order={order} key={order.id || index} />;
    })}
  </View>


  ) :(
   <View style={globalstyles.NoProductContainerContainer}>
  <Text style={globalstyles.NoProductText}>No any drinks report
  
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

   >Print Receipt</Text>

</TouchableOpacity>



<TouchableOpacity
onPress={() => setModalVisibleProcessOrder(true)}
style={globalstyles.ProcessOrderReportScreenFilterReportContainer}
 >
    <Text 
    style={globalstyles.ProcessOrderReportScreenFilterReportContainerText}

   >Process Order</Text>

</TouchableOpacity>









{/*MODAL FOR PRINTING*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ORDER RECEIPT</Text>

            <View style={globalstyles.form}>

               

                   
    

                


            </View>

            

          
            


{userData && userData.is_supervisor === true ? (

               <View style={globalstyles.ButtonConatiner}>
                    <TouchableOpacity style={globalstyles.ButtonClose}  
                    onPress={() => setModalVisible(false)} >
                        <Text style={{
                          color:'white',
                        }}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={globalstyles.ButtonAdd}  
                    onPress={print} >
                        <Text style={{
                          color:'white',
                        }}>PRINT</Text>
                    </TouchableOpacity>
            </View>):(

  <Text style={{ marginLeft:10,fontSize:15 }}>You are not allowed to print Receipt</Text>

)}


          </View>
        </View>
      </Modal>







{/*MODAL FOR PROCESSING ORDERS*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleProcessOrder}
        onRequestClose={() => setModalVisibleProcessOrder(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:10,fontSize:15 }}>PROCESS ORDER</Text>

            <View style={globalstyles.form}>

               

                   
    

                


            </View>

            

          
            


{userData && userData.is_supervisor === true ? (

              
 <View style={globalstyles.ButtonConatiner}>

          <TouchableOpacity style={globalstyles.ButtonClose}  
                    onPress={() => setModalVisibleProcessOrder(false)} >
                        <Text style={{
                          color:'white',
                        }}>CLOSE</Text>
                    </TouchableOpacity>


               {order_status === true && (
                    <TouchableOpacity style={globalstyles.ButtonAdd}  
                    onPress={setOrderStatusFalse} >
                        <Text style={{
                          color:'white',
                        }}>CANCEL ORDER</Text>
                    </TouchableOpacity>
                    )}
                    
                    {order_status === false && (
                    <TouchableOpacity 
                    style={globalstyles.ButtonAdd}  
                    onPress={setOrderStatusTrue} >
                        <Text style={{
                          color:'white',
                        }}>PROCESS ORDER</Text>
                    </TouchableOpacity>
                    )}
            </View>
):(

  <Text style={{ marginLeft:10,fontSize:15 }}>You are not allowed to Process Orders</Text>

)}


          </View>
        </View>
      </Modal>








</SafeAreaView>


):(

<LotterViewScreen />

)}

    </>


  );
};

const styles = StyleSheet.create({
 
});

export default ViewHotelFoodOrders;
