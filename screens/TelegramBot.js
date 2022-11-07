import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function TelegramBot() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/bot-telegram.png")}
        style={styles.img}
      />
      <Text style={styles.title}>Консультация бесплатно</Text>
      <Text style={styles.desc}>
        Разработка бота любой сложности в кратчайший срок Стоимость от 5000 руб.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#4c7ac2",
    marginBottom: 20,
  },
  desc: {
    width: windowWidth - 30,
    textAlign: "center",
  },
  img: {
    width: windowWidth - 30,
    resizeMode: "contain",
    height: 150,
  },
});
