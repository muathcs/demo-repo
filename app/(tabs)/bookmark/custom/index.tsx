import { View, Text, SectionList } from "react-native";
import React from "react";
import { AllExercises } from "../../../../assets/data/excerciseCollectionByRegion";

type tempObjType = {
  title: string;
  data: any[];
};
const index = () => {
  const categories = Object.keys(AllExercises);
  //   console.log("Ex: ", AllExercises);

  let arr: any = [];

  categories.forEach((category) => {
    let dataArr = [];

    const exercises = Object.keys(AllExercises[category]);

    console.log("excercise: ", exercises);
    let tempObj;
    exercises.forEach((exercise) => {
      const { imgURL, name, duration } = AllExercises[category][exercise];
      dataArr.push({ imgURL, name, duration });
      // Now you can use imgURL, n  ame, and duration for each exercise
      //   console.log(
      //     `Category: ${category}, Exercise: ${name}, Duration: ${duration}`
      //   );

      //   console.log("inside: ", AllExercises[category][exercise]);

      tempObj = {
        title: category,
        data: dataArr,
        // data: [JSON.stringify([AllExercises[category][exercise]])],
      };
    });
    arr.push(tempObj);
  });

  //   arr = JSON.stringify(arr);

  //   console.log("test: ", JSON.stringify(arr));

  return (
    <View className="bg-white">
      <SectionList
        sections={arr}
        renderSectionHeader={({ section }) => (
          <Text className="bg-red-400 h-10">{section.title}</Text>
        )}
        renderItem={({ item, section }) => {
          return (
            <>
              <Text>{item.name}</Text>
            </>
          );
        }}
      />
      <Text>index</Text>
    </View>
  );
};

export default index;
