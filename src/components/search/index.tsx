import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, TextInput } from 'react-native';




export function Search() {
  return (
    <View className='flex-row w-full border border-slate-500 rounded-full items-center gap-2 px-4 h-14 bg-transparent'>
      <Feather name='search' size={24} color="#647486" />
      <TextInput className='flex-1 w-full h-full bg-transparent'
      placeholder='Procure sua comida'
      />
    </View>
  );
}