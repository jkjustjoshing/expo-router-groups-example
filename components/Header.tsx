import React from "react";
import { StyleSheet } from "react-native";

import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

import Colors from "@/constants/Colors";
import { Link } from "expo-router";

export default function Header() {
  return (
    <View style={styles.container} testID="josh">
      <Link href="/">Tab 1</Link>
      <Link href="/(tabs)/">Tab 1 with "(tabs)"</Link>
      <Link href="/two">Tab 2</Link>
      <Link href="/(tabs)/two">Tab 2 with "(tabs)"</Link>
      <Link href="/modal">Modal</Link>
      <Link href="/(patient)/inbox">Patient Inbox</Link>
      <Link href="/(admin)/inbox">Admin Inbox</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#f77",
    gap: 20,
    paddingVertical: 15,
  },
});
