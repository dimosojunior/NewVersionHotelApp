import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, StatusBar } from "react-native";
import axios from "axios";

const Test = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/posts/?_page=${currentPage}&_limit=10`)
      .then(res => {
        //setUsers(res.data.results);
        setUsers([...users, ...res.data]);
        setIsLoading(false);
      });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapperStyle}>
     <View style={styles.contentWrapperStyle}>
          <Text style={styles.txtNameStyle}>{`${item.id} ${item.title} `}</Text>
          <Text style={styles.txtEmailStyle}>{item.body}</Text>
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

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.email}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
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
