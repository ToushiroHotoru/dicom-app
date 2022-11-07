import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";
import * as Linking from "expo-linking";

const windowWidth = Dimensions.get("window").width;

export default function SubContacts() {
  return (
    <View style={styles.SubContactsContainer}>
      <Text style={styles.title}>НАШИ КОНТАКТЫ</Text>
      <Text style={styles.subTitle}>
        Cамый удобный способ
        <Text
          onPress={() => {
            Linking.openURL("https://t.me/dicom_team");
          }}
          style={styles.link}
        >
          {" "}
          Telegram
        </Text>
      </Text>
      <View style={styles.imgBox}>
        <Image
          source={require("../assets/contactspng.png")}
          style={styles.img}
        />
      </View>
      <Text style={styles.desc}>Наш телефон: +7 960 311 21 05</Text>
      <Text
        style={[styles.link, styles.desc]}
        onPress={() => {
          Linking.openURL("https://t.me/dicom_team");
        }}
      >
        {" "}
        Telegram{" "}
      </Text>
      <Text style={styles.desc}> e-mail: bavalex24@yandex.ru</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  SubContactsContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imgBox: {
    // borderWidth: 1,
    marginVertical: 30,
    // width: 360,
    // height: 140,
  },
  img: {
    maxWidth: windowWidth,
    height: 150,
  },

  title: {
    color: "#4c7ac2",
    fontSize: 24,
  },
  subTitle: {
    color: "gray",
  },
  desc: {
    textAlign: "center",
    width: windowWidth - 100,
    fontSize: 18,
  },
  link: {
    color: "blue",
  },
});
