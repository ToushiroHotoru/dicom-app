import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";

import { useState } from "react";

export default function App() {
  const [data, setData] = useState([
    {
      name: "Алексей",
      img: require("../assets/Alex.png"),
      desc: "Системный архитектор",
    },
    {
      name: "Вадим",
      img: require("../assets/Vadim.png"),
      desc: "Team leader, Backend-developer, Frontend developer",
    },
    {
      name: "Сергей",
      img: require("../assets/python.png"),
      desc: "Python Backend-developer, telegram bot, QA-тестировщик",
    },
    {
      name: "Аркадий",
      img: require("../assets/hamki.jpg"),
      desc: "JS Backend-developer Express, JS Frontend developer React",
    },
  ]);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/fon2.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        {/* <View style={styles.h1Box}>
          <Text style={styles.h1}>НАША КОМАНДА</Text>
        </View> */}
        <View style={styles.FlatListBox}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 10,
              paddingBottom: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            data={data}
            renderItem={({ item }) => (
              <View style={styles.personBox}>
                <View style={styles.nameBox}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={styles.imgBox}>
                  <Image source={item.img} style={styles.img} />
                </View>
                <View style={styles.descBox}>
                  <Text style={styles.desc}>{item.desc}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.name}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
    // backgroundColor: "#fff",
    justifyContent: "center",
  },
  image: { flex: 1, alignItems: "center" },
  name: {
    fontSize: 24,
    color: "#4c7ac2",
    paddingVertical: 10,
  },
  img: {
    height: "100%",
    width: "100%",
  },
  imgBox: {
    width: 200,
    height: 200,
  },
  desc: {
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 10,
  },
  descBox: {
    width: "90%",
  },
  FlatListBox: {
    flex: 1,
    marginTop: 80,
  },
  personBox: {
    alignItems: "center",
    marginBottom: 20,
  },
  h1: {
    fontSize: 32,
    // color: "blue",
  },

  h1Box: {
    paddingTop: 30,
  },
});
