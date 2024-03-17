import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardFlow } from "react-native-onboard";
import { TextInput } from "react-native-gesture-handler";
import { router, useNavigation } from "expo-router";

type itemType = {
  forSomeoneElse: boolean;
};
const Booking = () => {
  return (
    <View className="w-full items-center bg-[#232323] h-full justify-center">
      <Text className="text-white text-lg">Who is this for?</Text>
      <TouchableOpacity
        onPress={() => {
          const item: itemType = {
            forSomeoneElse: false,
          };
          router.navigate({ pathname: "/booking/orderTo", params: item });
        }}
        className="bg-[#555555] py-6 w-3/4 rounded-lg items-center "
      >
        <Text className="text-white items-center text-lg ">It's for me</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          const item: itemType = {
            forSomeoneElse: true,
          };
          router.navigate({ pathname: "/booking/orderTo", params: item });
        }}
        className="bg-[#555555] py-6 w-3/4 rounded-lg items-center mt-2 "
      >
        <Text className="text-white items-center text-lg ">
          It's for a friends
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Booking;
