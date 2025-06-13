import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { StepAuthContextProvider } from "../contexts/stepAuthContext";
import "./../global.css";
const RootLayout = () => {
  return (
    <StepAuthContextProvider>
      <StatusBar barStyle="light-content"></StatusBar>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
    </StepAuthContextProvider>
  );
};

export default RootLayout;
