import { View, Text, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

const OrderTo = () => {
  // treated this as boolean, but compare using x == "true" | "false"
  const { forSomeoneElse } = useLocalSearchParams<{ forSomeoneElse: string }>();

  const [messageTo, setMessageTo] = useState<string>("");
  const [messageFrom, setMessageFrom] = useState<string>("");

  //   if (!forSomeoneElse) {
  //     console.log("it's false ");
  //   } else {
  //     console.log("it's a pluis");
  //   }
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

        <View className="mt-10">
          <Text className="text-white ml-4 mb-2">To</Text>
          <TextInput
            value={messageTo}
            onChangeText={(text) => {
              setMessageTo(text);
            }}
            placeholder="Name"
            className="border mx-4 py-3 pl-2 text-xl border-white rounded-lg text-white"
            style={{ textAlignVertical: "top" }}
            placeholderTextColor={"grey"}
          />
          {forSomeoneElse == "true" ? (
            <>
              <Text className="text-white ml-4 mt-5 mb-2">From</Text>

              <TextInput
                value={messageFrom}
                onChangeText={(text) => {
                  setMessageFrom(text);
                }}
                placeholder="Name"
                className="border mx-4 py-3 pl-2 text-xl border-white rounded-lg text-white "
                style={{ textAlignVertical: "top" }}
                placeholderTextColor={"grey"}
              />
            </>
          ) : null}
        </View>

        <View className="top-10 w-full">
          <TouchableOpacity
            onPress={() => {
              //send this to the next screen
              const nameOfReciepientOFMessage = {
                messageTo,
                messageFrom,
              };
              router.navigate({
                pathname: "/booking/messageToCeleb",
                params: nameOfReciepientOFMessage,
              });
            }}
            className="bg-purple-500 mx-4 py-5 rounded-full items-center  "
          >
            <Text className=" text-lg text-white">Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default OrderTo;
