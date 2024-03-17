import { View, Text, Platform } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

type iconNameType =
  | "home"
  | "home-outline"
  | "person"
  | "person-outline"
  | "bookmark"
  | "bookmark-outline"
  | "stats-chart"
  | "stats-chart-outline";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,

        tabBarStyle: {
          height: Platform.OS == "android" ? 60 : 70,
          backgroundColor: "#121114",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: Platform.OS == "android" ? 0 : 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarShowLabel: false,

          tabBarIcon: ({ color, size, focused }) => {
            let iconName: iconNameType = focused ? "home" : "home-outline";

            return (
              <>
                <AntDesign name="search1" size={24} color="grey" />
                <Text className="text-gray-400 text-sm">Browse</Text>
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            const iconsName: iconNameType = focused
              ? "bookmark"
              : "bookmark-outline";
            return (
              <>
                <AntDesign name="inbox" size={24} color="grey" />
                <Text className="text-gray-400 text-sm">Inbox</Text>
              </>
            );
          },
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            const iconsName: iconNameType = focused
              ? "stats-chart"
              : "stats-chart-outline";
            return (
              <>
                <AntDesign name="hearto" size={24} color="grey" />
                <Text className="text-gray-400 text-sm">Following</Text>
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            const iconsName: iconNameType = focused
              ? "person"
              : "person-outline";
            return (
              <>
                <Ionicons name="person-outline" size={24} color="grey" />
                <Text className="text-gray-400 text-sm">Profile</Text>
              </>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
