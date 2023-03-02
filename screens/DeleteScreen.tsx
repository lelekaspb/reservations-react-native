import { View, Text, StyleSheet, Button, Platform } from "react-native";
import React from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function DeleteScreen(props: any) {
  const id: number = props.route.params.id;
  console.log(id);
  const navigation = useNavigation<any>();

  const deleteBooking = async () => {
    console.log("delete");

    const local = Platform.OS === "ios" ? "localhost" : "10.0.2.2";

    axios
      .delete("http://" + local + ":3000/bookings/" + id)
      .then(() => {
        alert("the reservation has been deleted!");
        navigation.navigate("List");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View>
      <Text style={styles.mt}>
        Are you sure you want to delete the booking?
      </Text>

      <Button title="Yes, delete" onPress={deleteBooking} />
    </View>
  );
}

const styles = StyleSheet.create({
  mt: {
    marginTop: 20,
  },
});
