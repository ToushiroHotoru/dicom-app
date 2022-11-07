import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Dimensions } from "react-native";
import { Switch } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function ServiceOrder({ navigation }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isBitrix24, setIsBitrix24] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTelegramBot, setIsTelegramBot] = useState(false);
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Text style={styles.label}>Имя</Text>
        <TextInput
          placeholder="Имя"
          style={styles.input}
          onChangeText={setName}
          value={name}
        />
        <Text style={styles.label}>Телефон</Text>
        <TextInput
          style={styles.input}
          placeholder="Телефон"
          onChangeText={setNumber}
          value={number}
        />
        <Text style={styles.label}>Какой продукт интересует?</Text>
        <View style={styles.switchBox}>
          <View style={styles.switchView}>
            <Switch
              value={isBitrix24}
              onValueChange={() => setIsBitrix24(!isBitrix24)}
            />
            <Text>Bitrix24</Text>
          </View>
          <View style={styles.switchView}>
            <Switch
              value={isMobile}
              onValueChange={() => setIsMobile(!isMobile)}
            />
            <Text>Мобильное приложение</Text>
          </View>
          <View style={styles.switchView}>
            <Switch
              value={isTelegramBot}
              onValueChange={() => setIsTelegramBot(!isTelegramBot)}
            />
            <Text>Telegram Bot</Text>
          </View>
        </View>
        <View style={styles.hr}></View>
        <TouchableOpacity
          style={styles.sendBtn}
          onPress={() => {
            navigation.navigate("Services");
          }}
        >
          <Text style={styles.sendBtnText}>Отправить</Text>
        </TouchableOpacity>
        {/* <Text style={styles.label}>Комментарий</Text>
        <TextInput
          style={styles.inputMulti}
          placeholder=" Комментарий..."
          multiline={true}
        /> */}
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginBottom: 15,
    borderBottomWidth: 1,
    width: windowWidth - 90,
    textAlign: "center",
  },
  switchView: {
    flexDirection: "row",
    // justifyContent: "start",
    alignItems: "center",
  },
  switchBox: {
    width: windowWidth - 80,
  },
  inputMulti: {
    borderWidth: 1,
    width: windowWidth - 90,
    height: 150,
    marginTop: 15,
  },
  hr: {
    borderBottomWidth: 1,
    width: windowWidth - 90,
    // height: 1,
  },
  sendBtn: {
    marginTop: 20,
    padding: 20,
    width: windowWidth - 190,
    backgroundColor: "#019ec7",
    borderRadius: 15,
  },
  sendBtnText: {
    textAlign: "center",
    fontWeight: "500",
    color: "white",
    fontSize: 18,
  },
});
