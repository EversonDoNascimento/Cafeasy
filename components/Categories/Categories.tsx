import { useEffect, useState } from "react";
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

type Props = {
  sendChoice: (id: number) => void;
};
const Categories = ({ sendChoice }: Props) => {
  const [activatedCategory, setActivatedCategory] = useState(1);
  useEffect(() => {
    sendChoice(activatedCategory);
  }, [activatedCategory, sendChoice]);
  return (
    <View className="mt-11 mb-4">
      <Text className="font-bold text-xl  ml-4">Categorias</Text>
      <FlatList
        horizontal
        data={categories}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        style={{ paddingHorizontal: 11 }}
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
