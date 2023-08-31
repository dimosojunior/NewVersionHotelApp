import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button } from 'react-native';
// import MainHeader from './Headers/MainHeader';
import { useNavigation } from '@react-navigation/native';
import MyDrawer from './Drawer/drawer';

import { Ionicons,MaterialIcons,AntDesign, FontAwesome, FontAwesome5} from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




export default function App() {

  return (
    <View style={styles.container}>
    

    
     <MyDrawer />
    
        <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:30,
  },
});
