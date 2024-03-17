import { View, Text, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "./topBar";
import ReviewSection from "./reviewSection";
import BottomSheetRn from "./bottomSheetRN";
import VideoList from "./videoList";

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

const reviews = [
  {
    name: "Muath",
    reviews: 5,
    date: "12/01/2023",
    message: "Nice and thank you for the shoutout",
  },
  {
    name: "Muath",
    reviews: 5,
    date: "12/01/2023",
    message: "Nice and thank you for the shoutout",
  },
  {
    name: "Muath",
    reviews: 5,
    date: "12/01/2023",
    message: "Nice and thank you for the shoutout",
  },
  {
    name: "Muath",
    reviews: 5,
    date: "12/01/2023",
    message: "Nice and thank you for the shoutout",
  },
];
type StatusType = {
  isPlaying: boolean;
};

const initialStatus: StatusType = {
  isPlaying: true, // Provide initial values for each property
};

const CelebProfile = () => {
  const video = useRef(null);
  const [status, setStatus] = useState<StatusType>(initialStatus);

  const handlePlaybackStatusUpdate = (newStatus: any) => {
    setStatus({
      isPlaying: newStatus.isPlaying ?? false,
    });
  };
  return (
    <SafeAreaView className="bg-black border-4 border-black ">
      <ScrollView className=" h-full  ">
        <View className="pb-40 ">
          <TopBar />
          <Text className="text-white">CelebProfile</Text>
          <VideoList />
          <View className="mx-2 ml-3 mt-5">
            <Text className="text-white">Celeb Name</Text>
            <Text className="text-white">Category</Text>
            <Text className="text-white">Description</Text>
          </View>
          <ReviewSection />
        </View>
      </ScrollView>
      <BottomSheetRn />
    </SafeAreaView>
  );
};

export default CelebProfile;
