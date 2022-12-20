import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer,DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Constant from "expo-constants";

import { Home } from "./src/screen/Home";
import { Explore } from "./src/screen/Explore";
import { Search } from "./src/components/Search";
import { Subscribe } from "./src/screen/Subscribe";
import { VideoPlayer } from "./src/screen/VideoPlayer";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./src/reducers/reducer";

const store = createStore(reducer);
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme,
    headerColor:"#404040"
  }
}
const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme,
    headerColor:"white"
  }
}

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "home") {
            return <Ionicons name="home" size={24} color="black" />;
          } else if (route.name === "explore") {
            return <MaterialIcons name="explore" size={24} color="black" />;
          } else {
            return (
              <MaterialIcons name="subscriptions" size={24} color="black" />
            );
          }

          // You can return any component that you like here!
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="explore"
        component={Explore}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="subscribe"
        component={Subscribe}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};
<View></View>;

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="root home"
            component={RootHome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="search"
            component={Search}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="videoPlayer"
            component={VideoPlayer}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
