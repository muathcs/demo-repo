import {
  View,
  Text,
  ScrollView,
  FlatList,
  FlatListComponent,
  SectionList,
} from "react-native";
import React from "react";
import SingleCategory from "./CategoriesContainer/SingleCategory";

const firstCategories = [
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "lowe back",
    color: "D0EFF9",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "lowex back",
    color: "FEF1D9",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "lowe back",
    color: "E7BDEB",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "lowe back",
    color: "FEF1D9",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "lowe back",
    color: "D0EFF9",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "lowe back",
    color: "F9D0D0",
    width: 60,
    height: 60,
    rounded: true,
  },
];

const secondCategories = [
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "lowe back",
    color: "FEF1D9",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "lowe back",
    color: "E7BDEB",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "lowe back",
    color: "FEF1D9",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "lowe back",
    color: "D0EFF9",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "lowe back",
    color: "F9D0D0",
    width: 60,
    height: 60,
    rounded: true,
  },
];

const Categories = () => {
  return (
    <View className=" flex  h-2/3 left-2    ">
      <Text className="left-2 text-[16px] text-gray-800 mb-2 ml-1">
        Browse By Area
      </Text>
      {/* <ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        className="p-0"
      > */}
      <View className="">
        <View className="flex  w-full pb-10 ">
          <FlatList
            data={firstCategories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <>
                <View className="border border-gray-300 rounded-lg w-[120px] h-[110px] pt-5 items-center justify-center mx-2 my-1">
                  <SingleCategory
                    imgURL={item.imgURL}
                    exerciseRegion={item.exerciseRegion}
                    color={item.color}
                    width={item.width}
                    height={item.height}
                    rounded={item.rounded}
                  />
                </View>
              </>
            )}
          />
          <FlatList
            data={secondCategories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <>
                <View className="border border-gray-300 rounded-lg w-[120px] h-[110px] pt-5 items-center justify-center mx-2 my-1">
                  <SingleCategory
                    imgURL={item.imgURL}
                    exerciseRegion={item.exerciseRegion}
                    color={item.color}
                    width={item.width}
                    height={item.height}
                    rounded={item.rounded}
                  />
                </View>
              </>
            )}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default Categories;
