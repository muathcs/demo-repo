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
          animationDuration: 220,
        }}
      />
    </Stack>
  );
};

export default ExerciseLayout;
