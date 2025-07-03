import ButtonOrder from "@/components/ButtonOrder";
import EditCoffeeCard from "@/components/Cards/EditCoffeeCard";
import ViewDrink from "@/components/ViewDrink";
import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import ButtonChoiceSizeDrink from "../../../components/ButtonChoiceSizeDrink";

const Drink = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const [showModal, setShowModal] = useState(true);
  const [sizeDrink, setSizeDrink] = useState(0);
  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  }, [navigation]);

  return (
    <>
      <ScrollView contentContainerStyle={{ gap: 24 }}>
        {/* View Drink */}
        <ViewDrink></ViewDrink>
        {/* Description */}
        <View className=" mt-24 mx-6 gap-2">
          <Text className="text-2xl font-bold">Caramel Macchiato</Text>
          <Text className="text-lg text-gray-500 text-left">
            Mollit ea ea aliqua fugiat labore consectetur minim fugiat
            adipisicing enim. Esse eu sint cillum ut ipsum voluptate duis in
            exercitation ea commodo. Veniam sit velit reprehenderit tempor nisi
            veniam qui exercitation ea nostrud anim.
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

        <View className="px-6 ">
          <Text className="text-xl font-bold">Personalize o seu café</Text>
          <View className="flex-row justify-between mt-2">
            <EditCoffeeCard
              isHas={true}
              title="Leite"
              icon={require("@/assets/icon-milk.png")}
            ></EditCoffeeCard>
            <EditCoffeeCard
              isHas={true}
              title="Creme"
              icon={require("@/assets/icon-cream.png")}
            ></EditCoffeeCard>
            <EditCoffeeCard
              isHas={false}
              title="Cafeína"
              icon={require("@/assets/icon-bolt.png")}
            ></EditCoffeeCard>
            <Pressable
              onPress={() => setShowModal(true)}
              className="justify-center items-center gap-1 ml-8"
            >
              <View className="bg-accent rounded-full w-20 h-20 justify-center items-center">
                <FontAwesome
                  name="pencil"
                  size={28}
                  color="white"
                ></FontAwesome>
              </View>
              <Text className="text-lg text-accent">Modificar</Text>
            </Pressable>
          </View>
        </View>

        <View className="mb-20 px-6 flex-row justify-between items-center mt-2">
          <View>
            <Text className="text-lg ">Preço Total</Text>
            <View className="flex-row items-end h-8">
              <Text>R$</Text>
              <Text className="text-2xl font-bold"> 9,90</Text>
            </View>
          </View>
          <ButtonOrder
            onPress={() => {}}
            text="Adicionar ao carrinho"
          ></ButtonOrder>
        </View>
      </ScrollView>
      <Modal visible={showModal} animationType="slide">
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white h-[70%] w-full rounded-t-2xl p-4">
            <Text>ola</Text>
            <Pressable onPress={() => setShowModal(false)}>
              <Text>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Drink;
