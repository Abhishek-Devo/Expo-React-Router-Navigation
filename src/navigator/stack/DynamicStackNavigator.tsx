import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import * as React from "react"
import ProfileScreen from "../../screens/ProfileScreen";
import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";

const Stack = createNativeStackNavigator();

function MyStack(){
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor:"#111827",
            },
            headerTintColor:"fff",
            headerTitleStyle:{
                fontWeight:"bold"
            },
            animation:"default"
        }}
        >
            <Stack.Screen name="Home" component={HomeScreen} 
            options={{
                headerShown:false,
                title:"My Home Page",
                headerStyle:{backgroundColor:"#111827"},
                headerTitleAlign:"center",
                headerTintColor:"#fff",
                headerTitleStyle:{color:"",fontWeight:"bold"}
            }}
        
            />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
    )
}

export default function DynamicStackNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}