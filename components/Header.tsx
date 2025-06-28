import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

type Props = {
  text: {
    title?: string;
    subtitle?: string;
  };
  children?: React.ReactNode;
};
const Header = ({ text, children }: Props) => {
  return (
    <Animated.View
      entering={FadeInUp.duration(500)}
      style={{ elevation: 4 }}
      className="w-full py-16  justify-center items-center bg-primary rounded-b-3xl relative"
    >
      <Text className="text-xl font-bold text-accent absolute top-11">
        Cafeasy
      </Text>
      <Image
        source={require("../assets/icon-coffee.png")}
        className="opacity-20 absolute -top-7 rotate-45 -right-14 w-72 h-72"
      ></Image>
      <Image
        source={require("../assets/icon-coffee.png")}
        className="opacity-10 absolute -top-12 -rotate-45 right-11 w-40 h-40"
      ></Image>
      <Image
        source={require("../assets/icon-coffee.png")}
        className="opacity-10 absolute -top-16 rotate-45 -right-12 w-40 h-40"
      ></Image>
      <View className="justify-between items-center mt-4 px-8 flex-row">
        <View className="flex-1 ">
          <Text className="text-white text-2xl">{text.title}</Text>
          {text.subtitle !== "" && (
            <Text className="text-white/50 text-lg">{text.subtitle}</Text>
          )}
        </View>
        <View className=" ">
          <FontAwesome name="bell" size={30} color="white" />
        </View>
      </View>

      {children}
    </Animated.View>
  );
};

export default Header;
