import { View, Text, KeyboardAvoidingView, Pressable } from "react-native";
import React, { useState } from "react";
import { Button, CheckBox, CheckBoxProps, Input } from "@ui-kitten/components";
import { router } from "expo-router";

const useCheckboxState = (initialCheck = false): CheckBoxProps => {
  const [checked, setChecked] = useState(initialCheck);
  return { checked, onChange: setChecked };
};

const index = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const primaryCheckboxState = useCheckboxState();

  console.log("ppp: ", primaryCheckboxState);

  return (
    <View className="flex-1 w-full    items-center justify-center bg-gray-95 bg-[#121114]">
      <KeyboardAvoidingView
        className="  w-full"
        behavior="padding"
        keyboardVerticalOffset={95}
      >
        <View className="px-4 w-full  ">
          <Text className="text-5xl font-bold mb-6 text-gray-50">Login</Text>

          <View className="flex flex-col gap-4  ">
            <Input
              className="bg-red-300"
              placeholder="Enter email address"
              value={email}
              onChangeText={(nextValue) => setEmail(nextValue)}
            />
            <Input
              className="bg-red-300"
              placeholder="Enter password"
              value={password}
              onChangeText={(nextValue) => setPassword(nextValue)}
            />
            <Input
              className="bg-red-300"
              placeholder="confirm password"
              value={password}
              onChangeText={(nextValue) => setPassword(nextValue)}
            />
          </View>

          <View className="flex flex-row justify-between items-center my-8">
            <View className="flex-row items-center">
              <CheckBox
                style={{ margin: 2 }}
                status="primary"
                {...primaryCheckboxState}
              />
              <Text className="text-gray-50 ml-2">Remember me</Text>
            </View>
            <Pressable
              onPress={() => {
                router.navigate("/Authentication/login");
              }}
            >
              <Text className="text-gray-50 font-bold">login instead</Text>
            </Pressable>
          </View>

          <Button style={{ margin: 2 }} status="success">
            Login
          </Button>
          <Button
            onPress={() => {
              router.navigate("/Authentication/signup");
            }}
            style={{ margin: 2, marginTop: 10 }}
            status="danger"
          >
            Sign Up
          </Button>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default index;
