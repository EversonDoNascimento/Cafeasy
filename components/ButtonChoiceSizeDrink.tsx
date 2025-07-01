import clsx from "clsx";
import { useEffect } from "react";
import { Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  isActived: boolean;
  title: string;
  onPress: () => void;
};
const ButtonChoiceSizeDrink = ({ isActived, onPress, title }: Props) => {
  const colorButtonDrink = useSharedValue("#E0E5EC");
  const color = useSharedValue("#ffffff");
  useEffect(() => {
    colorButtonDrink.value = withTiming(isActived ? "#F45E4D" : "#E0E5EC", {
      duration: 500,
    });
    color.value = withTiming(isActived ? "#ffffff" : "#000000", {
      duration: 500,
    });
  }, [isActived, colorButtonDrink, color]);
  const animatedDrinkColor = useAnimatedStyle(() => {
    return {
      backgroundColor: colorButtonDrink.value,
    };
  });
  const animatedFontColor = useAnimatedStyle(() => {
    return {
      color: color.value,
    };
  });
  return (
    <Animated.View
      style={animatedDrinkColor}
      className={clsx("rounded-full  py-3   w-32")}
    >
      <Pressable
        className="w-full  justify-center items-center "
        onPress={() => onPress()}
        style={[{ elevation: 1 }]}
      >
        <Animated.Text style={animatedFontColor} className="text-lg text-white">
          {title}
        </Animated.Text>
      </Pressable>
    </Animated.View>
  );
};

export default ButtonChoiceSizeDrink;
