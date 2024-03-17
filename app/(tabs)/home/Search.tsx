import { View, Text, TextInput } from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";
import { AntDesign } from "@expo/vector-icons";

const Search = () => {
  return (
    <View className="border flex-row justify-center items-center bg-white pl-2 rounded-full  ">
      <AntDesign name="search1" size={20} color="black" />
      <TextInput
        placeholder="Search for your celeb"
        className="  flex-1 py-[10px] bg-white text-white pl-2 rounded-full  "
      />
    </View>
  );
};

export default Search;
