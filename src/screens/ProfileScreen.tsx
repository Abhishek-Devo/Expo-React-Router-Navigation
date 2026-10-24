import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {Button} from "@react-navigation/elements"
import { Link ,useNavigation} from '@react-navigation/native'

const ProfileScreen = () => {
    const navigation=useNavigation<any>()
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button onPress={()=>navigation.popTo("Home")}>Go to Home</Button>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})