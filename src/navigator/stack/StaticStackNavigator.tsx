import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import { createStaticNavigation } from "@react-navigation/native";
import React from "react";

const RootStack = createNativeStackNavigator({
  initialRouteName:"Home",
  screens: {
    Home: {
        screen:HomeScreen,
        options:{
            
        }
    } ,
    Detail:DetailScreen,
    Profile:ProfileScreen
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function StaticStackNavigator(){
    return <Navigation/>
}