import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
} from "react-native";
import React from "react";
import { router, useNavigation } from "expo-router";

const index = () => {
  const navigation = useNavigation("");
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.Container}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginTop: 40,
          }}
        >
          <Image
            style={{ height: 500, width: 300 }}
            width={5}
            height={5}
            source={require("../../assets/images/man-stretching.jpg")}
          />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: Platform.OS == "android" ? 40 : 30,
          }}
        >
          <Text
            style={{
              fontFamily: Platform.OS == "android" ? "sans-serif" : "Cochin",
              fontSize: 20,
            }}
          >
            Fix Your Posture, It's about time
          </Text>
          <Text
            style={{
              fontFamily: Platform.OS == "android" ? "sans-serif" : "Cochin",
              fontSize: 20,
            }}
          >
            Explore that app
          </Text>
          <Text
            style={{
              fontFamily: Platform.OS == "android" ? "sans-serif" : "Cochin",
              fontSize: 20,
            }}
          >
            "Start Your to Journey to Wellness"
          </Text>
        </View>

        <View style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
          <Pressable
            onPress={() => {
              router.navigate("./home");
            }}
            style={{
              backgroundColor: "#7F63FB",
              borderRadius: 20,
              width: "80%",
              paddingVertical: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Get Started</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#F1EAFF",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "red",
  },
});
