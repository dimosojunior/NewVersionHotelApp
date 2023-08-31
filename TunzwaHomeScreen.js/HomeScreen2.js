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



HomeHeaderContainer:{
    alignItems:'center',
    marginBottom:20,
    justifyContent:'center',
    width:width,
    flexDirection:'row',
    paddingHorizontal:20,

  },
  HomeHeaderText:{
    alignItems:'center',
    fontWeight:'bold',
    fontSize:18,

    

  },
  HomeHeaderImage:{
    width:40,
    height:40,
    marginRight:20,
    borderRadius:20,

  },
  listContainer: {
    width: Dimensions.get('window').width / 2 - 30,
    //backgroundColor: 'black',
    margin: 0,
    borderRadius: 20,
    //justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#D9D9D9',
    marginVertical:15,
    paddingVertical:18,
    paddingTop:50,


    elevation:10,
    //backgroundColor:'black',
    shadowOffset:{width:1, height:1},
    shadowColor:'#D9D9D9',
    shadowOpacity:1,
    shadowRadius:2,
    
  },
  imageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent:'center',
    alignItems:'center',
     marginBottom:0,
  },
  image:
   {width: '50%',
    height: undefined, 
    aspectRatio:1 ,

    
  },




image:
   {width: '50%',
    height: undefined, 
    aspectRatio:1 
    
  },



imageContainer:{
  margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,

},
image:
   {width: '50%',
    height: undefined, 
    aspectRatio:1 
    
  },



   imageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,


  },
  image:
   {width: '50%',
    height: undefined, 
    aspectRatio:1 
    
  },




  nameText: {
    color: 'black',
    // fontWeight: 'bold',
    marginLeft: 15,
    fontSize:16,
    marginBottom:20,
    marginTop:20,
    // fontFamily: 'SerifRegular',
  },
  priceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    // fontFamily: 'SerifRegular',
  },
  button: {
    backgroundColor: 'wheat',
    padding: 10,
    margin: 15,
    borderRadius: 10,

  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    // fontFamily: 'SerifRegular',
  },

});
