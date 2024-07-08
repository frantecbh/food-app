import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import {RestaurantProps} from '..'

export function ResaurantCard({data}: {data: RestaurantProps}) {
  return (
   
    <Pressable className='flex flex-col items-center'  onPress={() => console.log(`clicou no restaurante ${data.name}`)}>
      <Image source={{uri: data.image}} className='w-20 h-20 rounded-full'  />
      <Text className='text-sm mt-2 w-20 text-center leading-4' numberOfLines={2}>{data.name}</Text>
    </Pressable>

  );
}