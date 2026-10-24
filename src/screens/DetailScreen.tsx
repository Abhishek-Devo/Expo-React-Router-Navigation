import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const DetailScreen = ({route}:any) => {

    const {username}=route.params

    const navigation=useNavigation<any>()

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Abhishek"
        })
    },[navigation])
  return (
    <View>
      <Text>DetailScreen , Hello {username}</Text>
      <Button title='go to profile' onPress={()=>navigation.navigate("Profile")}/>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})