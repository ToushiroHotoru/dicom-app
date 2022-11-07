import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, ImageBackground } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Services from "./screens/Services";
import Team from "./screens/Team";
import Contacts from "./screens/Contacts";
import Mobile from "./screens/Mobile";
import TelegramBot from "./screens/TelegramBot";
import Bitrix24 from "./screens/Bitrix24";
import Spa from "./screens/Spa";
import ServiceOrder from "./screens/ServiceOrder";
import Jobs from "./screens/Jobs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Services"
          component={Services}
          options={{
            headerTransparent: true,
            title: "УСЛУГИ",
            headerTintColor: "#4c7ac2",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Team"
          component={Team}
          options={{
            headerTransparent: true,
            title: "НАША КОМАНДА",
            headerTintColor: "#4c7ac2",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{
            headerTransparent: true,
            title: "КОНТАКТЫ",
            headerTintColor: "#4c7ac2",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Mobile"
          component={Mobile}
          options={{
            headerTransparent: true,
            title: "",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="TelegramBot"
          component={TelegramBot}
          options={{
            headerTransparent: true,
            title: "",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Bitrix24"
          component={Bitrix24}
          options={{
            headerTransparent: true,
            title: "",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Spa"
          component={Spa}
          options={{
            headerTransparent: true,
            title: "",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="ServiceOrder"
          component={ServiceOrder}
          options={{
            headerTransparent: true,
            title: "ЗАКАЗАТЬ УСЛУГ",
            headerTintColor: "#4c7ac2",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Jobs"
          component={Jobs}
          options={{
            headerTransparent: true,
            title: "ВАКАНСИИ",
            headerTintColor: "#4c7ac2",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
  },
});
