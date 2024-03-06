import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { parse } from "expo-linking";
import { useCountDown } from "../../customHooks/useCountDown";

type JsonObjectType = {
  name: String;
};

type activitState = "playing" | "pause" | "restart";
const Active = () => {
  const [playingState, setPlayingState] = useState<activitState>("pause");
  const params = useLocalSearchParams();
  const exerciseList: any = params.exerciseList;
  const parsedExerciseList = JSON.parse(exerciseList);

  const [indexOfList, setIndexOfList] = useState(0);
  const initialTime = 5;
  console.log("XXX: ", initialTime);
  const [time, setTime, startTimer, stopTimer] = useCountDown(initialTime);

  console.log("initial Time: ", initialTime);
  //   console.log("time: ", setTime);

  //   if (time === 0) {
  //     // setTime(3);
  //     setTime("pause");
  //     console.log("its zizo: ", time);
  //   }

  useEffect(() => {
    if (time == 0 && indexOfList < parsedExerciseList.length - 1) {
      const timeOut = setTimeout(() => {
        setIndexOfList((index) => index + 1);
        setTime(initialTime);
        setPlayingState("playing");
      }, 1000);

      return () => clearTimeout(timeOut);
    }
  }, [time]);
  function startCountDown() {
    startTimer();
  }

  function stopCountDown() {
    stopTimer();
  }

  function next() {
    if (indexOfList == parsedExerciseList.length - 1) {
      return;
    }

    setTime(initialTime);

    setIndexOfList((prev) => prev + 1);
    //
  }

  function back() {
    if (indexOfList == 0) {
      return;
    }

    setIndexOfList((prev) => prev - 1);
  }

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
        <Text>{time}:00</Text>
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
            {time == 0 ? (
              <Feather
                onPress={() => {
                  stopCountDown();
                  setPlayingState("restart");
                }}
                name="repeat"
                size={26}
                color="red"
              />
            ) : playingState == "pause" ? (
              <Feather
                onPress={() => {
                  stopCountDown();
                  setPlayingState("playing");
                }}
                name="play"
                size={26}
                color="green"
              />
            ) : playingState == "playing" ? (
              <Feather
                onPress={() => {
                  startCountDown();
                  setPlayingState("pause");
                }}
                name="pause"
                size={26}
                color="red"
              />
            ) : null}
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
