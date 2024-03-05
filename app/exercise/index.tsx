import { View, Text, FlatList, Button, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Data = {
  ex1: [
    {
      imgURL: require("../../assets/images/flexing.png"),

      name: "bendy",
      duration: 20,
    },
    {
      imgURL: require("../../assets/images/flexing.png"),

      name: "flexy",
      duration: 20,
    },
    {
      imgURL: require("../../assets/images/flexing.png"),

      name: "splexy",
      duration: 20,
    },
    {
      imgURL: require("../../assets/images/flexing.png"),

      name: "splexy",
      duration: 20,
    },
    {
      imgURL: require("../../assets/images/flexing.png"),

      name: "splexy",
      duration: 20,
    },
    {
      imgURL: require("../../assets/images/flexing.png"),

      name: "splexy",
      duration: 20,
    },
    {
      imgURL: require("../../assets/images/flexing.png"),

      name: "splexy",
      duration: 20,
    },
    {
      imgURL: require("../../assets/images/flexing.png"),

      name: "splexy",
      duration: 20,
    },
    {
      imgURL: require("../../assets/images/flexing.png"),

      name: "splexy",
      duration: 20,
    },
  ],
  ex2: [
    {
      imgURL: require("../../assets/images/flexing.png"),

      name: "bendy2",
      duration: 20,
    },
    {
      imgURL: require("../../assets/images/flexing.png"),

      name: "flexy2",
      duration: 20,
    },
    {
      imgURL: require("../../assets/images/flexing.png"),

      name: "splexy2",
      duration: 20,
    },
  ],
};

const ExercisePage = () => {
  const [totaltime, setTime] = useState(
    Data.ex1.reduce((totalDuration, exercise) => {
      return totalDuration + exercise.duration;
    }, 0)
  );

  function increaseTime(name: string) {
    let tempArr = [...Data.ex1];
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
  function decreaseTime(name: string) {
    //

    let tempArr = [...Data.ex1];
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

  console.log("check re-render");

  const item = useLocalSearchParams();
  const { color } = item;

  return (
    <View className=" bg-white h-full pl-2">
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
          <Text className="text-[#F77D39]  ">Lower Back</Text>
        </View>
      </View>
      <View className="pb-20">
        <Text className="font-bold text-[16px] mt-2">Stretches</Text>
        <View className=" pb-20">
          <FlatList
            data={Data.ex1}
            className=" h-[600px] pb-20"
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <>
                <View className=" bg-white  flex flex-row h-20 justify-between items-center  border-gray-100 rounded-lg ">
                  <View className="h-16 w-20 border border-gray-100 rounded-lg">
                    <Image source={item.imgURL} className="w-full h-full" />
                  </View>
                  <View className="flex-col gap-1 pl-2 right-12">
                    <Text>{item.name}</Text>

                    <Text className="text-gray-400">
                      {item.duration} minutes
                    </Text>
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
              </>
            )}
          ></FlatList>
        </View>
      </View>
    </View>
  );
};

export default ExercisePage;
