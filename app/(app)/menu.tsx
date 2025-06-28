import Categories from "@/components/Categories/Categories";
import Header from "@/components/Header";
import InputSearch from "@/components/InputSearch";
import { View } from "react-native";

const Menu = () => {
  return (
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
      <Categories
        sendChoice={(id: number) => {
          alert(id);
        }}
      ></Categories>
    </>
  );
};

export default Menu;
