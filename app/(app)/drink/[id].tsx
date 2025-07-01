import ViewDrink from "@/components/ViewDrink";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ButtonChoiceSizeDrink from "../../../components/ButtonChoiceSizeDrink";

const Drink = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const [sizeDrink, setSizeDrink] = useState(0);
  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={{ gap: 20 }}>
      {/* View Drink */}
      <ViewDrink></ViewDrink>
      {/* Description */}
      <View className=" mt-24 mx-6 gap-2">
        <Text className="text-2xl font-bold">Caramel Macchiato</Text>
        <Text className="text-lg text-gray-500 text-left">
          Mollit ea ea aliqua fugiat labore consectetur minim fugiat adipisicing
          enim. Esse eu sint cillum ut ipsum voluptate duis in exercitation ea
          commodo. Veniam sit velit reprehenderit tempor nisi veniam qui
          exercitation ea nostrud anim.
        </Text>
      </View>

      <View>
        <View className="justify-between items-center  px-6 flex-row">
          <Text className="text-xl font-bold">Tamanho</Text>
          <Text className="text-xl">
            {(sizeDrink === 0 && "250ml") ||
              (sizeDrink === 1 && "350ml") ||
              (sizeDrink === 2 && "500ml")}
          </Text>
        </View>
        <View className="mt-2 flex-row justify-evenly ">
          <ButtonChoiceSizeDrink
            isActived={sizeDrink === 0}
            onPress={() => setSizeDrink(0)}
            title="Pequeno"
          ></ButtonChoiceSizeDrink>
          <ButtonChoiceSizeDrink
            isActived={sizeDrink === 1}
            onPress={() => setSizeDrink(1)}
            title="Médio"
          ></ButtonChoiceSizeDrink>
          <ButtonChoiceSizeDrink
            isActived={sizeDrink === 2}
            onPress={() => setSizeDrink(2)}
            title="Grande"
          ></ButtonChoiceSizeDrink>
        </View>
      </View>
    </ScrollView>
  );
};

export default Drink;
