import { View, Text, Pressable } from 'react-native'
import {Ionicons, Feather} from '@expo/vector-icons'
import React from 'react'

export function Header() {
  return (
    <View className=' w-full items-center justify-between flex-row'>
      <Pressable  className='bg-white w-10 h-10 flex items-center justify-center rounded-full'>
        <Ionicons name='menu' size={20} color="#121212" />
      </Pressable>

      <View className='items-center justify-center'>
        <Text className='text-center text-sm text-slate-400'>Localização</Text>
        <View className='flex-row items-center justify-center gap-1' >
        <Feather name='map-pin' size={14} color="#FF0000" />
        <Text className='text-lg font-bold'>Belo Horizonte</Text>
        </View>        
      </View>

      <Pressable  className='bg-white w-10 h-10 flex items-center justify-center rounded-full'>
        <Feather name='bell' size={20} color="#121212" />
      </Pressable>
 
    </View>
  )
}