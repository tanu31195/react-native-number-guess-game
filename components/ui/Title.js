import { Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
    borderWidth: 5,
    borderColor: colors.white,
    padding: 10,
  },
});
