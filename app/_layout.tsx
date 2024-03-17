import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import {
  Redirect,
  Stack,
  Tabs,
  router,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "../context/authContext";

const RootLayout = () => {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  console.log("herec", navigation.getId);

  const auth = false;
  useEffect(() => {
    if (!auth) {
      router.navigate("/Authentication/login");
    }
  }, []);

  return (
    <>
      <AuthProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <Stack>
              <Stack.Screen
                name="(tabs)"
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="booking"
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="celeb"
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                  title: "",
                }}
              />
              <Stack.Screen
                name="Authentication"
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                  title: "",
                }}
              />
            </Stack>
          </ApplicationProvider>
        </GestureHandlerRootView>
      </AuthProvider>
    </>
  );
};

export default RootLayout;
