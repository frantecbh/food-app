import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";

import { ResaurantCard } from "./restaurantCard";


export interface RestaurantProps {
  id: string
  name: string
  image: string
}



export function Restaurants() { 

  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([])

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.0.69:3000/restaurants")
      const data = await response.json()
      setRestaurants(data)
    }
    getFoods()
  }, [])

  return (
    <FlatList
    data={restaurants}
    renderItem={({item}) => <ResaurantCard data={item}  />}
     horizontal
     contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16}}
     showsHorizontalScrollIndicator={false}
    />
  );
}