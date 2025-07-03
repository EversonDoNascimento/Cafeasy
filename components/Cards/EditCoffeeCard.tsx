import { Image, Text, View } from "react-native";

type Props = {
  icon: object;
  title: string;
  isHas: boolean;
};
const EditCoffeeCard = ({ icon, title, isHas }: Props) => {
  return (
    <View className=" w-20 gap-2  py-4 justify-center items-center rounded-full border-2 border-accent/50 bg-accent/10">
      <Image source={icon} className="w-14 h-14"></Image>
      <View className="justify-center items-center">
        <Text className=" text-accent/80">{title}</Text>
        <Text className="font-bold text-accent ">{isHas ? "Sim" : "Não"}</Text>
      </View>
    </View>
  );
};

export default EditCoffeeCard;
