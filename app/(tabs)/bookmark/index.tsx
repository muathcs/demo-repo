import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Card } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const Footer = (): React.ReactElement => (
  <View
    // eslint-disable-next-line react/prop-types
    className="border"
  >
    <Button size="small" status="basic">
      CANCEL
    </Button>
    <Button size="small">ACCEPT</Button>
  </View>
);

const BookMark = () => {
  return (
    <View className=" h-full bg-white flex-row  ">
      <TouchableOpacity
        onPress={() => {
          console.log("whole");
          router.navigate("/bookmark/custom");
        }}
        className=" border-gray-300  h-40  flex-1 mt-28 mx-4 rounded-3xl relative border-2"
      >
        <View className="items-center top-5">
          <Ionicons
            className=""
            name="create-outline"
            size={50}
            color="black"
          />
        </View>
        <View className="absolute bottom-2 items-center w-full z-40">
          <Text className="text-lg font-bold text-center">
            Create Your Own Routine
          </Text>
          <Text className="text-center text-gray-600 text-[15px]">
            Tap
            <MaterialCommunityIcons
              name="gesture-double-tap"
              size={16}
              color="black"
            />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BookMark;
