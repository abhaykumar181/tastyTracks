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


const Register = () => {
    return(
      <SafeAreaView style={registerStyles.container}>
        <StatusBar
        animated={true}
        backgroundColor="green"
      />
        <Image
          style={registerStyles.appLogo}
          source={require('./assets/images/tastytracks-logo.png')}
        />
        <Text style={registerStyles.appTitle}>Tasty Tracks</Text>
        <Text style={registerStyles.createAccountTitle}>Create an Account</Text>
        <TextInput style={registerStyles.textInput} placeholder="Your Name"  placeholderTextColor="#fff" />
        <TextInput style={registerStyles.textInput} placeholder="Email"  placeholderTextColor="#fff" />
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TextInput style={registerStyles.flexInputs} placeholder="Phone (+91)" placeholderTextColor="#fff" keyboardType="numeric" />
          <TextInput style={registerStyles.flexInputs} placeholder="Password" placeholderTextColor="#fff" secureTextEntry={true} />
        </View>
        
        <View style={registerStyles.buttonView}>
          <Button title="Register" color="green" />
        </View>
        <Text style={registerStyles.registerHeadline}>Already have an account?</Text>
        <Pressable style={registerStyles.registerButton}>
          <Text style={registerStyles.registerButtonText}>Login Here</Text>
        </Pressable>
      </SafeAreaView>
    );
}

export default Register;

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


