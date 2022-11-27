import { View, Text } from "react-native";
import React from "react";

export const SignUpScreen = () => {
  return (
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}
    >
      <View
        style={{
          height: "50%",
          width: "100%",
          backgroundColor: "#fff",
          justifyContent: "center",
        }}
      >
        <Text>Testing a modal with transparent background</Text>
      </View>
    </View>
  );
};
