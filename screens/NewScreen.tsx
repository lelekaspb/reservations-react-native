import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function NewScreen() {
  const [name, setName] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");

  const navigation = useNavigation<any>();

  const createBooking = async () => {
    const payload = {
      name: name,
      numberOfPeople: Number(numberOfPeople),
      phone: phone,
      email: email,
      date: date,
      comment: comment,
    };

    const local = Platform.OS === "ios" ? "localhost" : "10.0.2.2";

    axios
      .post("http://" + local + ":3000/bookings", payload)
      .then(() => {
        setName("");
        setPhone("");
        setNumberOfPeople("");
        setEmail("");
        setDate("");
        setComment("");
        alert("the reservation has been created!");
        navigation.navigate("All");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Name"
        style={styles.mt}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Amount of guests"
        style={styles.mt}
        keyboardType="number-pad"
        value={numberOfPeople}
        onChangeText={setNumberOfPeople}
      />
      <TextInput
        placeholder="Phone number"
        style={styles.mt}
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        placeholder="Email"
        style={styles.mt}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Date"
        style={styles.mt}
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        placeholder="Comment"
        style={styles.mt}
        value={comment}
        onChangeText={setComment}
      />

      <Button title="Create" onPress={createBooking} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mt: {
    marginTop: 20,
  },
});
