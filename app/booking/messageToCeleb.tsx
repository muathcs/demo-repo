import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { router, useLocalSearchParams } from "expo-router";
import axios from "axios";
import { apiUrl } from "../../utilities/fetchPath";

type itemType = Partial<{
  messageFrom: string;
  messageTo: string;
}>;
const MessageToCeleb = () => {
  const item: itemType = useLocalSearchParams();
  const { messageFrom, messageTo } = item;
  const [messageToCeleb, setMessageToCeleb] = useState();
  console.log("item: ", item);

  function sendRequest() {
    const requestObject = {
      celebUid: "celebID",
      fanUid: "GftG290txWMsA1ddMVgMcf4WoUs2",
      price: 23,
      message: messageToCeleb,
      reqstatus: "pending",
      timestamp1: new Date(),
      tosomeoneelse: "true",
      fromperson: messageFrom,
      toperson: messageTo,
    };

    try {
      axios.post(`${apiUrl}/request`, requestObject);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View className="bg-[#232323] h-full">
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Text className="text-blue-400 text-lg ml-4 ">back</Text>
        </TouchableOpacity>
        <View className="flex justify-center h-1/2 ">
          <Text className="text-white ml-4 mb-2">MessageToCeleb</Text>
          <TextInput
            placeholder="Input name"
            className="border border-white pl-2 h-1/2 rounded-lg mx-4 py-2 text-md"
            placeholderTextColor="white"
            style={{ textAlignVertical: "top" }}
          />
        </View>
        <View className="  w-full ">
          <TouchableOpacity
            onPress={() => {
              //   router.navigate("/booking/messageToCeleb");
              sendRequest();
            }}
            className="bg-purple-500 mx-4 py-5 rounded-full items-center  "
          >
            <Text className=" text-lg text-white">Send</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MessageToCeleb;
