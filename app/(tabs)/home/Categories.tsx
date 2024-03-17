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
    exerciseRegion: "lowerBack",
    color: "D0EFF9",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "neck",
    color: "FEF1D9",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "shoulder",
    color: "E7BDEB",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "hamstrings",
    color: "FEF1D9",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "chest",
    color: "D0EFF9",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "hips",
    color: "F9D0D0",
    width: 60,
    height: 60,
    rounded: true,
  },
];

const secondCategories = [
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "core",
    color: "FEF1D9",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "upperBody",
    color: "E7BDEB",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "lowerBody",
    color: "FEF1D9",
    width: 60,
    height: 60,
    rounded: true,
  },
  {
    imgURL: require("../../../assets/images/flexing.png"),
    exerciseRegion: "quads",
    color: "D0EFF9",
    width: 60,
    height: 60,
    rounded: true,
  },
];

const Categories = () => {
  return (
    <View className=" flex  mx-2 mt-4 ">
      <Text className="left-2 text-[16px]  text-gray-800 mb-2 ml-1">
        Browse By Area
      </Text>

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
                    imgurl={require("../../../assets/images/single.png")}
                    displayname={"lowerBack"}
                    description={"Stretch"}
                    color="D0EFF9"
                    width={155}
                    height={230}
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
                    imgurl={require("../../../assets/images/single.png")}
                    displayname={"lowerBack"}
                    description={"Stretch"}
                    color="D0EFF9"
                    width={155}
                    height={230}
                  />
                </View>
              </>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Categories;
