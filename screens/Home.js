import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
} from "react-native";
import { useState } from "react";
import { Dimensions } from "react-native";
// import AppLoading from "expo-app-loading";
// import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const windowWidth = Dimensions.get("window").width;

export default function App({ navigation }) {
  const [data, setData] = useState([
    {
      title: "Услуги",
      img: require("../assets/dicomYslugi.png"),
      route: "Services",
    },
    {
      title: "Команда",
      img: require("../assets/dicomCommand.png"),
      route: "Team",
    },
    {
      title: "Контакты",
      img: require("../assets/dicomContacts.png"),
      route: "Contacts",
    },
    {
      title: "Вакансии",
      img: require("../assets/dicomVakan.png"),
      route: "Jobs",
    },
  ]);

  // let [fontsLoaded] = useFonts({
  //   Inter_900Black,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/fon2.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.imgTitleBox}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.imgTitle}
          />
        </View>
        <View style={styles.test}>
          <FlatList
            contentContainerStyle={{
              paddingBottom: 10,
              // flex: 1,
              justifyContent: "center",
            }}
            data={data}
            numColumns={4}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.menuBtn}
                onPress={() => {
                  navigation.navigate(item.route);
                }}
              >
                <View style={styles.imgBox}>
                  <Image source={item.img} style={styles.img} />
                </View>

                <Text style={styles.textBtn}>{item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.title}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  menuBtn: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 20,
  },
  textBtn: {
    marginTop: 20,
    // fontWeight: "400",
    // fontFamily: "Inter_900Black",
    // fontSize: 40,
  },
  image: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  imgBox: {
    width: 60,
    height: 60,
  },
  test: {
    flex: 1,
  },
  imgTitle: {
    width: windowWidth - 150,
    height: 200,
    resizeMode: "contain",
  },
  imgTitleBox: {
    alignItems: "center",
    paddingTop: 20,
  },
});
