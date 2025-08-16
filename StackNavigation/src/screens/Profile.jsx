import { View, Text, Button } from 'react-native'
import React from 'react'

const Profile = ({navigation, route}) => {
    const {id, name} = route.params;
  return (
    <View style={{ height:'100%', width:'100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontWeight:500, fontSize:25}}>Profile</Text>
        <Text style={{fontSize:20, marginTop:10}}>Id: {id} and Name: {name}</Text>
      <Button title='Search' onPress={() => navigation.navigate("Search")} />
    </View>
  )
}

export default Profile