import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function Services({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/fon2.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.list}>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
              navigation.navigate("Mobile");
            }}
          >
            <Text style={styles.listItemTitle}>
              Разработаем мобильное приложение
            </Text>
            <Text style={styles.listItemDesc}>Android, ios, React native</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
              navigation.navigate("TelegramBot");
            }}
          >
            <Text style={styles.listItemTitle}>
              Разработаем телеграм бота любой сложности
            </Text>
            <Text style={styles.listItemDesc}>
              интеграция бота с любыми API
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
              navigation.navigate("Bitrix24");
            }}
          >
            <Text style={styles.listItemTitle}>
              Внедрим Битрикс24, мы официальный золотой партнер
            </Text>
            <Text style={styles.listItemDesc}>
              Внедрение, настройка, интеграции, бизнес-процессы, автоматизация
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
              navigation.navigate("Spa");
            }}
          >
            <Text style={styles.listItemTitle}>
              Разработаем web приложение - SPA
            </Text>
            <Text style={styles.listItemDesc}>
              SPA — Single Page Application
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceOrderBtn}
            onPress={() => {
              navigation.navigate("ServiceOrder");
            }}
          >
            <Text style={styles.serviceOrderBtnText}>Заказать услугу</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  list: {
    alignItems: "center",
    marginTop: 30,
  },
  listItem: {
    padding: 20,
    backgroundColor: "white",
    width: "80%",
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  listItemTitle: {
    color: "#4c7ac2",
    fontSize: 22,
  },
  listItemDesc: {
    color: "gray",
  },
  serviceOrderBtn: {
    padding: 20,
    width: "80%",
    backgroundColor: "#019ec7",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  serviceOrderBtnText: {
    color: "white",
    fontWeight: "700",
    fontSize: 21,
    textAlign: "center",
  },
});
