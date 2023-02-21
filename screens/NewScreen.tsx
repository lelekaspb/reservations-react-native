import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function NewScreen() {
  return (
    <View>
      <Text style={styles.mt}>This is New Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mt: {
    marginTop: 20,
  },
});
