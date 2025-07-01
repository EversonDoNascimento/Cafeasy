import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import Counter from "./Counter";
const ViewDrink = () => {
  const router = useRouter();
  return (
    <Animated.View
      entering={FadeInUp.duration(500)}
      style={{ elevation: 4 }}
      className="w-full py-16  justify-center items-center bg-primary rounded-b-3xl relative"
    >
      <Text className="text-xl font-bold text-accent absolute top-11 ">
        Cafeasy
      </Text>
      <View className="w-full flex-row justify-between px-8 mt-4">
        <Pressable onPress={() => router.back()}>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </Pressable>
        <Pressable className="absolute items-center justify-center bg-accent w-11 h-11 right-4 rounded-full">
          <FontAwesome name="heart-o" size={24} color="white" />
        </Pressable>
      </View>
      <View className="h-56"></View>
      <View className="w-full flex-row h-96  mt-11 absolute -bottom-24  px-6 justify-between items-end">
        <Counter
          sendQuantity={(quantity: number) => console.log(quantity)}
        ></Counter>
        <Image
          source={require("@/assets/coffee_image.png")}
          className="w-72 h-[23rem] "
        ></Image>
        <View className="w-14"></View>
      </View>
    </Animated.View>
  );
};

export default ViewDrink;
