import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from "./Screen/Login";
import Scan from "./Screen/Scan";

const HomeStack = createStackNavigator();
const ScanStack = createStackNavigator();
const LoginStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
function Home() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Login" component={Login} />
            <HomeStack.Screen name="Scan" component={Scan} />
        </HomeStack.Navigator>
    );
}
function LoginScreen() {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen name="CardHistory" component={CardHistory} />
        </LoginStack.Navigator>
    );
}
function ScanScreen() {
    return (
        <ScanStack.Navigator>
            <ScanStack.Screen name="CardHistory" component={CardHistory} />
        </ScanStack.Navigator>
    );
}
 export default function App() {
     return 
 }