import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import CardCategory from "./CardCategory";

const categories = [
  {
    id: 1,
    name: "Cafés Quentes",
    icon: "coffee",
  },
  {
    id: 2,
    name: "Bebidas Geladas",
    icon: "coffee",
  },
  {
    id: 3,
    name: "Cafés Frios",
    icon: "coffee",
  },
  {
    id: 4,
    name: "Cafés Com Leite",
    icon: "coffee",
  },
];
const Categories = () => {
  const [activatedCategory, setActivatedCategory] = useState(1);

  return (
    <View className="mt-16 ml-8">
      <Text className="font-bold text-xl">Categorias</Text>
      <FlatList
        horizontal
        data={categories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <CardCategory
            activated={activatedCategory}
            setActivatedCategory={(id: number) => setActivatedCategory(id)}
            isEnd={index === categories.length - 1}
            name={item.name}
            icon={item.icon}
            id={item.id}
          ></CardCategory>
        )}
      ></FlatList>
    </View>
  );
};
export default Categories;
