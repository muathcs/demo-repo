import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import SingleCategory from "./CategoriesContainer/SingleCategory";
import axios from "axios";

const Recommended = () => {
  console.log("recommenexd");

  // useEffect(() => {

  //   axios.get("http://localhost:3001/celebs")
  // })

  async function handlePress() {
    console.log("here");
    try {
      const dataToSend = { mobile: true }; // Data to send

      const response = await axios.get("http://10.0.2.2:3001/celebs", {
        params: dataToSend, // Include data as query parameters
      });

      // console.log("response: ", response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View className=" flex mx-2 my-8 ">
      <Text className="left-2 text-[20px]  text-white">
        Recommended For You
      </Text>
      <ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        className="p-0"
      >
        {[...Array(5)].map((item, index) => (
          <SingleCategory
            key={index}
            imgurl={require("../../../assets/images/single.png")}
            displayname="John Doe"
            description="Tiktok Star"
            color="D0EFF9"
            width={155}
            price={20}
            height={230}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Recommended;
