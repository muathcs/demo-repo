import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";

type SingleCategoryProps = {
  imgURL: ImageSourcePropType;
  exerciseRegion: String;
  exerciseName?: String;
  exerciseDuration?: Number;
  color: string;
  width: number;
  height: number;
  rounded?: boolean;
};

const SingleCategory = ({
  imgURL,
  exerciseRegion,
  exerciseName,
  exerciseDuration,
  color,
  width,
  height,
  rounded,
}: SingleCategoryProps) => {
  return (
    <View className="">
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          console.log("first");
          router.navigate("/exercise");
        }}
      >
        <View
          style={{
            backgroundColor: `#${color}`,
            width: width,
            height: height,
            borderRadius: rounded ? 100 : 10,
          }}
          className=" w-[135px] h-[125px] flex justify-center items-center  mx-1 my-2  bg-red-400  "
        >
          <View className=" w-full items-center ">
            <Image className="flex-shrink-0 w-full  h-full " source={imgURL} />
          </View>
        </View>
      </TouchableOpacity>
      <View className="  items-center ">
        <Text className="text-gray-800">{exerciseRegion}</Text>
        <Text className="text-gray-400">
          {exerciseDuration && exerciseName + " |"}
          {exerciseDuration && exerciseDuration.toString() + "minutes"}
        </Text>
      </View>
    </View>
  );
};

export default SingleCategory;
