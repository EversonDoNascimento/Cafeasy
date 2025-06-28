import CoffeeCard from "@/components/Cards/CoffeeCard";
import Categories from "@/components/Categories/Categories";
import Header from "@/components/Header";
import InputSearch from "@/components/InputSearch";
import { coffee } from "@/CONSTANTS/coffee";
import { FlatList, View } from "react-native";

const Menu = () => {
  return (
    <FlatList
      ListHeaderComponent={() => (
        <>
          <Header
            text={{
              title: "Menu",
              subtitle: "",
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
          <Categories sendChoice={(id: number) => {}}></Categories>
        </>
      )}
      data={coffee}
      keyExtractor={(item) => item.id.toString()}
      columnWrapperStyle={{
        justifyContent: "center",
      }}
      renderItem={() => (
        <CoffeeCard
          isSmall={true}
          isFavorite={false}
          isMenu={true}
        ></CoffeeCard>
      )}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => <View className="h-32"></View>}
    ></FlatList>
  );
};

export default Menu;
