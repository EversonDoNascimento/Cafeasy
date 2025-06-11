import { Stack } from "expo-router";
import "./../global.css";
import { StepAuthContextProvider } from "../contexts/stepAuthContext";
const RootLayout = () => {
  return (
    <StepAuthContextProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
    </StepAuthContextProvider>
  );
};

export default RootLayout;
