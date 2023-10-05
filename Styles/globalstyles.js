import React from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { Dimensions } from 'react-native';
import COLORS from '../constantComponents/colors';
import { PrimaryButton } from '../constantComponents/Button';

const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

const { width, height } = Dimensions.get('window');


const GlobalStyles = () => {


  return (

    <View >
      <Text>Gloal Styles</Text>
    </View>
  );


}
export default GlobalStyles;


export const globalstyles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'black',
    // width:Dimensions.get('screen').width,
    // resizeMode:'contain'
    // alignItems: 'center',
    // justifyContent: 'center',

  },


  //---------------------ACTIVITY INDICATOR-------------

  ActivityIndicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    flex: 1,

    height: height,
    backgroundColor: 'white',

  },
  ActivityIndicatorText: {
    color: 'red',
    marginBottom: 15,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',


  },


  //------------------HOTEL CATEGORIES--------------

  categoriesComponentText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
    color: 'green'
  },



  //--------------------------SEARCH PAGE-----------------

  SearchContainer: {
    marginTop: 10,
    paddingHorizontal: 20,

  },

  InputContainer: {
    marginTop: 10,
    padding: 2,
    paddingLeft: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    elevation: 3,
    borderColor: 'green',
    borderWidth: 1,

    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 1,
    shadowRadius: 2,
  },

  TextInput: {
    fontSize: 16,
    marginLeft: 10,

    color: 'black',
    fontWeight: 'bold',
    width: Dimensions.get('window').width - 100,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 10,
  },







  //---------------------MODAL STYLE-----------------

  ModalView: {
    padding: 20,
    width: 340,
    backgroundColor: "white",
    borderRadius: 20,
  },
  ButtonClose: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "red",
    borderRadius: 5,

  },
  ButtonAdd: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "green",
    borderRadius: 5,


  },
  ButtonScan: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "gray",
    borderRadius: 5,

  },
  ButtonBarcode: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    //  backgroundColor:"green",
    borderRadius: 5,
    borderWidth: 1,

  }, ButtonConatiner: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: "space-between"
  },
  input: {
    flexDirection: "row",
    width: 300,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  inputTax: {
    flexDirection: "row",
    width: 300,
    height: 50,
    backgroundColor: 'green',
    // borderColor:"black",
    // borderWidth:1,
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  picker: {
    width: 170,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  pickerInput: {
    top: -7
  },

  textInput: {
    fontSize: 20
  },
  form: {
    marginTop: 30,
    alignItems: 'center'
  },
  Inputicon: {
    fontSize: 29,
    marginRight: 10

  },
  TaxType: {
    fontSize: 16,
    color: "white",
    fontWeight: '400'
  },
  open: {
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,

  },


  ButtonAddText: {
    color: 'white',
  },











  //----------------------HOTEL CATEGORIES--------------
  //----------ITEMS ZINAZOPISHANA-------------------

  HoteCategoriesHomeHeaderContainer: {
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    width: width,
    flexDirection: 'row',
    paddingHorizontal: 20,

  },
  HoteCategoriesHomeHeaderText: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 18,



  },
  HoteCategoriesHomeHeaderImage: {
    width: 40,
    height: 40,
    marginRight: 20,
    borderRadius: 20,

  },
  HoteCategorieslistContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    //backgroundColor: 'black',
    margin: 0,
    borderRadius: 20,
    //justifyContent:'center',
    alignItems: 'center',
    // backgroundColor:'#D9D9D9',
    backgroundColor: '#fff',
    marginVertical: 15,
    paddingVertical: 18,
    paddingTop: 30,


    elevation: 15,
    //backgroundColor:'black',
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'green',
    shadowOpacity: 0,
    shadowRadius: 0,

  },





  HoteCategoriesimage:
  {
    width: '50%',
    height: undefined,
    aspectRatio: 1

  },



  HoteCategoriesimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,

  },









  HoteCategoriesnameText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 0,
    fontSize: 16,
    marginBottom: 20,
    marginTop: 10,
    // fontFamily: 'SerifRegular',
  },
  HoteCategoriespriceText: {
    color: 'orange',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
    // fontFamily: 'SerifRegular',
  },
  HoteCategoriesbutton: {
    backgroundColor: 'wheat',
    padding: 10,
    margin: 15,
    borderRadius: 10,

  },
  HoteCategoriesbuttonText: {
    color: 'black',
    textAlign: 'center',
    // fontFamily: 'SerifRegular',
  },





























  //--------------------------INVENTORY CATEGORIES------------------------





  HomeHeaderContainer: {
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    width: width,
    flexDirection: 'row',
    paddingHorizontal: 20,

  },

  HomeHeaderImage: {
    width: 40,
    height: 40,
    marginRight: 20,
    borderRadius: 20,

  },
  listContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    //backgroundColor: 'black',
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'green',
    shadowOpacity: 1,
    marginVertical: 6,
    paddingVertical: 18,
    paddingTop: 50,



    shadowRadius: 2,

  },
  NewSalesimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  NewSalesimage:
  {
    width: '50%',
    height: undefined,
    aspectRatio: 1

  },



  InventoryimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,

  },
  Inventoryimage:
  {
    width: '50%',
    height: undefined,
    aspectRatio: 1

  },



  CustomersimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,

  },
  Customersimage:
  {
    width: '50%',
    height: undefined,
    aspectRatio: 1

  },



  ReportsimageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,


  },
  Reportsimage:
  {
    width: '50%',
    height: undefined,
    aspectRatio: 1

  },




  nameText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 1,
    fontSize: 16,
    marginBottom: 0,
    // fontFamily: 'SerifRegular',
  },

  button: {
    backgroundColor: 'wheat',
    padding: 10,
    margin: 15,
    borderRadius: 10,

  },
























  //-----------ITEM 1----------HOME COMPONENT and ALL OTHER HOME CATEGORIES COMPONENTS ---------------







  HomeHeaderText: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 18,



  },


  imageContainer: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  image:
  {
    width: '50%',
    height: undefined,
    aspectRatio: 1

  },








  buttonText: {
    color: 'black',
    textAlign: 'center',
    // fontFamily: 'SerifRegular',
  },


















  //-----------------------HEADER.JS------------------


  headerHeaderFile: {
    //width:Dimensions.get('window').width,     
    width: '100%',
    // height: 60,
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 2,
    paddingTop: Dimensions.get("window").height * 0.04,

    // alignItems: 'flex-start',
    marginLeft: 0,
    paddingLeft: 0,
    //backgroundColor: 'black',  //"#2B3856",
    marginBottom: 10,

    justifyContent: 'space-between',
    elevation: 3,

    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'white',
    shadowOpacity: 1,
    shadowRadius: 2,
    marginHorizontal: 0,
    marginVertical: 0,
    paddingHorizontal: 0,

    //paddingVertical:15,




  },
  headerTextHeaderFile: {
    //fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    letterSpacing: 1,

    // flex:1,
    alignItems: "center",
    marginTop: 10,
    // fontFamily:'SerifRegular',


  },
  iconHeaderFile: {
    position: 'relative',
    marginLeft: 20,

    //flex:1,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 0,

    fontSize: 35,


  },

  headerImageHeaderFile: {
    width: 40,
    height: 40,
    // marginHorizontal:10,
    marginTop: 0,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 0
  },













  //-------------------------OTHER HEADER.JS----------

  headerArticleHeaderFile: {
    width: Dimensions.get('screen').width,
    height: 100,
    flexDirection: 'row',

    // alignItems: 'flex-start',
    marginLeft: 0,
    paddingLeft: 0,
    backgroundColor: "black",
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 2,




  },
  headerTextArticleHeaderFile: {
    //fontWeight: 'bold',
    // fontFamily:'SerifRegular',

    fontSize: 18,
    // textAlign:'center',
    // marginLeft:30,
    //color:'white',
    //fontWeight:'bold',
    marginHorizontal: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  iconArticleHeaderFile: {
    position: 'relative',
    marginLeft: 5,
    flexDirection: 'row',
    flex: 0.5,
    color: 'wite',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 40,


  },


  headerImageArticleHeaderFile: {
    width: 30,
    height: 30,
    // marginHorizontal:10,
    marginTop: 0,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 0
  },

















  //--------------------------HOTEL CATEGORIES STYLES---


  //-------------------------------HOTELS HOME SCREEN----------


  fontSize: {
    fontSize: 16,
    color: 'black',
    // fontFamily:'SerifRegular',
    //textAlign:'center'
  },
  place: {
    fontSize: 16,
    color: 'black',
    // fontFamily:'SerifRegular',
    //textAlign:'center'
  },
  ShortDescription: {
    fontSize: 16,
    // fontFamily:'SerifRegular',

  },
  HotelImage: {
    width: 50,
    height: 50,
    borderRadius: 45,
    marginRight: 10,
  },
  wrapText: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    flex: 1,
  },

  LocationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'red',
    marginTop: 1,
    paddingRight: 10,
    flex: 1,

  },
  LocationText: {
    color: 'black',
    fontSize: 14,

  },


  item: {

    flexDirection: 'row',
    //justifyContent:'space-around',
    alignItems: 'center',
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    borderColor: '#E3E4FA',
    borderWidth: 0.5,
    //elevation:6,
    shadowColor: 'black',
    shadowOffset: {
      width: 1.5,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 30,
    paddingLeft: 10,
    marginHorizontal: 0,
    paddingVertical: 5,
  },


  ImageRatings: {
    width: '80%',
    height: 15,
    marginTop: 3,

  },

















  CartitemView: {
    flex: 1,
    flexDirection: 'row',
    width: width - 30,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 4,
    elevation: 10,
    shadowColor: 'green',
    shadowOpacity: 1,
    marginTop: 2,
    borderRadius: 10,
    height: 70,
    marginBottom: 10,
    marginHorizontal: 20,

  },



  //HOTEL CATEGORIES, ROW LIST  DISPLAY
  //CUSTOMERS, FOOD, DRINKS, OTHERS, ROOMS

  AllListcontainer: {
    flex: 1,

  },
  itemView: {
    flex: 1,
    flexDirection: 'row',
    width: width - 30,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 4,
    elevation: 10,
    shadowColor: Platform.OS === "android" ? 'green' : "lightgrey",
    shadowOpacity: 1,
    marginTop: 2,
    borderRadius: 10,
    height: 70,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  ImageListContainer: {
    justifyContent: 'center',
    width: '25%'

  },
  itemImage: {
    width: '80%',
    height: 60,
    borderRadius: 10,
    margin: 5,
  },
  nameView: {
    justifyContent: 'center',
    width: '75%'
    //width: '43%',
    // margin: 10,


  },
  priceView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flex: 1,
    width: '35%',
  },

  descText: {
    fontSize: 14,
    fontWeight: '600',
  },
  LastNameText: {
    fontSize: 16,
    fontWeight: '700'

  },
  UnitText: {
    fontSize: 14,
    // color: 'green',
    fontWeight: '700',
    justifyContent: 'center',

  },
  priceText: {
    fontSize: 18,
    color: 'green',
    fontWeight: '700',
    justifyContent: 'center',
  },
  discountText: {
    fontSize: 17,
    fontWeight: '600',
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  ClickableIconicon: {
    width: 50,
    height: 50,
    marginRight: 50,

  },



  IconContainer: {
    justifyContent: 'center',
    marginRight: 0,
    flex: 1,
    alignItems: 'flex-end',
    width: '15%',
    paddingRight: 10,

  },

  FoodNameView: {
    marginRight: 0,
    // flex:1,
    marginLeft: 10,
    justifyContent: 'center',
    width: '35%'

  },













  //----------------CART CARD STYLES_--------
  NoCartItem: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'

  },
  NoCartItemContainer: {
    alignItems: 'center',

  },



  NoProductContainerContainer: {
    justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center'

  },

  NoProductText: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold'

  },





  CartContainer: {
    // flex:1,
    backgroundColor: COLORS.white,

    height: height / 3 + 30,

  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CartTitle: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  CheckOutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  TotalPriceText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  PriceText: {
    fontSize: 18, fontWeight: 'bold'
  },
  ItemName1: {
    fontWeight: 'bold', fontSize: 16
  },
  ItemName2: {
    fontWeight: 'bold', fontSize: 16
  },
  CartContainerCOntainer2: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center'
  },
  CartUnitText: {
    fontSize: 16
  },
  CartPriceText: {
    fontSize: 17, fontWeight: 'bold'
  },
  CartPriceTextUnit: {
    color: 'red',
    fontWeight: 'bold'

  },
  CartActionButtonText: {
    marginRight: 20, alignItems: 'center'
  },

  CartListHeaderContainer: {
    marginVertical: 1,
    // alignItems:'center',
    elevation: 5,
    marginHorizontal: 20,

  },
  CartListHeader: {
    fontSize: 18,
    fontWeight: 'bold'
  },












  //----------------VIEW BOOKED ROOM
  BookedUnitactionBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    width: 200,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    marginHorizontal: 20,

  },
















  //-------------------UNIT PAGE CART---------


  UnitNoCartItem: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'

  },

  UnitCartContainer: {
    flex: 1,
    backgroundColor: COLORS.white,

    height: height,

  },
  Unitheader: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  UnitcartCard: {
    height: 70,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  UnitactionBtn: {
    width: 80,
    height: 30,
    backgroundColor: 'green',
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  UnitCartTitle: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  UnitCheckOutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  UnitTotalPriceText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  UnitPriceText: {
    fontSize: 18, fontWeight: 'bold'
  },
  UnitItemName1: {
    fontWeight: 'bold', fontSize: 16
  },
  UnitItemName2: {
    fontWeight: 'bold', fontSize: 16
  },
  UnitItemName2: {
    fontSize: 12,
    color: 'green',
    fontWeight: 'bold'
  },
  UnitCartContainerCOntainer2: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center'
  },
  UnitCartUnitText: {
    fontSize: 16
  },
  UnitCartPriceText: {
    fontSize: 17, fontWeight: 'bold'
  },
  UnitCartPriceTextUnit: {
    color: 'red',
    fontWeight: 'bold'

  },
  UnitCartActionButtonText: {
    marginRight: 20, alignItems: 'center'
  },

  UnitCartListHeaderContainer: {
    marginVertical: 10,
    alignItems: 'center',
    elevation: 5,

  },
  UnitCartListHeader: {
    fontSize: 18,
    fontWeight: 'bold'
  },

















  // REPORTS STYLES-------------------------


  ReportKeyboardAvoidingView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    flex: 1,
  },





























  //-------------------REPORT SCREEN---------------------


  ReportScreenreportCardHeader: {
    fontWeight: 'bold',
    fontSize: 20,

  },
  ReportScreencontainer: {
    width: "95%",
    paddingHorizontal: 35,
    paddingVertical: 5,
    marginVertical: 20,
    elevation: 10,
    shadowColor: 'green',
    shadowOpacity: 1,



    alignSelf: "center",
    borderRadius: 10,
    // shadowOpacity: 0.5,
    // shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5
    },
    backgroundColor: "white",
    marginVertical: 10
  },

  ReportScreentitle: {
    fontSize: 16,

    marginTop: 10
  },
  ReportScreendescription: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10
  },
  ReportScreendata: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  ReportScreenheading: {

  },
  ReportScreenauthor: {
    fontWeight: "bold",
    fontSize: 15
  },
  ReportScreendate: {
    fontWeight: "bold",
    color: "#e63946",
    fontSize: 15
  },
  ReportScreensource: {
    color: "#e63946",
    fontWeight: "bold",
    fontSize: 18
  },














  ReportScreenDatePickerContainer: {
    flex: 1,
    alignItems: "center",


  },


  ReportScreentextSubHeader: {
    fontSize: 20,
    color: "#111",
  },
  ReportScreeninputBtn: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#222",
    height: 50,
    paddingLeft: 8,
    fontSize: 18,
    justifyContent: "center",
    marginTop: 14,
  },
  ReportScreensubmitBtn: {
    backgroundColor: "green",
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 16,
    width: 200,
  },
  ReportScreencenteredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ReportScreenmodalView: {
    margin: 20,
    backgroundColor: "#080516",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  ReportScreenEndDateContainer: {
    marginTop: 15,
  },

  ReportScreenItemcontainer: {
    padding: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',

  },

  ReportScreenFilterReportContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 6,

  },
  ReportScreenFilterReportContainerText: {
    color: '#fff'

  },


  ReportScreenFilterformContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'

  },
  ReportScreenFilterText: {
    marginLeft: 90, fontSize: 15
  },
  ReportCalenderContainer: {
    width: "100%",
    paddingHorizontal: 4,

    marginTop: 14
  },
  ReportCalenderStartDateText: {
    fontSize: 18
  },
  ReportCalenderEndDateText: {
    fontSize: 18
  },




  ReportScreenItemscontainer2: {
    // flexDirection:'row',
    // alignItems:'center',
    // width:'100%',
    // flex:1,

    padding: 5,
    //ustifyContent:'space-between',
    flexDirection: 'row',


  },

  ReportScreenIndividualItemLeftcontainer: {
    width: '70%',
    // flex:1,


  },
  ReportScreenIndividualItemRightcontainer: {
    width: '30%',
    // flex:1,

  },


  ReportScreencontainer2: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    elevation: 10,
    shadowColor: 'green',
    shadowOpacity: 1,



    alignSelf: "center",
    borderRadius: 10,
    // shadowOpacity: 0.5,
    // shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5
    },
    backgroundColor: "white",

  },


















  //------------------ORDER CART ITEMS PART----------

  MakeOrderButton: {
    fontSize: 16,
    backgroundColor: 'green',
    color: 'white',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    fontWeight: 'bold',

  },
  OrderCheckOutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    alignItems: 'center',
    width: '90%',
  },
  CartOrderTotalPriceText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  CartOrderTotalText: {
    fontSize: 18,
    fontWeight: 'bold'

  },
  MakeOrderButtonContainer: {
    marginBottom: 15,
    alignItems: 'center'

  },




































  //------------ALL PRODUCTS INVENTORY SCREENS---------


  //HOTEL CATEGORIES, ROW LIST  DISPLAY
  //CUSTOMERS, FOOD, DRINKS, OTHERS, ROOMS

  InventoryAllListcontainer: {
    flex: 1,

  },
  InventoryitemView: {
    flex: 1,
    flexDirection: 'row',
    width: width - 30,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 4,
    elevation: 10,
    shadowColor: 'green',
    shadowOpacity: 1,
    marginTop: 2,
    borderRadius: 10,
    height: 80,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  InventoryImageListContainer: {
    justifyContent: 'center',
    width: '25%'

  },
  InventoryitemImage: {
    width: '80%',
    height: 60,
    borderRadius: 10,
    margin: 5,
  },
  InventorynameView: {
    justifyContent: 'center',
    width: '75%'
    //width: '43%',
    // margin: 10,


  },
  InventorypriceView1: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flex: 1,
    width: '10%',
  },

  InventorypriceView2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flex: 1,
    width: '20%',
  },


  InventorypriceView3: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flex: 1,
    width: '20%',
  },

  InventorydescText: {
    fontSize: 14,
    fontWeight: '600',
  },
  InventorynameText: {
    fontSize: 14,
    fontWeight: '600',
  },
  InventoryLastNameText: {
    fontSize: 16,
    fontWeight: '700'

  },
  InventoryUnitText: {
    fontSize: 14,
    // color: 'green',
    fontWeight: '700',
    justifyContent: 'center',

  },
  InventorypriceText: {
    fontSize: 18,
    color: 'green',
    fontWeight: '700',
    justifyContent: 'center',
  },
  InventorydiscountText: {
    fontSize: 17,
    fontWeight: '600',
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  InventoryClickableIconicon: {
    width: 50,
    height: 50,
    marginRight: 50,

  },



  InventoryIconContainer: {
    justifyContent: 'center',
    marginRight: 0,
    flex: 1,
    alignItems: 'flex-end',
    width: '10%',
    paddingRight: 10,

  },

  InventoryFoodNameView: {
    marginRight: 0,
    // flex:1,
    marginLeft: 10,
    justifyContent: 'center',
    width: '30%'

  },


























  //---------------REPORT FILTER MODAL------------------

  FilterModalcontainer: {
    flex: 1,
    padding: 16,
  },
  FilterModalfilterButton: {
    padding: 16,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  FilterModalfilterButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  FilterModalmodalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  FilterModalmodalContent: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 8,
    width: "90%",
  },
  FilterModalmodalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 6,
    color: 'white',
  },
  FilterModalapplyButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  FilterModalapplyButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  FilterModaltotalAmountText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  FilterModalorderContainer: {
    //backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    elevation: 10,
    shadowColor: 'green',
    shadowOpacity: 1,
    flex: 1,
    flexDirection: 'row',



    //alignSelf: "center",
    borderRadius: 10,
    // shadowOpacity: 0.5,
    // shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5
    },
    backgroundColor: "white",
    marginVertical: 10
  },


  ReportRangeText: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold'

  },


  ProcessOrderReportScreenFilterReportContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 6,

  },
  ProcessOrderReportScreenFilterReportContainerText: {
    color: 'black'

  },





});





export const images = {
  ratings: {
    // '1': require('../assets/rating/rating-1.png'),
    // '2': require('../assets/rating/rating-2.png'),
    // '3': require('../assets/rating/rating-3.png'),
    // '4': require('../assets/rating/rating-4.png'),
    // '5': require('../assets/rating/rating-5.png'),
  }
};