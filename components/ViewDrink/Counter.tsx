import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  sendQuantity: (quantity: number) => void;
};
const Counter = ({ sendQuantity }: Props) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <View className="w-12 h-32 mb-8  rounded-full gap-5 py-3 bg-accent justify-center items-center">
      <Pressable
        className=" w-full  items-center justify-center rounded-full"
        onPress={() => {
          setQuantity(quantity + 1);
          sendQuantity(quantity + 1);
        }}
      >
        <FontAwesome name="plus" size={15} color="white"></FontAwesome>
      </Pressable>
      <Text className="text-white text-lg font-bold">{quantity}</Text>
      <Pressable
        className=" w-full  items-center justify-center rounded-full"
        onPress={() => {
          if (quantity < 1) return;
          setQuantity(quantity - 1);
          sendQuantity(quantity - 1);
        }}
      >
        <FontAwesome name="minus" size={15} color="white"></FontAwesome>
      </Pressable>
    </View>
  );
};

export default Counter;
