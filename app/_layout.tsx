import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack, Tabs, useLocalSearchParams } from "expo-router";

const RootLayout = () => {
  const params = useLocalSearchParams();
  console.log(params);

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
            // headerShown: false,
            presentation: "modal",

            headerTitleStyle: {
              fontWeight: "bold",
            },
            // headerTitle: "Ex",
          }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;
