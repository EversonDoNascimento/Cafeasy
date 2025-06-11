import { Pressable, Text, View } from "react-native";

type Props = {
  onPress: () => void;
  text: string;
};
export const SubmitButton = ({ onPress, text }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="bg-primary rounded-xl px-11 py-3 mt-16 justify-center items-center"
    >
      <Text className="text-white text-xl font-bold ">{text}</Text>
    </Pressable>
  );
};
