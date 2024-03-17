import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import VideoShow from "./video";
const videoList = [
  {
    videoURL: require("../../../assets/videos/mr.mp4"),
  },
  {
    videoURL: require("../../../assets/videos/mr.mp4"),
  },
  {
    videoURL: require("../../../assets/videos/mr.mp4"),
  },
  {
    videoURL: require("../../../assets/videos/mr.mp4"),
  },
];
const VideoList = () => {
  return (
    <View className="h-96 rounded-lg border w-full flex-row   ">
      <FlatList
        className=" w-full h-full "
        data={videoList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => (
          <View className="border border-white rounded-lg w-[260px] h-full mx-1">
            <VideoShow />
          </View>
        )}
      />
    </View>
  );
};

export default VideoList;
