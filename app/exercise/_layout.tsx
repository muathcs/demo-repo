import { View, Text, Pressable } from "react-native";
import React from "react";
import { Stack, router, useNavigation } from "expo-router";
import FeatherIcon from "react-native-vector-icons/Feather";

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
                <FeatherIcon color="#000" name="arrow-left" size={24} />
              </Pressable>
            );
          },
        }}
      />
    </Stack>
  );
};

export default ExerciseLayout;
