import React from "react";
import { 
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TextInput,
  Button,
  View,
  Pressable
} from "react-native";


const OrderItems = () => {
    return(
      <SafeAreaView style={registerStyles.container}>
        <StatusBar
        animated={true}
        backgroundColor="green"
      />
       
        <Text style={registerStyles.appTitle}>Order Items Screen</Text>
        
      </SafeAreaView>
    );
}

export default OrderItems;

const registerStyles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#5bb45a",
    justifyContent:"center",
    paddingHorizontal:10,
  },
  appLogo:{
    resizeMode: 'contain',
    height: 100,
    width: 100,
    alignSelf:"center",
  },
  appTitle:{
    fontSize:25,
    color:"#fff",
    fontFamily: "Urbanist-Bold",
    alignSelf:"center",
    paddingBottom:13
  },
  createAccountTitle:{
    fontSize:18,
    fontFamily: "Urbanist-Bold",
    alignSelf:"center",
    color:"#fff"
  },
  textInput:{
    height: 40,
    margin: 11,
    borderWidth: 2,
    padding: 10,
    borderColor:"#fff",
    color:"#fff",
    borderRadius:5
  },
  flexInputs:{
    flex:1,
    height: 40,
    margin: 11,
    borderWidth: 2,
    padding: 10,
    borderColor:"#fff",
    color:"#fff",
    borderRadius:5
  },
  buttonView:{
    margin:13,
    color:"#fff",
  },
  registerHeadline:{
    color:"#fff",
    alignSelf:"center",
  },
  registerButton:{
    alignSelf:"center",
  },
  registerButtonText:{
    color:"green",
    textDecorationLine:"underline",
    fontFamily: "Urbanist-Bold",
  }
});


