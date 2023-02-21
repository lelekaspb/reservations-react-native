import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  Platform,
  StyleSheet,
} from "react-native";
import Booking from "../components/Booking";
import { BookingEntity } from "../entities/BookingEntity";
import Navigation from "./../components/Navigation";

export default function ListScreen() {
  const initState = [
    {
      id: 1,
      name: "Fox Mulder",
      numberOfPeople: 2,
      date: new Date(2023, 2, 15),
      phone: "+1 (206) 555 11 55",
      email: "mulder@fbi.usa",
      comment: "no lactose in the food, please",
    },
    {
      id: 2,
      name: "Dana Scully",
      numberOfPeople: 4,
      date: new Date(2023, 2, 17),
      phone: "+1 (206) 777 11 77",
      email: "scully@fbi.usa",
      comment: "gluten free only",
    },
  ];
  const [bookings, setBookings] = useState(initState);

  const local = Platform.OS === "ios" ? "localhost" : "10.0.2.2";

  // useEffect(() => {
  //   const fetchBookings = async () => {
  //     // axios
  //     //   .get("https://" + local + ":3000/bookings")
  //     //   .then((response) => {
  //     //     console.log(response.data);
  //     //     setBookings(response.data);
  //     //   })
  //     //   .catch((error) => {
  //     //     console.log(error);
  //     //   });

  //     const url = "https://" + local + ":3000/bookings";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json; charset=utf-8",
  //       },
  //     };

  //     try {
  //       const request = await fetch(url, options);
  //       const data = await request.json();
  //       setBookings(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchBookings();
  // }, []);

  return (
    <View>
      <Text>This is the list Screen</Text>
      <SafeAreaView>
        <FlatList
          style={styles.list}
          data={bookings}
          renderItem={({ item }: { item: BookingEntity }) => (
            <Booking booking={item} />
          )}
          keyExtractor={(item) => "" + item.id}
        />
      </SafeAreaView>
      {/* <Button onPress={() => navigation.navigate("Edit")} title="Go to Edit"></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});
