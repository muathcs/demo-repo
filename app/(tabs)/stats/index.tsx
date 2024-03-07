import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Stats = () => {
  return (
    <SafeAreaView>
      <View>
        <Link href="/stats/settings">Settings</Link>
      </View>
    </SafeAreaView>
  );
};

export default Stats;
