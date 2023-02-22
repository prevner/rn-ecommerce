import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'


 const foods = [
    {
      title: "Beachside Bar",
      image:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      description: "Cafe",
      price: "$$",
    },
    {
      title: "Benihana",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      description: "test",
      price: "$$"
    },
    {
      title: "India's Grill",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      description: "Indian",
      price: "$$",
    },
    {
      title: "India' saup",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      description: "Indian",
      price: "$$",
    },
  ];

const MenuItems = () => {
  
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
          {foods.map((food, index) => (
            <View key={index}>
              <View style={styles.MenuItems}>
               
                <FoodInfo food={food} />
                <FoodImage food={food} />
              </View>
             
            </View>
          ))}
        </ScrollView>
      );
}

const FoodInfo = (props)=>(
   
    <View style={{width:240, justifyContent: "space-evenly"}}>
        <Text style={styles.title}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props)=>(
    <View>
        <Image 
            source={{uri:props.food.image}}
            style={{width:100,height:100, borderRadius:8,}}
        />
    </View>
)

export default MenuItems

const styles = StyleSheet.create({
    MenuItems:{
        flexDirection : "row",
        justifyContent : "space-between",
        margin: 20,
    },
    title: {
        fontSize: 19,
        fontWeight: "600",
      },
})