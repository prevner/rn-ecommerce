import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import About from '../components/RestaurantDetails/About/About'
import { Divider } from '@rneui/themed';
import MenuItems from '../components/RestaurantDetails/MenuItems/MenuItems';
import ViewCart from '../components/RestaurantDetails/ViewCart/ViewCart';

const RestaurantDetails = ({route, navigation}) => {
  return (
    <View style={styles.Container}>
      <About route={route} />
      <Divider width={1.8} style={{marginVertical : 20}}/>
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name}/>

    </View>
  )
}

export default RestaurantDetails

const styles = StyleSheet.create({
  Container:
  {      
    flex: 1,
    backgroundColor : "#eee",
  },
})