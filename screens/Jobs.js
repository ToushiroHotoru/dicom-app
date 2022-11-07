import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export default function Spa() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/fon2.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <ScrollView
          contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}
          style={{ marginTop: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>
            DICOM - расширяет команду и ищет разработчика.
          </Text>
          <Text style={styles.subTitle}>
            Предполагается длительное удалённое сотрудничество!
          </Text>

          <View style={styles.mainContainer}>
            <Text style={styles.containerTitle}>НАШ ОСНОВНОЙ ПРОДУКТ</Text>
            <Text style={[styles.subTitle, styles.containerSubTitle]}>
              Собственная CRM система
            </Text>
            <Image
              source={require("../assets/logo512.png")}
              style={styles.img}
            />
            <Text style={styles.desc}>
              Универсальная модульная облачная платформа управления процессами
              компании на основе web технологий. Система является комплексным
              решением для автоматизации и контроля различных бизнес процессов
              компании. Продукт включает в себя модули: «CRM», «Задачник»,
              «Склад»
            </Text>
          </View>
          <View style={styles.requirements}>
            <Text style={styles.containerTitle}>
              БУДЕМ РАДЫ ВИДЕТЬ ВАС В НАШЕЙ КОМАНДЕ!
            </Text>
            <View style={styles.list}>
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
                <Text>
                  Полное внедрение Битрикс24 под ключ. Сроки от полу года.
                </Text>
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
          <View style={styles.requirements}>
            <Text style={styles.containerTitle}>ЧТО ТРЕБУЕМ:</Text>
            <View style={styles.list}>
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
                <Text>
                  Полное внедрение Битрикс24 под ключ. Сроки от полу года.
                </Text>
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

          <View style={styles.requirements}>
            <Text style={styles.containerTitle}>БУДЕТ БОЛЬШИМ ПЛЮСОМ:</Text>
            <View style={styles.list}>
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
                <Text>
                  Полное внедрение Битрикс24 под ключ. Сроки от полу года.
                </Text>
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

          <View style={styles.requirements}>
            <Text style={styles.containerTitle}>ЧТО ДАЕМ:</Text>
            <View style={styles.list}>
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
                <Text>
                  Полное внедрение Битрикс24 под ключ. Сроки от полу года.
                </Text>
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
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    color: "#4c7ac2",
    fontSize: 24,
    textAlign: "center",
    // marginTop: 120,
  },
  mainContainer: {
    marginTop: 40,
    width: windowWidth - 100,
    backgroundColor: "#adeaf0",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  containerTitle: {
    // marginTop: 20,
    width: windowWidth - 100,
    color: "#4c7ac2",
    fontSize: 16,
    textAlign: "center",
  },
  containerSubTitle: {
    fontSize: 12,
  },
  subTitle: {
    color: "gray",
    textAlign: "center",
  },
  img: {
    width: windowWidth - 150,
    height: 100,
    resizeMode: "contain",
  },
  desc: {
    textAlign: "justify",
  },
  list: {
    width: windowWidth - 100,
  },
  row: {
    flexDirection: "row",
  },
  requirements: {
    marginTop: 20,
  },
});
