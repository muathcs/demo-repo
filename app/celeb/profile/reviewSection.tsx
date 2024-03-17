import { View, Text } from "react-native";
import React from "react";
import Review from "./review";

const ReviewSection = () => {
  return (
    <>
      <View className="border border-white h-20 mt-5 flex-row mx-12 rounded-lg ">
        <View className="bg-[#232323]  rounded-l-lg  w-1/2 items-center justify-center">
          <Text className="text-white">Reviews (250)</Text>
        </View>
        <View className="bg-[#232323]  rounded-r-lg border-l border-black  w-1/2 items-center justify-center">
          <Text className="text-white">Reviews (250)</Text>
        </View>
      </View>
      <View className=" items-center mx-4 mt-5 ">
        <Review />
        <Review />
        <Review />
      </View>
    </>
  );
};

export default ReviewSection;
