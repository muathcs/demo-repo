import { View, Text, Button } from "react-native";
import React, { useRef, useState } from "react";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { StatusBar } from "expo-status-bar";

type StatusType = {
  isPlaying: boolean;
};

const initialStatus: StatusType = {
  isPlaying: false, // Provide initial values for each property
};
const VideoShow = () => {
  const video = useRef(null);
  const [status, setStatus] = useState<StatusType>(initialStatus);

  const handlePlaybackStatusUpdate = (newStatus: any) => {
    setStatus({
      isPlaying: newStatus.isPlaying ?? false,
    });
  };

  return (
    <View className="w-full">
      <View className="rounded-lg  h-full w-full  p-0 ">
        <Video
          ref={video}
          source={require("../../../assets/videos/mr.mp4")}
          useNativeControls
          isLooping
          videoStyle={{
            backgroundColor: "black",
            padding: 0,
            margin: 0,
          }}
          onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
          className="w-full h-full items-center rounded-lg p-0 m-0 absolute  "
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default VideoShow;
