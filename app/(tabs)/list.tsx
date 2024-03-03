import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const list = () => {
  return (
    <View>
      <Link href="/list/hello">News One</Link>
      <Link href="/list/2">News two</Link>
      <Link href="/list/3">News three</Link>
    </View>
  );
};

export default list;
