import 'react-native-gesture-handler';
import 'react-native-reanimated';

import {
  Alert,
  ActivityIndicator,
  FlatList,
  ScrollView,
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
  Modal
} from 'react-native';
import {globalstyles,images} from '../Styles/globalstyles';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LotterViewScreen from '../Screens/LotterViewScreen';

import AddMinorHeader from '../Headers/AddMinorHeader';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
import {Picker} from '@react-native-picker/picker';
import FoodCart from '../CartComponents/FoodCart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {EndPoint} from '../constantComponents/constants';
import COLORS from '../constantComponents/colors';
import {PrimaryButton} from '../constantComponents/Button';
// kama unatumia APIS toa hiyo projects prop

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 




const Test = () => {
  const [input, setInput] = useState('');



  const [queryset, setQueryset] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

 const fetchData = async (loadMore = false) => {
    if (loading || (page > totalPages && !loadMore)) return;

    try {
      setLoading(true);
      const response = await axios.get(
        EndPoint+`/Hotel/HotelPizzaProducts/?page=${page}&page_size=2`
      );
      if (response.status === 200) {
        const newData = response.data.queryset || [];
        setQueryset((prevData) => (loadMore ? [...prevData, ...newData] : newData));
        setTotalPages(response.data.total_pages);
        setPage(page + 1);
        console.log("DATA FETCHED SUCCESSFULLY");
      } else {
        console.error('Error fetching data. Status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderFooter = () => {
    if (loading || page > totalPages) return null;
    return <ActivityIndicator style={{ margin: 10 }} size="large" color="#0000ff" />;
  };



















const RenderedItems =({item}) =>{

     // mwanzo kwa ajili ya search
    if (input === ""){

          return (
            <View style={globalstyles.itemView}>
            <View
            style={globalstyles.FoodNameView}

            >
              <Text style={globalstyles.nameText}>{item.product_name}</Text>
              {item.product_second_name && 
              <Text style={globalstyles.descText}>{item.product_second_name}</Text>
               }
               
             </View>
                              

                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    {item.unit ? item.Unit : 'Sahani 1'} 
                  </Text>

                  <Text style={globalstyles.priceText}>
                    {item.price}/=
                  </Text>
                  
                </View>
            

              
              
              <View 
              style={globalstyles.IconContainer}
              >

                <TouchableOpacity
                 onPress={() => {
                setSelectedProduct(item);
                setModalVisible(true);
              }}

               >
                <MaterialCommunityIcons 
    name="gesture-tap-button"
     size={30} 
     color="green"
    style={globalstyles.ClickableIcon}

     />
                  
                </TouchableOpacity>




                
             </View>   
             
            </View>
          );

  // hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.product_name.toLowerCase().includes(input.toLowerCase()) || item.product_second_name.toLowerCase().includes(input.toLowerCase())){

 return (
            <View style={globalstyles.itemView}>
            <View
            style={globalstyles.FoodNameView}

            >
              <Text style={globalstyles.nameText}>{item.product_name}</Text>
              {item.product_second_name && 
              <Text style={globalstyles.descText}>{item.product_second_name}</Text>
          }
               
             </View>
                              

                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    {item.unit ? item.Unit : 'Sahani 1'} 
                  </Text>

                  <Text style={globalstyles.priceText}>
                    {item.price}/=
                  </Text>
                  
                </View>
            

              
              
              <View 
              style={globalstyles.IconContainer}
              >

                <TouchableOpacity
                 onPress={() => {
                setSelectedProduct(item);
                setModalVisible(true);
              }}

               >
                <MaterialCommunityIcons 
    name="gesture-tap-button"
     size={30} 
     color="green"
    style={globalstyles.ClickableIcon}

     />
                  
                </TouchableOpacity>




                
             </View>   
             
            </View>
          );



// hili bano la chini ni la if ya pili mwisho
  }


 // mabano ya chini ni kufunga function ya  Rendered items
}




  return (
    <View>

    <AddMinorHeader title="Food" screenName="Hotel NewSale Food" />

      <FlatList
        data={queryset}
        keyExtractor={(item) => item.id.toString()}
        renderItem={RenderedItems}
        onEndReached={fetchData}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default Test;
