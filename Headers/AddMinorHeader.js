
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Ionicons, FontAwesome} from '@expo/vector-icons';

// This import used to change color
import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
import {globalstyles, images} from '../Styles/globalstyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddMinorHeader({title,pressMe,screenName}) {

  
const navigation = useNavigation();

 const goBackPage = () =>{
    navigation.navigate(screenName);

  }


    const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');
      if (userDataJSON) {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);
        
        console.log(parsedUserData);
        console.log(userDataJSON);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    








<View 
style={{
  //backgroundColor:'black',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  paddingVertical:10,
  borderBottomColor:'#C0C0C0',
        borderBottomWidth:2,
}}
>
{/*mwanzo wa view ya icon na title*/}

<View 
style={{
  //backgroundColor:'black',
  flexDirection:'row',
  alignItems:'center',
  // justifyContent:'space-around',
  
}}
>
<Ionicons name='arrow-back' 
      size={32} onPress={goBackPage}
      color="black"
      style={{
        marginLeft: 20,
      }}
        />

    <Text style={globalstyles.headerTextArticleHeaderFile
    
    }>{title}</Text>
</View>

{userData && userData.is_admin === true &&(
<View >
    <FontAwesome name='plus' 
      size={20} onPress={pressMe}
      color="black"
      style={{
        marginLeft: 10,
      }}
        
  style={globalstyles.headerImageArticleHeaderFile} />

</View>)}
     

  
</View>
// {mwisho wa view ya image na icon}








// {MWISHO WA HEADER}









  );
}

const styles = StyleSheet.create({
    

  });

