import { Text, StyleSheet, Platform } from "react-native";
import colors from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 25,
    color: colors.white,
    textAlign: "center",
    borderWidth: Platform.OS === "ios" ? 5 : 1,
    borderWidth: Platform.select({ ios: 5, android: 1 }),
    borderColor: colors.white,
    padding: 10,
    maxWidth: "80%",
  },
});
