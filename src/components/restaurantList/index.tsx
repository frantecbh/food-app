import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RetaurantItem } from './item'


export interface RestaurantProps {
  id: string
  name: string
  image: string
}

export function RestaurantList() {


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
    <View className='px-4 flex-1 w-full mb-10 gap-4'>
     {
      restaurants.map((item, i) => (
        <RetaurantItem key={i} data={item} />
      ))
     }
    </View>
  )
}