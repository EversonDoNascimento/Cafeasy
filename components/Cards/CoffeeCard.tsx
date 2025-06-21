import { FontAwesome } from "@expo/vector-icons";
import clsx from "clsx";
import { Image, Pressable, Text, View } from "react-native";
type Props = {
  isSmall: boolean;
};
const CoffeeCard: React.FC<Props> = ({ isSmall }) => {
  return (
    <Pressable
      style={{ elevation: 1 }}
      className={clsx(
        "my-2  w-48 justify-center items-center rounded-3xl  gap-2 mx-3 bg-white",
        {
          "w-[90%] mx-auto flex-row h-32 ": !isSmall,
        }
      )}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        className={clsx("w-40 h-36 rounded-3xl mt-2", {
          "mt-0 w-32 h-32": !isSmall,
        })}
      ></Image>
      <View
        className={clsx("gap-4", {
          " justify-between  flex-1 h-full gap-0 ": !isSmall,
        })}
      >
        <View
          className={clsx("w-full ml-4", {
            "mt-4 ml-3": !isSmall,
          })}
        >
          <Text
            style={{ lineHeight: 20 }}
            className={clsx("text-xl  font-bold max-w-24 text-primary", {
              "max-w-48": !isSmall,
            })}
          >
            Coromel Machioto
          </Text>
          {!isSmall && (
            <Text className="font-normal text-sm text-primary">
              Leite, Caramelo, Chocolate
            </Text>
          )}
        </View>
        <View
          className={clsx("flex-row justify-between w-full items-center", {
            "justify-start": !isSmall,
          })}
        >
          <View className="ml-4 flex-row items-center gap-1">
            <Text className="font-normal text-primary">R$</Text>
            <Text className=" font-bold text-2xl text-primary">2.99</Text>
          </View>
          <View className="bg-accent rounded-tl-3xl rounded-br-3xl justify-center items-center w-16 h-12">
            <FontAwesome name="plus" size={20} color="white"></FontAwesome>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CoffeeCard;
