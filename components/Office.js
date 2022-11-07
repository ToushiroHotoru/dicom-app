import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function Office() {
  return (
    <View style={styles.OfficeContainer}>
      <Text style={styles.title}>НАШ ОФИС</Text>
      <Text style={styles.subTitle}>улица Ярославская, 76</Text>
      <View style={styles.imgBox}>
        <Image
          source={require("../assets/office.png")}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View style={styles.descBox}>
        <Text style={styles.desc}>5-ый этаж, 514 кабинет</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  OfficeContainer: {
    // flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  test: {
    borderWidth: 1,
  },
  imgBox: {
    borderWidth: 1,
    marginVertical: 30,
  },
  img: {
    maxWidth: windowWidth - 100,
    height: 200,
    borderWidth: 1,
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
  },
  descBox: {
    width: windowWidth - 100,
    paddingVertical: 30,
    backgroundColor: "red",
    borderRadius: 15,
  },
  desc: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  title: {
    color: "#4c7ac2",
    fontSize: 24,
  },
  subTitle: {
    color: "gray",
  },
});
