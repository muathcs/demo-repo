import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router, useNavigation } from "expo-router";
import { CelebType } from "../../../../Tstypes/types";
import { formatter } from "../../../../utilities/formatter";

type SingleCategoryProps = Partial<
  CelebType & {
    color: string;
    width: number;
    height: number;
    rounded: boolean;
  }
>;

const SingleCategory = ({
  account,
  category,
  displayname,
  price,
  description,
  imgurl,
  color,
  height,
  width,
  rounded,
}: SingleCategoryProps) => {
  const navigation = useNavigation<any>();

  const item = {
    account,
    category,
    displayname,
    price,
    description,
    imgurl,
    color,
  };
  return (
    <View className=" ">
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          console.log("first");
          router.navigate({ pathname: `/celeb/profile`, params: item });
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
          <View className=" w-full items-center rounded-lg">
            <Image
              className="flex-shrink-0 w-full h-full rounded-lg"
              source={require("../../../../assets/images/man.jpg")}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View className="  ml-2  items-start">
        <Text className="text-white text-left font-bold text-lg">
          {displayname}
        </Text>
        <Text className="text-gray-300">{displayname && description}</Text>
        <Text className="text-white font-bold">
          {price && formatter.format(price)}+
        </Text>
      </View>
    </View>
  );
};

export default SingleCategory;
