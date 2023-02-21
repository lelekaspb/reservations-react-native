import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { BookingEntity } from "../entities/BookingEntity";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackMain } from "./Navigation";

type bookingScreenProp = StackNavigationProp<StackMain, "Edit">;

export default function Booking({ booking }: { booking: BookingEntity }) {
  const navigation = useNavigation<bookingScreenProp>();

  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate("Edit", { booking })}
    >
      <Text>
        {booking.name} {booking.phone}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
