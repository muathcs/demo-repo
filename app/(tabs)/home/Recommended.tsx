import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import SingleCategory from "./CategoriesContainer/SingleCategory";

const Recommended = () => {
  return (
    <View className=" flex  h-1/3 left-2 ">
      <Text className="left-2 text-[16px] text-gray-800">
        Recommended For You
      </Text>
      <ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        className="p-0"
      >
        <SingleCategory
          imgURL={require("../../../assets/images/flexing.png")}
          exerciseRegion={"lowerBack"}
          exerciseName={"Stretch"}
          exerciseDuration={20}
          color="D0EFF9"
          width={135}
          height={125}
        />
        <SingleCategory
          imgURL={require("../../../assets/images/flexing.png")}
          exerciseRegion={"lowerBack"}
          exerciseName={"Stretch"}
          exerciseDuration={20}
          color="E7BDEB"
          width={135}
          height={125}
        />
        <SingleCategory
          imgURL={require("../../../assets/images/flexing.png")}
          exerciseRegion={"lowerBack"}
          exerciseName={"Stretch"}
          exerciseDuration={20}
          color="FEF1D9"
          width={135}
          height={125}
        />
        <SingleCategory
          imgURL={require("../../../assets/images/flexing.png")}
          exerciseRegion={"lowerBack"}
          exerciseName={"Stretch"}
          exerciseDuration={20}
          color="F9D0D0"
          width={135}
          height={125}
        />
      </ScrollView>
    </View>
  );
};

export default Recommended;
