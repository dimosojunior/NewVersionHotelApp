import React, {useEffect, useState} from "react";
import {View,StyleSheet,Button, Modal,
  TextInput,

   TouchableOpacity,
   Pressable,Image,
   Text,
   SafeAreaView, 
   FlatList,
   Platform
 } from "react-native";
import {globalstyles} from '../Styles/globalstyles';import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import MinorHeader from '../Headers/MinorHeader';
import {EndPoint} from '../constantComponents/constants';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello World!
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;

export default function Test() {

  const formatDate = (dateString) => {
    if (!dateString) {
      return null;
    }
    const [year, month, day] = dateString.split("/");
    return `${year}-${month}-${day}`;
  };


  const [selectedPrinter, setSelectedPrinter] = React.useState();

   const [modalVisible, setModalVisible] = useState(false);

const [order, setOrder] = useState([]);
  const [userToken, setUserToken] = useState('');









useEffect(() => {

   
    checkLoggedIn();
    // Fetch cart items only if the user is authenticated
    if (userToken) {
      fetchOrderItems();
    }

 


  }, [userToken]);



 const checkLoggedIn = async () => {
  const token = await AsyncStorage.getItem('userToken');
  setUserToken(token);
  
 
};



 


const fetchOrderItems = async () => {
  try {
    const response = await axios.get(
      EndPoint + '/Cart/HotelFoodReceipt/',
      {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      }
    );
    // console.log(response);

    // Check if the response data is an empty array (cart is empty)
    if (Array.isArray(response.data) && response.data.length === 0) {
      // Handle the case when the cart is empty here
      console.log("No item in your Order");
      setOrder([]); // Set cart to an empty array
    } else {
      // Cart is not empty, update the cart state with the data
      
      setOrder(response.data);
      console.log("Your Order Contains Items");
      // Set isOrderButtonVisible to true after adding an item to the cart
     // Check if the displayedItemsCount is greater than 1 and show the order button
   
      // setIsOrderButtonVisible(true);
    


    }
  } catch (error) {
    console.error('Error fetching order items:', error);
  }
};




const calculateTotalPrice = () => {
  let total = 0;
  order.forEach((x) => {
    total += x.price;
  });
  return total;
};

const totalCartPrice = calculateTotalPrice();






  const print = async () => {
    setModalVisible(false);
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
    for (let i in order) {
      const item = order[i];
      table = table + `
      <tr>
        <td>${item.id}</td>
        <td>${item.product.product_name} 
      
        ${item?.product.product_second_name}</td>
       
        <td>${item.quantity}</td>
         <td>${item.price}</td>
        
      </tr>
      `
    }
    console.log(table);
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
          color:green;
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
      </style>
      </head>
      <body>

        <h1>EASY-FIX</h1>




      
      <h2>Receipt</h2>
      
      <table>
        <tr>
          <th>ID</th>
          <th>Product Name</th> 
          <th>Quantity Ordered</th>
          <th>Total Price</th>
          
        </tr>
        ${table}
      </table>



      <div id="totalCartPrice">

      <h3>Total Order Price: ${totalCartPrice}/=</h3>
      </div>
      
      </body>
    </html>
      `;
    return html;
  }








  return (
    <View style={{
      flex:1,
    }}>
     



<MinorHeader title="Receipt"  screenName="Home Stack" />






      
      {Platform.OS === 'ios' &&
        <>
          <View style={styles.spacer} />
          <Button title='Select printer' onPress={selectPrinter} />
          <View style={styles.spacer} />
          {selectedPrinter ? <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text> : undefined}
        </>
      }





<TouchableOpacity
onPress={() => setModalVisible(true)}
style={globalstyles.ReportScreenFilterReportContainer}
 >
    <Text 
    style={globalstyles.ReportScreenFilterReportContainerText}

   >Print Receipt</Text>

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

            

          
            



               <View style={globalstyles.ButtonConatiner}>
                    <TouchableOpacity style={globalstyles.ButtonClose}  
                    onPress={printToFile} >
                        <Text style={{
                          color:'white',
                        }}>FILE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={globalstyles.ButtonAdd}  
                    onPress={print} >
                        <Text style={{
                          color:'white',
                        }}>PRINT</Text>
                    </TouchableOpacity>
            </View>




          </View>
        </View>
      </Modal>








    </View>
  );
}

const styles = StyleSheet.create({
  spacer: {
    margin: 5,
  },
})