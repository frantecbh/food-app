import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

import { RestaurantProps } from '..'
import { Ionicons } from '@expo/vector-icons'

export function RetaurantItem({data}: {data: RestaurantProps}) {
  return (
    <Pressable className='flex flex-row items-end justify-start gap-2'>
     <Image source={{uri: data.image}} className='w-20 h-20 rounded-full' />
     <View className='flex gap-2' >
      <Text className='text-base text-black leading-4 font-bold' numberOfLines={2}>{data.name}</Text>
      <View className='flex flex-row items-center'>
        <Ionicons name='star' size={14} color="#ca8a04" />
        <Text>4.5</Text>
      </View>
     
     </View>
    </Pressable>
  )
}