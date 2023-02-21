import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/Header/HeaderTabs';
import SearchBar from '../components/SearchBar/SearchBar';
import Categories from '../components/Categories.js/Categories';
import RestaurantItem from '../components/Restaurants/RestaurantItem/RestaurantItems';

export default function Home  () {
  return (
    <SafeAreaView style={styles.Container}>
        <View style={styles.Header}>
           <HeaderTabs />
           <SearchBar />           
        </View>
        <ScrollView showsVerticalScrollIndicator ={false}>
          <Categories/>
          <RestaurantItem/>
          
        </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  Container:
    {      
      flex: 1,
      backgroundColor : "#eee",
    },
    Header:
    {
      backgroundColor : "white",
      marginTop : 35,  
      padding : 15
    },
})