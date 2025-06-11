import { Image, Pressable, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
type Props = {};
const CoffeeCard = () => {
  return (
    <Pressable
      style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.10)" }}
      className="my-2 w-48 justify-center items-center rounded-3xl  gap-2 mx-2"
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        className="w-40 h-36 rounded-3xl mt-2"
      ></Image>
      <View className="w-full ml-8">
        <Text
          style={{ lineHeight: 20 }}
          className="text-xl font-bold max-w-24 text-primary"
        >
          Coromel Machioto
        </Text>
      </View>
      <View className="flex-row justify-between w-full items-center">
        <View className="ml-4 flex-row items-center gap-1">
          <Text className="font-normal text-primary">R$</Text>
          <Text className=" font-bold text-2xl text-primary">2.99</Text>
        </View>
        <View className="bg-accent rounded-tl-3xl rounded-br-3xl justify-center items-center w-16 h-12">
          <FontAwesome name="plus" size={20} color="white"></FontAwesome>
        </View>
      </View>
    </Pressable>
  );
};

export default CoffeeCard;
