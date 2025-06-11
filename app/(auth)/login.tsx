import { Pressable, Text, View } from "react-native";
import { useStepAuthContext } from "../../contexts/stepAuthContext";
import { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { LoginForm } from "../../components/Forms/LoginForm";
import RegisterForm from "../../components/Forms/RegisterForm";
import { useWindowDimensions } from "react-native";
import Header from "../../components/Header";

const Screen = () => {
  const { width: FORM_OFFSET } = useWindowDimensions();
  const ctxStepAuth = useStepAuthContext();
  const posX = useSharedValue(ctxStepAuth.step == "LOGIN" ? 175 : 0);
  const posXForm = useSharedValue(0);

  useEffect(() => {
    (() => {
      if (ctxStepAuth.step == "LOGIN") {
        posX.value = withTiming(0, {
          duration: 200,
        });
        posXForm.value = withTiming(0, {
          duration: 200,
        });
      } else {
        posX.value = withTiming(175, {
          duration: 200,
        });
        posXForm.value = withTiming(-FORM_OFFSET, {
          duration: 200,
        });
      }
    })();
  }, [ctxStepAuth.step]);

  const animationStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: posX.value }],
  }));

  const animationStylesForm = useAnimatedStyle(() => ({
    transform: [{ translateX: posXForm.value }],
  }));
  return (
    <View className="w-full h-full ">
      <Header
        text={
          ctxStepAuth.step == "LOGIN"
            ? { title: "Entre na sua conta" }
            : { title: "Cadastre-se para ter acesso" }
        }
      >
        <View
          style={{ elevation: 4 }}
          className="w-[350px] h-16 rounded-full bg-white absolute -bottom-9 flex-row"
        >
          <Animated.View
            style={[animationStyles]}
            className="absolute top-0  w-[50%] h-full rounded-full bg-accent"
          ></Animated.View>
          <Pressable
            onPress={() => ctxStepAuth.setStep("LOGIN")}
            className={`flex-1 rounded-full justify-center items-center`}
          >
            <Text
              className={`${
                ctxStepAuth.step == "LOGIN" ? "text-white" : "text-text"
              }  text-center text-xl font-bold`}
            >
              Entrar
            </Text>
          </Pressable>
          <Pressable
            onPress={() => ctxStepAuth.setStep("REGISTER")}
            className={`flex-1  rounded-full justify-center items-center`}
          >
            <Text
              className={`${
                ctxStepAuth.step == "REGISTER" ? "text-white" : "text-text"
              }  text-center text-xl font-bold`}
            >
              Cadastrar-se
            </Text>
          </Pressable>
        </View>
      </Header>

      <View className="w-full h-full overflow-hidden mt-24">
        <Animated.View
          style={[animationStylesForm, { width: FORM_OFFSET * 2 }]}
          className="flex-row "
        >
          <View className=" items-center" style={{ width: FORM_OFFSET }}>
            <LoginForm />
          </View>
          <View className=" items-center" style={{ width: FORM_OFFSET }}>
            <RegisterForm />
          </View>
        </Animated.View>
      </View>
    </View>
  );
};
export default Screen;
