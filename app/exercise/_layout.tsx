import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ExerciseLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="Active"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ExerciseLayout;
