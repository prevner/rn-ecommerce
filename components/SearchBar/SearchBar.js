import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Antdesign from 'react-native-vector-icons/AntDesign'
export default function SearchBar() {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Rechercher"
        styles={{
            textInput:{
               backgroundColor: "#eee",
               borderRadius : 200,
               fontWeight : "700",
               marginTop : 1,                
            },
            textInputContainer:{
                backgroundColor : "#eee",
                borderRadius : 50,
                flexDirection : "row",
                marginRight : 10,
                alignItems : "center"
                
            },            
        }}

        renderLeftButton={()=>
        <View style={{marginLeft : 10}}>
            <Ionicons name="location-sharp" size={24} />
        </View>
        }

        renderRightButton={()=>
         <View 
           style={{
                flexDirection: "row",
                marginRight: 8,
                backgroundColor: "white",
                padding: 9,
                borderRadius: 30,
                alignItems: "center",
            }}
        > 

            <Antdesign 
                name='clockcircle' 
                size={11} 
                style={{marginRight : 5,}}
             />
           <Text>
                 Rechercher
            </Text>
         </View>
       }
       />
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flexDirection : "row",
        marginTop : 25,
    }
})