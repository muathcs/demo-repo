import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { Button, Card } from "@ui-kitten/components";

const Routine = () => {
  return (
    <View className=" my-2 rounded-md h-1/4 flex flex-row justify-between items-center border border-gray-50 bg-white  text-white mx-2">
      <View className=" w-1/2 pl-2 ">
        <Text>Start Your Routine</Text>
        <Text className="mt-2">16 Excercises</Text>
        <Pressable className=" self-start bg-[#7F63FB] rounded-full mt-5  px-10 py-2 ">
          <Text className=" text-white">Continue</Text>
        </Pressable>
      </View>
      <View className=" w-1/2   overflow-hidden">
        <Image
          className="flex-shrink-0 w-52 h-52  bottom-4"
          source={require("../../../assets/images/yoga.jpg")}
        />
      </View>
    </View>
  );
};

export default Routine;
