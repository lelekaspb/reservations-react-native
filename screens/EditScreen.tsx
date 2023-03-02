import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { BookingEntity } from "../entities/BookingEntity";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function EditScreen(props: any) {
  const booking: BookingEntity = props.route.params.booking;
  const navigation = useNavigation<any>();
  const id = booking.id;

  const [name, setName] = useState(booking.name);
  const [numberOfPeople, setNumberOfPeople] = useState(
    booking.numberOfPeople.toString()
  );
  const [phone, setPhone] = useState(booking.phone);
  const [comment, setComment] = useState(booking.comment);

  const updateBooking = async () => {
    console.log("update");
    const payload = {
      name: name,
      numberOfPeople: Number(numberOfPeople),
      phone: phone,
      comment: comment,
    };

    const local = Platform.OS === "ios" ? "localhost" : "10.0.2.2";

    axios
      .put("http://" + local + ":3000/bookings/" + booking.id, payload)
      .then(() => {
        alert("the reservation has been updated!");
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <TextInput style={styles.mt} value={name} onChangeText={setName} />
      <TextInput
        style={styles.mt}
        keyboardType="number-pad"
        value={numberOfPeople}
        onChangeText={setNumberOfPeople}
      />
      <TextInput style={styles.mt} value={phone} onChangeText={setPhone} />
      <TextInput style={styles.mt} value={comment} onChangeText={setComment} />

      <Button title="Update" onPress={() => updateBooking()} />
      <Button
        title="Delete"
        onPress={() => navigation.navigate("Delete", { id })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mt: {
    marginTop: 20,
  },
});
