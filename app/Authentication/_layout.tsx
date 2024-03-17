import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={
        {
          // headerShown: false,
        }
      }
    >
      <Stack.Screen
        name="login/index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup/index"
        options={{
          headerShown: false,
          //   presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
