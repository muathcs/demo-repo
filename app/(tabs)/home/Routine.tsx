import { View, Text, Pressable, Image } from "react-native";
import React from "react";

const Routine = () => {
  return (
    <View className="mx-2 my-2 rounded-md h-1/4 flex flex-row justify-between items-center border border-gray-300 bg-purple-50 text-white ">
      <View className=" w-1/2 pl-2 ">
        <Text>Start Your Routine</Text>
        <Text className="mt-2">16 Excercises</Text>
        <Pressable className=" self-start bg-[#7F63FB] rounded-full mt-5  px-10 py-2 ">
          <Text className=" text-white">Continue</Text>
        </Pressable>
      </View>
      <View className=" w-1/2   overflow-hidden">
        <Image
          className="flex-shrink-0 w-52 h-40  bottom-4"
          source={require("../../../assets/images/flexing.png")}
        />
      </View>
    </View>
  );
};

export default Routine;
