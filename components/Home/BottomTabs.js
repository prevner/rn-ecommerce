import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomTabs = () => {
  return (
    <View style={{ 
            flexDirection : "row", 
            margin:10,
            marginHorizontal:30,
             justifyContent: "space-between",
             }}>

      <Icon icon='home' text='Accueil'/> 
      {/* <Icon icon='search' text='Browse'/> 
      <Icon icon='shopping-bag' text='Grocery'/>  */}
      <Icon icon='receipt' text='Commander'/> 
      <Icon icon='user' text='Profile'/> 
      
    </View>
  )
}

const Icon = (props)=>(
<TouchableOpacity>
    <View>
        <FontAwesome5 
            name = {props.icon}
            size = {25}
            style = {{ 
                marginBottom: 3,
                alignSelf:"center"
            }}
            />
        <Text>{props.text}</Text>
    </View>
</TouchableOpacity>
)
export default BottomTabs

const styles = StyleSheet.create({})