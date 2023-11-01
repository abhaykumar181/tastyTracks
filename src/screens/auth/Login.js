import React, { useEffect } from "react";
import { 
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TextInput,
  Button,
  View,
  Pressable, 
  } from "react-native";

const Login = () => {
    return(
      <SafeAreaView style={loginStyles.container}>
        <StatusBar
        animated={true}
        backgroundColor="green"
      />
        <Image
          style={loginStyles.appLogo}
          source={require('../../../assets/images/tastytracks-logo.png')}
        />
        <Text style={loginStyles.appTitle}>Login to Tasty Tracks</Text>
        <TextInput style={loginStyles.textInput} placeholder="Username"  placeholderTextColor="#fff" />
        <TextInput style={loginStyles.textInput} placeholder="Password" placeholderTextColor="#fff" secureTextEntry={true} />
        
        <View style={loginStyles.buttonView}>
          <Button title="Login" color="green" />
        </View>
        <Text style={loginStyles.registerHeadline}>Don't have an account?</Text>
        <Pressable style={loginStyles.registerButton}>
          <Text style={loginStyles.registerButtonText}>Register Here</Text>
        </Pressable>
      </SafeAreaView>
    );
}

export default Login;

const loginStyles = StyleSheet.create({
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
  textInput:{
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
    color:"#fff",
    fontFamily: "Urbanist-Bold",
  }
});