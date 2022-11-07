import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function Bitrix24() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/b24.png")} style={styles.img} />
      <Text style={styles.title}>Список работ</Text>
      <View style={styles.desc}>
        <View style={styles.row}>
          <Text>&#8226;&nbsp;</Text>
          <Text>
            Автоматизация компнии с помощью бизнес-процессов Битрикс24
          </Text>
        </View>
        <View style={styles.row}>
          <Text>&#8226;&nbsp;</Text>
          <Text>Оптимизация бизнес-процессов</Text>
        </View>
        <View style={styles.row}>
          <Text>&#8226;&nbsp;</Text>
          <Text>Обучение как сотрудников так и руководителей.</Text>
        </View>
        <View style={styles.row}>
          <Text>&#8226;&nbsp;</Text>
          <Text>Полное внедрение Битрикс24 под ключ.</Text>
        </View>
        <View style={styles.row}>
          <Text>&#8226;&nbsp;</Text>
          <Text>Сроки от полу года.</Text>
        </View>

        <View style={styles.row}>
          <Text>&#8226;&nbsp;</Text>
          <Text>Полное внедрение Битрикс24 под ключ. Сроки от полу года.</Text>
        </View>
        <View style={styles.row}>
          <Text>&#8226;&nbsp;</Text>
          <Text>
            Стоимость расчитывается после подготовки ТЗ и аудита
            бизнес-процессов компании.
          </Text>
        </View>
      </View>
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
    // textAlign: "left",
  },
  img: {
    width: windowWidth - 30,
    resizeMode: "contain",
    height: 170,
  },
  row: {
    flexDirection: "row",
  },
});
