import { Pressable, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

type Props = {
  sendData: (search: string) => void;
};
const InputSearch = ({ sendData }: Props) => {
  const [value, setValue] = useState("");
  return (
    <View className="bg-subtleHighlight rounded-full   text-text flex-row items-center justify-between">
      <TextInput
        onChange={(e) => setValue(e.nativeEvent.text)}
        onEndEditing={() => sendData(value)}
        placeholder="Pesquisar"
        className="w-[300px] px-5"
      ></TextInput>
      <Pressable
        onPress={() => sendData(value)}
        className="bg-accent rounded-full  w-14 h-14 justify-center items-center"
      >
        <FontAwesome name="search" size={22} color="white" className="" />
      </Pressable>
    </View>
  );
};

export default InputSearch;
