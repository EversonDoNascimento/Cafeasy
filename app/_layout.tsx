import { Stack } from "expo-router";
import { StepAuthContextProvider } from "../contexts/stepAuthContext";
import "./../global.css";
const RootLayout = () => {
  return (
    <StepAuthContextProvider>
      {/* <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
      ></StatusBar> */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)/login" />
      </Stack>
    </StepAuthContextProvider>
  );
};

export default RootLayout;
