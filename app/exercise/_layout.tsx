import { View, Text, Pressable } from "react-native";
import React from "react";
import { Stack, router, useNavigation } from "expo-router";

const ExerciseLayout = () => {
  const navigation = useNavigation();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "exercise",
        }}
      />
      <Stack.Screen
        name="Active"
        options={{
          headerShown: true,
          presentation: "fullScreenModal",
          headerTitle: "",
          headerLeft: () => {
            return (
              <Pressable
                onPress={() => router.back()}
                className="text-blue-500 text-lg font-bold"
              >
                <Text className="text-blue-500 text-lg font-bold">back</Text>
              </Pressable>
            );
          },
        }}
      />
    </Stack>
  );
};

export default ExerciseLayout;
