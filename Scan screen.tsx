import React from "react";
import { View, Button, Text } from "react-native";

export default function ScanScreen({ onScan }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HEX Scanner</Text>
      <Button title="Scan Demo Code" onPress={() => onScan("HEX-001")} />
    </View>
  );
}