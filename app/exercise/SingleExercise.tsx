import { View, Text, Image } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

type SingleExerciseType = {
  item: any;
  increaseTime: (name: string) => void;
  decreaseTime: (name: string) => void;
};
const SingleExercise = ({
  item,
  increaseTime,
  decreaseTime,
}: SingleExerciseType) => {
  const { imgURL, name, duration } = item;
  return (
    <View className=" bg-white   flex flex-row h-20 justify-between items-center border  border-gray-100 rounded-lg ">
      <View className="h-16  w-20 border border-gray-100 rounded-lg">
        <Image source={item.imgURL} className="w-full h-full" />
      </View>
      <View className="flex-col gap-1 pl-2 right-12">
        <Text>{item.name}</Text>

        <Text className="text-gray-400">{item.duration} minutes</Text>
      </View>
      <View className=" flex-row mr-2 gap-x-5 h-10">
        <EvilIcons
          onPress={() => {
            decreaseTime(item.name);
          }}
          name="minus"
          size={36}
          color="gray"
        />
        <EvilIcons
          onPress={() => {
            increaseTime(item.name);
          }}
          name="plus"
          size={36}
          color="gray"
        />
      </View>
    </View>
  );
};

export default SingleExercise;
