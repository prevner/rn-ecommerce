import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

 
 const foods = [
    {
      title: "Beachside Bar",
      image:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      description: "Cafe",
      price: "15.20",
    },
    {
      title: "Benihana",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      description: "test",
      price: "$13.50"
    },
    {
      title: "India's Grill",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      description: "Indian",
      price: "$25",
    },
    {
      title: "India' saup",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      description: "Indian",
      price: "$$",
    },
  ];



const MenuItems = ({restaurantName}) => {

const dispatch = useDispatch()
const selectItem =(item,checkboxValue)=>dispatch({
    type: "ADD_TO_CART",
    payload:{
            ...item, 
            restaurantName:restaurantName,
            checkboxValue:checkboxValue
        },
    
})

const cartItems = useSelector (
  (state) => state.cartReducer.selectedItems.items
)

const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title))
  
  
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
          {foods.map((food, index) => (
            <View key={index}>
              <View style={styles.MenuItems}>
                <BouncyCheckbox
                  iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                  fillColor="green"
                  isChecked={isFoodInCart(food, cartItems)}
                  onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                />
                <FoodInfo food={food} />
                <FoodImage food={food} />
              </View>
              <Divider width={0.5} orientation='vertical' 
                 style={{marginHorizontal:20,}}
              />
             
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
        margin: 5,
    },
    title: {
        fontSize: 19,
        fontWeight: "600",
      },
})