import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function Mobile() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/androidios.png")} style={styles.img} />
      <Text style={styles.title}>Консультация бесплатно</Text>
      <Text style={styles.desc}>
        Разработка типового приложения на 10 экранов для iOS и Android в среднем
        стоит 1 000 000 рублей и занимает 1,5 месяца. Мы разрабатываем за 1
        месяц и 700 000 рублей. Экономия составит до 30% бюджета и времени.
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
