import { View, Text, SectionList } from "react-native";
import React, { useState } from "react";
import { AllExercises } from "../../../../assets/data/excerciseCollectionByRegion";
import SingleCategory from "../../home/CategoriesContainer/SingleCategory";
import SingleExercise from "../../../exercise/SingleExercise";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { Avatar, Layout, Popover, Button } from "@ui-kitten/components";

type tempObjType = {
  title: string;
  data: any[];
};

const index = () => {
  const [visible, setVisible] = useState<boolean>();
  const [customList, setCustomList] = useState([]);
  const categories = Object.keys(AllExercises);

  const renderToggleButton = (): React.ReactElement => (
    <Button onPress={() => setVisible(true)}>TOGGLE POPOVER</Button>
  );

  let arr: any = [];

  categories.forEach((category) => {
    let dataArr = [];

    const exercises = Object.keys(AllExercises[category]);

    let tempObj;
    exercises.forEach((exercise) => {
      const { imgURL, name, duration } = AllExercises[category][exercise];
      dataArr.push({ imgURL, name, duration });

      tempObj = {
        title: category,
        data: dataArr,
      };
    });
    arr.push(tempObj);
  });

  console.log("customList: ", customList);

  return (
    <View className="bg-white">
      <Popover
        visible={visible}
        anchor={renderToggleButton}
        onBackdropPress={() => setVisible(false)}
      >
        <View className="border-4 bg-red-400 ">
          <Avatar source={require("../../../../assets/images/single.png")} />
          <Text>Welcome to UI Kitten 😻</Text>
        </View>
      </Popover>
      <SectionList
        sections={arr}
        renderSectionHeader={({ section }) => (
          <Text className="h-10 text-lg font-bold text-center pt-2">
            {section.title}
          </Text>
        )}
        renderItem={({ item, section }) => {
          return (
            <>
              <SingleExercise
                item={item}
                custom={true}
                customList={customList}
                setCustomList={setCustomList}
              />
            </>
          );
        }}
      />
      <Text>index</Text>
    </View>
  );
};

export default index;
