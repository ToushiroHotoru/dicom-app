import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
// import AppLoading from "expo-app-loading";
// import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const windowWidth = Dimensions.get("window").width;

export default function Requisites() {
  // let [fontsLoaded] = useFonts({
  //   Inter_900Black,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <View style={styles.RequisitesContainer}>
      <View style={styles.firstContainer}>
        <Text style={styles.title}>Реквизиты</Text>
        <Text style={styles.subTitle}>ИП Бакшандаев А.В.</Text>
        <View style={styles.table}>
          <View
            style={[styles.row, styles.gray, styles.borderBottomWidthStyle]}
          >
            <View style={styles.td}>
              <Text style={styles.tableText}>Наименование</Text>
            </View>
            <View style={styles.td}>
              <Text>ИП Бакшандаев А.В.</Text>
            </View>
          </View>
          <View style={[styles.row, styles.borderBottomWidthStyle]}>
            <View style={styles.td}>
              <Text>ИНН</Text>
            </View>
            <View style={styles.td}>
              <Text>212906995375</Text>
            </View>
          </View>
          <View
            style={[styles.row, styles.gray, styles.borderBottomWidthStyle]}
          >
            <View style={styles.td}>
              <Text>ОГРНИП</Text>
            </View>
            <View style={styles.td}>
              <Text>321213000010599</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.td}>
              <Text>E-mail</Text>
            </View>
            <View style={styles.td}>
              <Text>bavalex24@yandex.ru</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.secondContainer}>
        <Text style={styles.title}>Реквизиты банка</Text>
        <Text style={styles.subTitle}>Сбербанк</Text>
        <View style={styles.table}>
          <View
            style={[styles.row, styles.gray, styles.borderBottomWidthStyle]}
          >
            <View style={styles.td}>
              <Text>Расчетный счет</Text>
            </View>
            <View style={styles.td}>
              <Text>40802810775000001204</Text>
            </View>
          </View>
          <View style={[styles.row, styles.borderBottomWidthStyle]}>
            <View style={styles.td}>
              <Text>Наименование банка</Text>
            </View>
            <View style={styles.td}>
              <Text>ЧУВАШСКОЕ ОТДЕЛЕНИЕ N8613 ПАО СБЕРБАНК</Text>
            </View>
          </View>
          <View
            style={[styles.row, styles.gray, styles.borderBottomWidthStyle]}
          >
            <View style={styles.td}>
              <Text>Корреспондентский счет</Text>
            </View>
            <View style={styles.td}>
              <Text>30101810300000000609</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.td}>
              <Text>БИК</Text>
            </View>
            <View style={styles.td}>
              <Text>049706609</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  RequisitesContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  firstContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  secondContainer: {
    marginVertical: 15,
    alignItems: "center",
  },
  title: {
    color: "#4c7ac2",
    fontSize: 24,
  },
  subTitle: {
    color: "gray",
  },
  row: {
    flexDirection: "row",
    // width: windowWidth,
    justifyContent: "center",
    padding: 10,
  },
  td: {
    width: windowWidth / 2 - 10,
    alignItems: "center",
    justifyContent: "center",
  },
  gray: {
    backgroundColor: "#a8a7a7",
    // opacity: 0.5,
    zIndex: -5,
  },
  tableText: {
    zIndex: 5,
  },
  table: {
    marginTop: 20,
    borderWidth: 1,
    width: windowWidth - 20,
  },
  borderBottomWidthStyle: {
    borderBottomWidth: 1,
  },
});
