import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { parse } from "expo-linking";

type JsonObjectType = {
  name: String;
};
const Active = () => {
  const [active, setActive] = useState(false);
  const params = useLocalSearchParams();
  const exerciseList: any = params.exerciseList;
  const parsedExerciseList = JSON.parse(exerciseList);

  const [indexOfList, setIndexOfList] = useState(0);

  function next() {
    if (indexOfList == parsedExerciseList.length - 1) {
      return;
    }

    setIndexOfList((prev) => prev + 1);
    //
  }

  function back() {
    if (indexOfList == 0) {
      return;
    }

    setIndexOfList((prev) => prev - 1);
  }

  console.log("parsed: ", parsedExerciseList);
  return (
    <View className="h-full bg-white">
      <View className="w-full h-1/2">
        <Image
          className="w-full h-full"
          source={parsedExerciseList[indexOfList].imgURL}
        />
      </View>
      <View className="items-center">
        <Text className="text-[20px] font-light ">
          {parsedExerciseList[indexOfList].name}
        </Text>
      </View>

      <View className="border items-center h-32 justify-center">
        <View className="border rounded-full h-24 w-24 items-center justify-center">
          <Text>
            {indexOfList + 1}/{parsedExerciseList.length}
          </Text>
        </View>
        <Text>{parsedExerciseList[indexOfList].duration}:00</Text>
      </View>
      <View className="mt-5 flex-row justify-between mx-2">
        <Pressable
          onPress={back}
          className="border self-start px-10 py-3 rounded-md bg-white border-[#12BEF6]"
        >
          <Text className=" text-[#12BEF6]">Prev</Text>
        </Pressable>
        <Pressable className="self-start px-4 py-3 ">
          <Text className=" text-white">
            {!active ? (
              <Feather
                onPress={() => {
                  setActive(true);
                }}
                name="play"
                size={26}
                color="black"
              />
            ) : (
              <Feather
                onPress={() => {
                  setActive(false);
                }}
                name="pause"
                size={26}
                color="black"
              ></Feather>
            )}
          </Text>
        </Pressable>
        <Pressable
          onPress={next}
          className="border self-start px-10 py-3 rounded-md bg-[#12BEF6] border-white"
        >
          <Text className=" text-white">Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Active;
