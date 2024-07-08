import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { FoodCard } from './foodCard';


export interface FoodProps {
  id: string
  name: string
  price: number
  time: string
  delivery: number
  rating: number
  image: string
  restaurantId: string
}



export function TrendingFoods() {

  const [foods, setFoods] = useState<FoodProps[]>([])


  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.0.69:3000/foods")
      const data = await response.json()
      setFoods(data)
    }
    getFoods()
  }, [])
  

  return (
   <FlatList
   data={foods}
   renderItem={({item}) => <FoodCard food={item} />}
    horizontal
    contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16}}
    showsHorizontalScrollIndicator={false}
   />
  );
}