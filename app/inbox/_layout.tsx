import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme, Text } from "react-native";

export const unstable_settings = {
  initialRouteName: "(patient)", // DOES NOT WORK
};

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Text>Inbox layout</Text>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(admin)" />
        <Stack.Screen name="(patient)" />
      </Stack>
    </ThemeProvider>
  );
}
