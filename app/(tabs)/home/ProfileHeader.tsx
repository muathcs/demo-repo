import { View, Text, Image } from "react-native";
import React from "react";

const ProfileHeader = () => {
  return (
    <View className="flex flex-row justify-between h-1/5 bg-white  ">
      <View className="flex-grow w-1/3 pl-3 pt-5">
        <Text className="text-gray-600">Hello User!</Text>
        <Text className="text-gray-600">We Wish you have a good day</Text>
      </View>
      <View className="w-5 flex-grow justify-center items-center ">
        <View className="h-20 w-20 border-2 overflow-hidden rounded-full object-contain">
          <Image
            className="flex-shrink-0 w-20 h-20 "
            source={require("../../../assets/images/idriAlba.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
