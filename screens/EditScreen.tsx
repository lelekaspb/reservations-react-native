import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { BookingEntity } from "../entities/BookingEntity";
import { useNavigation } from "@react-navigation/native";

export default function EditScreen(props: any) {
  const booking: BookingEntity = props.route.params.booking;
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text style={styles.mt}>{booking.name}</Text>
      <Text style={styles.mt}>{booking.comment}</Text>
      <Button title="Delete" onPress={() => navigation.navigate("Delete")} />
    </View>
  );
}

const styles = StyleSheet.create({
  mt: {
    marginTop: 20,
  },
});
