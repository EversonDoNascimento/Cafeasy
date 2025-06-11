import { FlatList, ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import InputSearch from "../components/InputSearch";
import CoffeeCard from "../components/Cards/CoffeeCard";

const coffee = [
  {
    id: 1,
    name: "Coromel Machioto",
    price: 2.99,
    image:
      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    name: "Coromel Machioto",
    price: 2.99,
    image:
      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    name: "Coromel Machioto",
    price: 2.99,
    image:
      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];
const Screen = () => {
  return (
    <ScrollView>
      <Header
        text={{
          title: "Bom dia, Everson",
          subtitle: "Que tal pedir um café hoje?",
        }}
      >
        <View className="absolute -bottom-7">
          <InputSearch
            sendData={(search: string) => {
              alert(search);
            }}
          ></InputSearch>
        </View>
      </Header>
      <View className="mt-16">
        <Text className="ml-6 text-2xl font-extrabold text-primary mb-2">
          Novos cafés
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          className=""
          data={coffee}
          renderItem={() => <CoffeeCard></CoffeeCard>}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      </View>
      <View className="mt-11">
        <Text className="ml-6 text-2xl font-extrabold text-primary mb-2">
          Frequentemente pedidos
        </Text>
      </View>
    </ScrollView>
  );
};

export default Screen;
