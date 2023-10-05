import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, StatusBar } from "react-native";
import axios from "axios";
import { EndPoint } from '../constantComponents/constants';

const Test = () => {
  const [queryset, setQueryset] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Add error state
const [totalPages, setTotalPages] = useState(1); // Initialize with 1

  const getUsers = () => {
    setIsLoading(true);
    axios.get(`https://hotelappapisv3.pythonanywhere.com/Hotel/HotelPizzaProducts/?page=${currentPage}`)
      .then(res => {
        setQueryset([...queryset, ...res.data.queryset]);
        setTotalPages(res.data.total_pages);  // Set total pages
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  };

  const loadMoreItem = () => {
    if (currentPage < totalPages) {  // Check if there are more pages to load
      setCurrentPage(currentPage + 1);
    }
  };


const renderItem = ({ item }) => {
  return (
    <View style={styles.itemWrapperStyle}>
      <View style={styles.contentWrapperStyle}>
        <Text style={styles.txtNameStyle}>{item.product_name}</Text>
        <Text style={styles.txtEmailStyle}>{item.product_description}</Text>
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

//  const loadMoreItem = () => {
  
//     setCurrentPage(currentPage + 1);
  
// };


  useEffect(() => {
    getUsers();
  }, [currentPage]);

  if (error) {
    // Handle the error, you can display an error message or take appropriate action here.
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>An error occurred: {error.message}</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <FlatList
        data={queryset}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        //keyExtractor={item => `${item.id}_${item.product_name}`}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0.5}
      />
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

export default Test;
