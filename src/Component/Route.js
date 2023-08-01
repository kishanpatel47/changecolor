import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./RegisterScreen";
import Login from "./Login";


const RootStack= createNativeStackNavigator();
const Route =()=>{
return(
    <NavigationContainer>
    <RootStack.Navigator initialRouteName="Login">
  
    <RootStack.Screen name="Login" component={Login}/>
    <RootStack.Screen name="RegisterScreen" component={RegisterScreen}/>


    </RootStack.Navigator>
    </NavigationContainer>
)
}
export default Route;