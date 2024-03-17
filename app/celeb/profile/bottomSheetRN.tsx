import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useCallback, useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import index from "../..";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link, router } from "expo-router";

const bottomSheetRN = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOepn] = useState(true);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    // if (index === 0) {
    //   bottomSheetRef.current?.close();
    // }
  }, []);

  const snapPoints = ["15%"];
  return (
    <BottomSheet
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      onClose={() => setIsOepn(false)}
      backgroundStyle={{ backgroundColor: "#232323" }}
      handleIndicatorStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log("on this");
            router.replace("/booking/");
          }}
          className="bg-purple-500 py-3 px-10 rounded-full"
        >
          <Text>Book a personal video</Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    zIndex: 10,
    height: "100%",
  },
});

export default bottomSheetRN;
