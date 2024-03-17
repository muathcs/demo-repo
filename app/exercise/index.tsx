import {
  View,
  Text,
  FlatList,
  Button,
  Pressable,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { excerciseCollectionByRegion as Data } from "../../assets/data/excerciseCollectionByRegion";
import SingleExercise from "./SingleExercise";
import { isCallSignatureDeclaration } from "typescript";
//partial maps over all the property of the Type and adds an optional type to all of them
// This is ok, because I'm recieivng this object not settings it.
type SingleCategoryProps = Partial<{
  imgURL: ImageSourcePropType;
  exerciseRegion: "lowerBack";
  exerciseName: String;
  exerciseDuration: Number;
  color: string;
  width: number;
  height: number;
  rounded: boolean;
}>;

function StartExerciseButton({ exerciseList }) {
  const router = useRouter();
  const myList = [
    { duration: 20, name: "core1" },
    { duration: 20, name: "core2" },
    { duration: 20, name: "core3" },
  ];

  return (
    <TouchableOpacity
      onPress={() => {
        router.navigate({
          pathname: "exercise/Active",
          params: { exerciseList: JSON.stringify(exerciseList) },
        });
      }}
      activeOpacity={0.8}
      className="items-center rounded-xl py-6 mx-5 mt-5 bg-[#DCF1FE] border border-gray-50  "
    >
      <Text className="text-[#12BEF6] font-bold text-md ">Start</Text>
    </TouchableOpacity>
  );
}

const ExercisePage = () => {
  const item = useLocalSearchParams();
  const {
    color,
    imgURL,
    exerciseRegion,
    height,
    width,
    exerciseDuration,
    exerciseName,
    rounded,
  }: SingleCategoryProps = item;

  if (!Data[exerciseRegion]) {
    return;
  }

  const [totaltime, setTime] = useState(
    Data[exerciseRegion].reduce((totalDuration, exercise) => {
      return totalDuration + exercise.duration;
    }, 0)
  );

  //increases Time for an individual exercise

  function increaseTime(name: string) {
    let tempArr = [...Data[exerciseRegion]];
    tempArr.map((item) => {
      if (name == item.name) {
        item.duration += 5;
      }
    });

    const newTime = tempArr.reduce((totalDuration, exercise) => {
      return totalDuration + exercise.duration;
    }, 0);
    setTime(newTime);
    //
  }

  //decreases Time for an individual exercise
  function decreaseTime(name: string) {
    //

    let tempArr = [...Data[exerciseRegion]];
    tempArr.map((item) => {
      if (name == item.name) {
        if (item.duration == 0) return;
        item.duration -= 5;
      }
    });

    const newTime = tempArr.reduce((totalDuration, exercise) => {
      return totalDuration + exercise.duration;
    }, 0);

    setTime(newTime);
  }

  return (
    <View className=" bg-white h-full pl-2 pt-2">
      <View className=" mb-2">
        <Text className="text-[20px]">Category name</Text>
        <Text className="text-gray-500">
          Lower back excercise is importing for daily activities such as bending
        </Text>
      </View>
      <View className="bg-white self-start flex-row">
        <View className="flex-row w-32  items-center justify-center px-2 py-2 rounded-md bg-[#DCF1FE]">
          <Text className="right-3">
            <AntDesign name="clockcircleo" size={14} color="#12BEF6" />
          </Text>
          <Text className="text-[#12BEF6]  ">{totaltime} mins</Text>
        </View>
        <View className="flex-row w-32  items-center justify-center px-2 py-2 rounded-md ml-2 bg-[#F8E1D2] ">
          <Text className="right-3">
            <FontAwesome6 name="person-praying" size={14} color="#F77D39" />
          </Text>
          <Text className="text-[#F77D39]  ">
            {exerciseRegion == "lowerBack" ? "Lower back" : exerciseRegion}
          </Text>
        </View>
      </View>
      <View className="border-2 flex-1 border-yellow-50 ">
        <Text className="font-bold text-[16px] mt-2">Stretches</Text>
        <View className="flex-1 ">
          <SafeAreaView className="flex-1 ">
            <FlatList
              data={Data[exerciseRegion]}
              className="  "
              style={{ paddingBottom: 10 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => (
                <StartExerciseButton exerciseList={Data[exerciseRegion]} />
              )}
              contentContainerStyle={{ paddingBottom: 10 }}
              renderItem={({ item }) => (
                <>
                  <SingleExercise
                    item={item}
                    increaseTime={increaseTime}
                    decreaseTime={decreaseTime}
                  />
                </>
              )}
            ></FlatList>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

export default ExercisePage;
