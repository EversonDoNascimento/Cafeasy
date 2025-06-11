import { Image, Text, View } from "react-native";
import Button from "../components/Button";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  return (
    <View className="bg-primary w-full h-full justify-center items-center">
      <Image
        source={require("../assets/logo-coffee-project8-without-bg.png")}
        className="w-44 h-64"
      ></Image>
      <View className="mt-8">
        <Text className="text-white text-3xl">Bem vindo(a) ao </Text>
        <Text className=" text-6xl text-accent">CafEasy</Text>
      </View>
      <Button
        onPress={() => {
          router.push("/login");
        }}
        text="Entrar"
      ></Button>
    </View>
  );
};

export default Index;
