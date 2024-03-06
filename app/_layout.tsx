import { View, Text } from "react-native";
import React from "react";
import {
  Redirect,
  Stack,
  Tabs,
  router,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";

const RootLayout = () => {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  console.log("here", navigation.getId);

  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="exercise"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;
