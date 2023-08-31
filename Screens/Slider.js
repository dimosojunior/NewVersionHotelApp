import { StyleSheet,Image, TouchableOpacity, Dimensions, View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import {MotiView} from 'moti';
const {width,height} = Dimensions.get('window');

const Slider = () => {
	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>


{/*mwanzo wa view iliyofunika items zote*/}
<View style={{
	flexDirection:'row',
	flex:1,

}} >





{/*mwanzo wa view iliyofunika items ya 1 na ya 2*/}
<View style={{
	
	flex:1,
	marginRight:15,
	
}}>







{/*-------------MWANZO WA ITEM 1---------*/}
		  <TouchableOpacity 
         onPress={() => move(item.CategoryName)}>

      <MotiView
        style={[{
        	height:270,


        },styles.listContainer]}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        >

      
        <View style={[{
        	

        },styles.imageContainer]}>
        
          <Image 
          // kama unatumia APIS
          //source={{uri: item.CategoryImage}}
          source={require('../assets/i3.png')} 
          style={styles.image} 
          />
       
        </View>
     







        <Text style={styles.nameText}>CategoryName</Text>
     
          
       


      </MotiView>
       </TouchableOpacity>
	{/*-------------MWISHO WA ITEM 1---------*/}



















	{/*-------------MWANZO WA ITEM 2---------*/}
		  <TouchableOpacity 
         onPress={() => move(item.CategoryName)}>

      <MotiView
        style={styles.listContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        >

      
        <View style={styles.imageContainer}>
        
          <Image 
          // kama unatumia APIS
          //source={{uri: item.CategoryImage}}
          source={require('../assets/i3.png')} 
          style={styles.image} 
          />
       
        </View>
     







        <Text style={styles.nameText}>CategoryName</Text>
     
          
       


      </MotiView>
       </TouchableOpacity>
	{/*-------------MWISHO WA ITEM 2---------*/}
		









</View>

{/*mwisho wa view iliyofunika items 1 na ya 2*/}













{/*mwazo wa view iliyofunika items ya 3 na 4*/}
<View style={{
	
	flex:1,
	marginRight:0,
	
}}>




		{/*-------------MWANZO WA ITEM 3---------*/}
		  <TouchableOpacity 
         onPress={() => move(item.CategoryName)}>

      <MotiView
        style={styles.listContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        >

      
        <View style={[{
        	paddingBottom:0,

        },styles.imageContainer]}>
        
          <Image 
          // kama unatumia APIS
          //source={{uri: item.CategoryImage}}
          source={require('../assets/i3.png')} 
          style={styles.image} 
          />
       
        </View>
     







        <Text style={styles.nameText}>CategoryName</Text>
     
          
       


      </MotiView>
       </TouchableOpacity>
	{/*-------------MWISHO WA ITEM 3---------*/}



















	{/*-------------MWANZO WA ITEM 4---------*/}
		  <TouchableOpacity 
         onPress={() => move(item.CategoryName)}>

      <MotiView
        style={[{
        	height:270,


        },styles.listContainer]}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        >

      
        <View style={[{
        	// marginTop:52,
        },styles.imageContainer]}>
        
          <Image 
          // kama unatumia APIS
          //source={{uri: item.CategoryImage}}
          source={require('../assets/i3.png')} 
          style={styles.image} 
          />
       
        </View>
     







        <Text style={styles.nameText}>CategoryName</Text>
     
          
       


      </MotiView>
       </TouchableOpacity>
	{/*-------------MWISHO WA ITEM 4---------*/}








</View>

{/*mwisho wa view iliyofunika items ya 3 na ya 4*/}










</View>
{/*mwisho wa view iliyofunika items zote*/}

		</SafeAreaView>
	);
};

export default Slider;

const styles = StyleSheet.create({



});
