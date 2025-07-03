import { Pressable, Text } from "react-native";

type Props = {
  onPress: () => void;
  text: string;
};

const ButtonOrder = ({ onPress, text }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="bg-primary rounded-2xl px-11 py-5  justify-center items-center"
    >
      <Text className="text-white text-xl font-bold ">{text}</Text>
    </Pressable>
  );
};

export default ButtonOrder;
