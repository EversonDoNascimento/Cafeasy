import { Pressable, Text } from "react-native";

type Props = {
  onPress: () => void;
  text: string;
};
const Button = ({ onPress, text }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="bg-accent  rounded-2xl px-11 py-3 mt-16"
    >
      <Text className="text-white text-xl font-bold">{text}</Text>
    </Pressable>
  );
};

export default Button;
