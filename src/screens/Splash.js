import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View, StatusBar } from "react-native";

const Splash = () => {
    return(
      <SafeAreaView style={splashStyles.container}>
        <StatusBar
        animated={true}
        backgroundColor="#1e3273"
      />
        <View style={splashStyles.logoContainer}>
          <Image
            style={splashStyles.appLogo}
            source={require('./src/assets/images/tastytracks-logo.png')}
          />
          <Text style={splashStyles.appTitle}>Tasty Tracks</Text>
          <Text style={splashStyles.tagLine}>Blue Apron Unforgettable meals. Delivered.</Text>
        </View>
        <View>
          <Text style={splashStyles.footerText}>Application built by Abhay Kumar</Text>
        </View>
      </SafeAreaView>
    );
}

export default Splash;

const splashStyles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#5bb45a",
    justifyContent:"center",
    paddingHorizontal:10,
  },
  logoContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  appLogo:{
    resizeMode: 'contain',
    height: 100,
    width: 200,
  },
  appTitle:{
    fontSize:30,
    color:"#fff",
    fontFamily: "Urbanist-Bold"
  },
  tagLine:{
    fontSize:18,
    color:"#fff",
    fontFamily: "Urbanist-Italic"
  },
  footerText:{
    textAlign:"center",
    color:"#fff",
    fontFamily: "Urbanist-Italic",
    fontSize:16,
    padding:15,
  }
});