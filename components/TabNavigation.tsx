import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewScreen from "../screens/NewScreen";
import Navigation from "./Navigation";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="All"
        component={Navigation}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="New" component={NewScreen} />
    </Tab.Navigator>
  );
}
