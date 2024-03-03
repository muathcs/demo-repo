import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ProfileHeader from "./ProfileHeader";
import Routine from "./Routine";
import Categories from "./Categories";

const home = () => {
  return (
    <View className="bg-white h-full">
      <ProfileHeader />
      <Routine />
      <Categories />

      <Text className="bg-red-500 text-blue-300 border-2 ">home</Text>
      <View className="bg-red-400 flex justify-center">
        <Text>Hello</Text>
      </View>
      <StatusBar style="auto" />

      <Link href="/settings">Go to settings</Link>
    </View>
  );
};

export default home;
