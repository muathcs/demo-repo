import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ProfileHeader from "./ProfileHeader";
import Routine from "./Routine";
import Recommended from "./Recommended";
import Categories from "./Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import Search from "./Search";
import { useAuth } from "../../../context/authContext";
import { AuthContextType } from "../../../Tstypes/types";

const home = () => {
  // const auth = false;
  // useEffect(() => {
  //   if (!auth) {
  //     router.navigate("/Authentication/login");
  //   }
  // }, []);

  const { currentUser, userInfo }: AuthContextType = useAuth();

  // console.log("userInfo: ", userInfo);
  // console.log("currentUser: ", currentUser);
  return (
    <View className=" h-full bg-[#121114]  ">
      {/* <Redirect href="/booking/" /> */}
      <ScrollView className="">
        <SafeAreaView className="mx-0">
          <View className="flex-1  w-full z-20 ">
            <Search />
            <ProfileHeader />
            <Routine />
            <Recommended />
            <Categories />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default home;
