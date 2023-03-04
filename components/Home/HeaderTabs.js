import { SafeAreaView, StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const HeaderTabs = (props) => {
  return (
    <View style={styles.MenuButton}>
      <HeaderButton 
            text="Delivery"
            btnColor="black"
            textColor="white"
            activeTab={props.activeTab}
            setActiveTab={props.setActiveTab}
       />
      {/* <HeaderButton 
            text="Pickup"
            btnColor="white"
            textColor="black"
            activeTab={props.activeTab}
            setActiveTab={props.setActiveTab}
       /> */}
    </View>
  )
}

const HeaderButton = (props)=>(
    <TouchableOpacity style={{
        backgroundColor:props.activeTab===props.text ? "black" : "white",
        paddingVertical : 6,
        paddingHorizontal: 16,
        borderRadius : 30,}    
    }
    onPress={()=>props.setActiveTab(props.text)}
    >
        <Text style={{
                     fontWeight : "900",
                     fontSize : 16, 
                     color: props.activeTab === props.text ? "white" : "black",
                     }}>
                    {props.text}
        </Text>
    </TouchableOpacity>
)

export default HeaderTabs

const styles = StyleSheet.create({
    MenuButton:{
        flexDirection : "row",
        alignSelf : "center",
              
    },  


})