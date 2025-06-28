import CoffeeCard from "@/components/Cards/CoffeeCard";
import Header from "@/components/Header";
import InputSearch from "@/components/InputSearch";
import { coffee } from "@/CONSTANTS/coffee";
import { FlatList, Text, View } from "react-native";

const Home = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={coffee}
      ListFooterComponent={() => {
        return <View className="h-32"></View>;
      }}
      renderItem={() => <CoffeeCard isSmall={false}></CoffeeCard>}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={() => (
        <>
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
              Novos cafés
            </Text>
            <FlatList
              horizontal
              data={coffee}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <CoffeeCard isSmall={true} />}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <Text className="ml-6 text-2xl font-extrabold text-primary mb-2 mt-11">
            Frequentemente pedidos
          </Text>
        </>
      )}
    ></FlatList>
  );
};

export default Home;
