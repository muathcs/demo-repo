import {
  View,
  Text,
  Image,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { parse } from "expo-linking";
import { useCountDown } from "../../customHooks/useCountDown";
import Modal from "../(tabs)/profile/Modal";
import { Card } from "@ui-kitten/components";
type JsonObjectType = {
  name: String;
};

type activitState = "playing" | "pause" | "restart";
const Active = () => {
  const [active, setActive] = useState<boolean>(false);
  const params = useLocalSearchParams();
  const exerciseList: any = params.exerciseList;
  let parsedExerciseList = JSON.parse(exerciseList);
  const [isOpen, setIsOpen] = useState(false);
  console.log("list: ", parsedExerciseList);

  // filter out any item that has a list of more than
  parsedExerciseList = parsedExerciseList.filter((item) => item.duration > 0);

  const [indexOfList, setIndexOfList] = useState(0);
  const initialTime = parsedExerciseList[indexOfList].duration;
  const [time, setTime, startTimer, stopTimer] = useCountDown(initialTime);

  const navigation = useNavigation();
  const router = useRouter();

  //   console.log("time: ", setTime);

  //   if (time === 0) {
  //     // setTime(3);
  //     setTime("pause");
  //     console.log("its zizo: ", time);
  //   }

  useEffect(() => {
    const autoMoveToNext = () => {
      if (time == 0 && indexOfList < parsedExerciseList.length - 1) {
        const timeOut = setTimeout(() => {
          next();

          setTimeout(() => {
            setIsOpen(true);
          }, 3000);

          // setIndexOfList((index) => index + 1);
          // console.log("init time from inside: ", initialTime);
          // setTime(parsedExerciseList[indexOfList + 1].duration);
          // setActive(true);
        }, 1000);

        return () => clearTimeout(timeOut);
      }
    };
    autoMoveToNext();
  }, [time]);

  useEffect(() => {
    let id = navigation.getId();
    console.log("id: ", id);
  }, [navigation]);
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

    setTimeout(() => {}, 3000);
    setTime(parsedExerciseList[indexOfList + 1].duration);

    setIndexOfList((prev) => prev + 1);

    console.log("after 3 seconds");

    //
  }

  function back() {
    if (indexOfList == 0) {
      return;
    }
    setTime(parsedExerciseList[indexOfList - 1].duration);

    setIndexOfList((prev) => prev - 1);
  }

  return (
    <View className="h-full bg-white">
      <View className="w-full h-[40%]">
        <Image
          className="w-[80%] mx-auto  h-[90%]  "
          source={require("../../assets/images/orange-slash.jpg")}
        ></Image>
        <Image
          className="w-full h-full absolute "
          source={parsedExerciseList[indexOfList].imgURL}
        />
      </View>
      <View className="items-center ">
        <Text className="text-[28px] font-semibold ">
          {parsedExerciseList[indexOfList].name.toUpperCase()}
        </Text>
      </View>

      <View className="items-center h-56 justify-center ">
        <View className="border-[10px] border-blue-200 h-36 w-36 rounded-full items-center justify-center p-0 m-0 ">
          <View className="rounded-full h-36 w-36 items-center  justify-center border-2 border-blue-500">
            <Text className="text-blue-600 text-[32px] font-light opacity-100">
              {indexOfList + 1}/
              <Text className="text-blue-400">{parsedExerciseList.length}</Text>
            </Text>
          </View>
        </View>

        <Text className="text-[30px] font-bold">{time}:00</Text>
      </View>
      <View className="mt-5 flex-row justify-between mx-2">
        <Pressable
          onPress={back}
          className="border self-start px-16 py-7 rounded-md bg-white border-[#12BEF6]"
        >
          <Text className=" text-[#12BEF6]">Prev</Text>
        </Pressable>
        <View className="mx-2  items-center justify-center ">
          <Text className=" text-white">
            {active ? (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  startCountDown();
                  setActive(false);
                }}
              >
                <Feather name="pause" size={36} color="red" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  stopCountDown();
                  setActive(true);
                }}
                activeOpacity={1}
              >
                <Feather name="play" size={36} color="black" />
              </TouchableOpacity>
            )}
          </Text>
        </View>
        <Pressable
          onPress={next}
          className="border self-start px-16 py-7  rounded-md bg-[#12BEF6] border-white"
        >
          <Text className=" text-white">Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Active;
