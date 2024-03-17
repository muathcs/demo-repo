import { View, Text } from "react-native";
import React from "react";

const Review = () => {
  return (
    <View className="bg-[#232323] min-h-[150px]  border-2  w-full h-auto rounded-xl px-5 py-5 pb-8  ">
      <View className="text-left relative">
        <View className="flex-row gap-2 items-center ">
          <Text className="text-lg text-white">Name</Text>
          <Text className="text-lg text-white relative  ">
            {"⭐".repeat(5)}
          </Text>
        </View>
        <Text className="text-sm text-white">{"12/01/2023"}</Text>
      </View>
      <View className="relative top-2 text-gray-300 text-left">
        <Text className="text-white">nice review Thank you so much</Text>
      </View>
    </View>
  );
};

export default Review;
