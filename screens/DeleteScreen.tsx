import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function DeleteScreen() {
  return (
    <View>
      <Text style={styles.mt}>
        Are you sure you want to delete the booking?
      </Text>

      <Button
        title="Yes, delete"
        onPress={() => console.log("delete reservation")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mt: {
    marginTop: 20,
  },
});
