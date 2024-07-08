import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import PagerView from 'react-native-pager-view'


export function Banner() {
  return (
    <View className='w-full h-36 md:h-60 rounded-2xl mt-5 mb-4' >
      <PagerView style={{flex: 1}} initialPage={0} pageMargin={14}>
        <Pressable className='w-full rounded-2xl h-36 md:h-60' key={1} onPress={() => console.log('clicou no banner 1') }>
          <Image className='w-full h-36  md:h-60 rounded-2xl'
            source={require("../../assets/banner1.jpg")}
          />
        </Pressable>
        <Pressable className='w-full rounded-2xl h-36 md:h-60' key={2} onPress={() => console.log('clicou no banner 2') }>
          <Image className='w-full h-36 md:h-60 rounded-2xl'
            source={require("../../assets/banner2.jpg")}
          />
        </Pressable>
      </PagerView>
     
    </View>
  )
}