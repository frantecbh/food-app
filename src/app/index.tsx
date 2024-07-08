import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";

import Constants from 'expo-constants'
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantList } from "../components/restaurantList";


const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{marginTop: statusBarHeight + 8}}>
          <Header />
          <Banner />
          <Search />
      </View>
      <Section name="Comidas em Alta" label="Veja mais" size="text-2xl" action={() => console.log("clicou aqui")}  />
        <TrendingFoods />
        <Section name="Famosos DevFood" label="Veja todos" size="text-xl" action={() => console.log("clicou aqui")}  />
        <Restaurants />
        <Section name="Resaurantes" label="Veja todos" size="text-xl" action={() => console.log("clicou aqui")}  />
          <RestaurantList />
    </ScrollView>
  );
}
