import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Platform,
  StyleSheet,
} from "react-native";
import Booking from "../components/Booking";
import { BookingEntity } from "../entities/BookingEntity";

export default function ListScreen() {
  const [bookings, setBookings] = useState([]);
  const navigation = useNavigation<any>();

  const local = Platform.OS === "ios" ? "localhost" : "10.0.2.2";

  useEffect(() => {
    const fetchBookings = async () => {
      axios
        .get("http://" + local + ":3000/bookings")
        .then((response) => {
          setBookings(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const focusHandler = navigation.addListener("focus", () => {
      fetchBookings();
    });
    return focusHandler;
  }, [navigation]);

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
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});
