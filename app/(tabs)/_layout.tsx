import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="list" />
    </Tabs>
  );
};

export default TabsLayout;
