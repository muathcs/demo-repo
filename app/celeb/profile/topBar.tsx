import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const TopBar = () => {
  return (
    <View className="border-2 flex-row items-center justify-between px-2 ">
      <View className="w-[40px] h-[40px]  items-start justify-center">
        <TouchableOpacity
          onPress={() => {
            // handle onPress
            router.back();
          }}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          className=" bg-gray-800 items-start px-2  text-white py-[2px] rounded-sm"
        >
          <Text className="text-white">Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
