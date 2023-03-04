import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React,{useState, useEffect}  from 'react';
import HeaderTabs from '../components/Home/HeaderTabs';
import SearchBar from '../components/Home/SearchBar';
import Categories from '../components/Home/Categories';
import { Divider } from 'react-native-elements';
import RestaurantItems, { localRestaurants } from '../components/Home/RestaurantItems';
import BottomTabs from '../components/Home/BottomTabs';


const YELP_API_KEY ="7S0G59Y0-DMbKWnNfe-TPidrSYxf4bHl5L1E3hGl6lsELiGTPABbleLY5lStg8z7_5gw1t5kfKVHaJzWlzblGfXmEno4n-Cx3fmXc0t0kH-JeR8QFt_-8tpf_R_0Y3Yx";

export default function Home  ({navigation}) {

const [restaurantData, setRestaurantData] = useState(localRestaurants);
const [city, setCity] = useState("San Francisco");
const  [activeTab, setActiveTab] = useState("Delivery")

  const getRestaurantsFromYelp = () => {
  const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };

  return fetch(yelpUrl, apiOptions)
  .then((res) => res.json())
  .then((json) =>
    setRestaurantData(
      json.businesses.filter((business) =>
        business.transactions.includes(activeTab.toLowerCase())
      )
    )
  );

    
};

useEffect(() => {
  getRestaurantsFromYelp();
}, [city,activeTab]);
    
  return (
    <SafeAreaView style={styles.Container}>
        <View style={styles.Header}>
           <HeaderTabs  activeTab ={activeTab} setActiveTab={setActiveTab}/>
           <SearchBar  cityhandler= {setCity}/>           
        </View>
        <ScrollView showsVerticalScrollIndicator ={false}>
           {/*  <Categories/> */}
          <RestaurantItems 
                restaurantData={restaurantData}
                navigation={navigation}
          />        
        </ScrollView>
        <Divider width={1}/>
        <BottomTabs  />
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