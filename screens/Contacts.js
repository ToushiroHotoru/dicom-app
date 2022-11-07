import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import SubContacts from "../components/SubContacts";
import Office from "../components/Office";
import Requisites from "../components/Requisites";

export default function Contacts() {
  const [isContacts, setIsContacts] = useState(true);
  const [isRequisites, setIsRequisites] = useState(false);
  const [isOffice, setIsOffice] = useState(false);

  const setFalseToAll = () => {
    setIsContacts(false);
    setIsRequisites(false);
    setIsOffice(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/fon2.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.mainContent}>
          <View style={styles.menuBar}>
            <TouchableOpacity
              style={[styles.menuItem, styles.menuItemContacts]}
              onPress={() => {
                setFalseToAll();
                setIsContacts(true);
              }}
            >
              <Text>Контакты</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                setFalseToAll();
                setIsOffice(true);
              }}
            >
              <Text>Офис</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.menuItem, styles.menuItemRequisites]}
              onPress={() => {
                setFalseToAll();
                setIsRequisites(true);
              }}
            >
              <Text>Реквизиты</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewContent}>
            {isContacts && <SubContacts />}
            {isOffice && <Office />}
            {isRequisites && <Requisites />}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    paddingTop: 90,
    // flex: 1,
    // justifyContent: "center",
    // borderWidth: 1,
  },
  menuBar: {
    flexDirection: "row",
    justifyContent: "center",
    // borderWidth: 1,
  },
  menuItem: {
    padding: 10,
    backgroundColor: "white",
  },
  menuItemContacts: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderRightWidth: 0.5,
    borderColor: "gray",
  },

  menuItemRequisites: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderLeftWidth: 0.5,
    borderColor: "gray",
  },
  image: {
    flex: 1,
  },
  viewContent: {
    // paddingTop: 60,
  },
});
