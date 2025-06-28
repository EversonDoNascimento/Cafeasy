import { FontAwesome } from "@expo/vector-icons";
import clsx from "clsx";
import { useEffect } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
type Props = {
  name: string;
  icon: string;
  id: number;
  activated: number;
  setActivatedCategory: (id: number) => void;
  isEnd: boolean;
};
const CardCategory = ({
  name,
  icon,
  id,
  isEnd,
  activated,
  setActivatedCategory,
}: Props) => {
  const color = useSharedValue("#E0E5EC");
  const fontColor = useSharedValue("#000000");
  useEffect(() => {
    color.value = withTiming(activated === id ? "#F45E4D" : "#E0E5EC", {
      duration: 500,
    });
    fontColor.value = withTiming(activated === id ? "#FFFFFF" : "#000000", {
      duration: 500,
    });
  }, [activated, color, id, fontColor]);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: color.value,
    };
  });

  const animatedFontStyle = useAnimatedStyle(() => {
    return {
      color: fontColor.value,
    };
  });
  return (
    <Animated.View
      style={[
        {
          elevation: 3,
        },
        animatedStyle,
      ]}
      className={clsx(" ml-2 mt-2 rounded-full  p-1  ", {
        "mr-11": isEnd,
      })}
    >
      <Pressable
        className="flex-row justify-center items-center gap-1"
        onPress={() => setActivatedCategory(id)}
      >
        <View className="w-11 h-11 justify-center items-center rounded-full bg-white">
          <FontAwesome
            name="coffee"
            size={24}
            color="black"
            className="opacity-50"
          />
        </View>
        <Animated.Text style={[animatedFontStyle]} className="mr-1  ">
          {name}
        </Animated.Text>
      </Pressable>
    </Animated.View>
  );
};

export default CardCategory;
