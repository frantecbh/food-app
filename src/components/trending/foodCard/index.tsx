import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'


import { FoodProps } from '..'
import { Ionicons } from '@expo/vector-icons'

export function FoodCard({food}: {food: FoodProps}) {
  return (
   <Pressable className='flex flex-col rounded-xl relative'>
    <Image source={{uri: food.image}} className='w-44 h-36 rounded-xl' />

    <View className='flex flex-row absolute top-2 right-2 bg-neutral-900/90 gap-1 rounded-full px-2 py-1 items-center justify-center'>
      <Ionicons size={14} color="#ca8a04" name='star' />
      <Text className='text-white text-sm'>{food.rating}</Text>
    </View>
  <Text className='text-green-700 font-medium text-lg' >R$ {food.price}</Text>
  <Text className='text-zinc-900 mt-1'>{food.name}</Text>
  <Text className='text-neutral-600 text-sm'>{food.time} - {food.delivery}</Text>
   </Pressable>
  )
}