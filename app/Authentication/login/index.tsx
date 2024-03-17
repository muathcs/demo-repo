import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import {
  Button,
  Card,
  CheckBox,
  CheckBoxProps,
  Icon,
  IconElement,
  Input,
} from "@ui-kitten/components";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useAuth } from "../../../context/authContext";
import { AuthContextType } from "../../../Tstypes/types";

const StarIcon = (props): IconElement => (
  <AntDesign name="staro" size={24} color="black" />
);

const useCheckboxState = (initialCheck = false): CheckBoxProps => {
  const [checked, setChecked] = useState(initialCheck);
  return { checked, onChange: setChecked };
};

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login }: AuthContextType = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const primaryCheckboxState = useCheckboxState();

  async function handleLogin() {
    try {
      setLoading(true);
      const userObj = await login(email, password);
      console.log("signed in succefully");
      setSuccessMessage("signed in succefully");
      setErrorMessage("");
      router.navigate("/home");
    } catch (error) {
      setErrorMessage("Unable to log in check your email or password");
      setSuccessMessage("");
      console.error(error);
    }
    setLoading(false);
  }

  return (
    <View className="flex-1 w-full    items-center justify-center bg-gray-95 bg-[#121114]">
      <KeyboardAvoidingView
        className="  w-full"
        behavior="padding"
        keyboardVerticalOffset={10}
      >
        <View className="px-4 w-full   ">
          <Text className="text-5xl font-bold mb-2 text-gray-50">Login</Text>
          {successMessage ? (
            <View className="bg-green-500 rounded-lg mb-2 py-4 text-white pl-2 ">
              <Text className="text-white text-md">{successMessage}</Text>
            </View>
          ) : null}
          {errorMessage ? (
            <View className="bg-red-500 rounded-lg mb-2 py-4 text-white pl-2  ">
              <Text className="text-white text-md">{errorMessage}</Text>
            </View>
          ) : null}
          <View className="flerx flex-col gap-4  ">
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
            <Pressable>
              <Text className="text-gray-50 font-bold">Reset password</Text>
            </Pressable>
          </View>

          <Button onPress={handleLogin} style={{ margin: 2 }} status="success">
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

export default Login;
