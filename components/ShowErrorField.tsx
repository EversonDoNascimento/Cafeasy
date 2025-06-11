import { Text, View } from "react-native";

type Props = {
  text: string | undefined;
};
const ShowErrorField = ({ text }: Props) => {
  return (
    <View className="absolute -bottom-6">
      <Text className="text-red-700">{text || "Campo obrigatório"}</Text>
    </View>
  );
};

export default ShowErrorField;
