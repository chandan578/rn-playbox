import { View, Text, Button } from 'react-native'
import React from 'react'
import Profile from './Profile'

const Home = ({navigation}) => {
  return (
    <View style={{ height:'100%', width:'100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize:25, fontWeight:500}}>Home</Text>
      <Button title='Profile' onPress={() => navigation.navigate("Profile", {id: 1, name: "chandan"})} />
    </View>
  )
}

export default Home