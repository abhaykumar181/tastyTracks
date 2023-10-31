import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, StatusBar, TextInput, Button, View } from "react-native";

const App = () => {
    return(
      <SafeAreaView style={splashStyles.container}>
        <StatusBar
        animated={true}
        backgroundColor="#1e3273"
      />
        <Image
          style={splashStyles.appLogo}
          source={require('./src/assets/images/tastytracks-logo.png')}
        />
        <Text style={splashStyles.appTitle}>Login to Tasty Tracks</Text>
        <TextInput style={splashStyles.textInput} placeholder="Username" />
        <TextInput style={splashStyles.textInput} placeholder="Password" secureTextEntry={true} />
        
        <View style={{padding:10}}>
          <Button
            title="Login"
            color="#1e3273"
          />
        </View>
      </SafeAreaView>
    );
}

export default App;

const splashStyles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#ddd",
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
    color:"#1e3273",
    fontFamily: "Urbanist-Bold",
    alignSelf:"center",
  },
  textInput:{
    height: 40,
    margin: 13,
    borderWidth: 2,
    padding: 10,
    borderColor:"#1e3273",
    borderRadius:5
  },
});