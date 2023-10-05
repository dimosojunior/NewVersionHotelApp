import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ScrollView, Image, StyleSheet, ActivityIndicator, StatusBar } from "react-native";
import axios from "axios";
import {EndPoint} from '../constantComponents/constants';
const ViewBusinessUnitScreen = ({  route, navigation  }) => {

  const { 
    Code, 
    Description, 
    

    id 
   } = route.params;




  const [queryset, setQueryset] = useState([]);
  const [current_page, setcurrent_page] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [endReached, setEndReached] = useState(false)



  const getUsers = () => {
    if (endReached===true) {
      setLoading(false)
      setIsLoading(false)
      return
    }else{
      setIsLoading(true)
       const url = EndPoint+`/Hotel/HotelLocationCode/?id=${id}&page=${current_page}&page_size=12` 
       console.log(url)
       fetch(url)
       .then(res=>res.json())
       .then(data=>{
          if (data.queryset.length > 0) {
            setQueryset([...queryset, ...data.queryset])
            setIsLoading(false)
            setLoading(false)
            setcurrent_page(current_page+1)
          } else {
            setIsLoading(false)
            setEndReached(true)
            setLoading(false)
          }
       })
    }
   // try{
   //  setIsLoading(true);
   //  axios.get(EndPoint+`/Hotel/HotelPizzaProducts/?page=${current_page}&page_size=3`)
   //    .then(res => {
   //      //setUsers(res.data.results);
   //      setQueryset([...queryset, ...res.data.queryset]);
   //      console.log("PAGE");
   //      console.log(res.data);
   //      setIsLoading(false);
   //    });
   // }catch(error){
   //     console.log(error)
   // }
  };

  const RenderItem = ({ item }) => {
    return (
      <View key={item.id} style={styles.itemWrapperStyle}>
     <View style={styles.contentWrapperStyle}>
      <Text style={styles.txtNameStyle}>View Business Unit</Text>
          <Text style={styles.txtNameStyle}>{`${item.Code} `}</Text>
          <Text style={styles.txtEmailStyle}>{item.Description}</Text>
        </View>
      </View>
    );
  };

  const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="#aaa" />
        </View> : null
    );
  };

  // const loadMoreItem = () => {
  //   setcurrent_page(current_page + 1);
  // };

  useEffect(() => {
    setLoading(true)
    getUsers();
  }, []);

  const handleScroll = (event) =>{
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const scrollEndY = layoutMeasurement.height + contentOffset.y
    const contetHeight = contentSize.height

    if (scrollEndY >= contetHeight - 50) {
      getUsers()
    }
  }

  return (
    <>
    {setLoading===true?(<ActivityIndicator/>):(
      <>
     
      {/*<FlatList
        data={queryset}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={renderLoader}
        onEndReached={getUsers}
        onEndReachedThreshold={0.5}
      />*/}
             <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
         <View>
            {queryset.map((item, index) => {
              return <RenderItem item={item} key={item.id || index} />;
            })}
         </View>
         {isLoading&&(<ActivityIndicator/>)}
        
      </ScrollView>
      </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    color: "#777",
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});

export default ViewBusinessUnitScreen;
