import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from "./src/screens/auth/Register";
import Login from "./src/screens/auth/Login";

const Tab = createBottomTabNavigator();

const App = () => {
  // Will do it later with JWT token and async storage.
  const [auth, setAuth] = useState(false);

    useEffect(() => {
      if(Platform.OS == "android"){
          SplashScreen.hide();
        }
    }, []);

    const AuthNavigator = () => {
      return (
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Login">
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
    return(       
      <AuthNavigator />
    );
}

export default App;
