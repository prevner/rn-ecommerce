import { SafeAreaView, StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('livrer');
  return (
    <View style={styles.MenuButton}>
      <HeaderButton 
            text="livrer"
            btnColor="black"
            textColor="white"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
       />
      <HeaderButton 
            text="Choix"
            btnColor="white"
            textColor="black"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
       />
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