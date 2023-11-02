import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from "./src/screens/auth/Register";
import Login from "./src/screens/auth/Login";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderItems from "./src/screens/main/OrderItems";
import Profile from "./src/screens/main/Profile";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Stack = createNativeStackNavigator();
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
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    const OrderItemsNavigator = () => {
      return (
        <NavigationContainer>
           <Tab.Navigator 
           screenOptions={{
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor:"grey",
            tabBarHideOnKeyboard: true,
            tabBarLabelPosition: "beside-icon",
            tabBarStyle: {
              borderTopWidth: 0,
              borderRadius:10,
            },
          }}
        >
            <Tab.Screen
              name="Orders Items"
              component={OrderItems}
              options={{
                headerShown: false,
                tabBarLabel: '',
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="fastfood" color={color} size={size}  />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: false,
                tabBarLabel: '',
                tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="person" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }

    return(
      (auth === true) ? <AuthNavigator />: <OrderItemsNavigator />
    );
}

export default App;
