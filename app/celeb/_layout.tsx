import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const CelebLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          presentation: "fullScreenModal",
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          presentation: "fullScreenModal",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default CelebLayout;
