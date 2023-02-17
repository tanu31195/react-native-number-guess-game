import { Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 25,
    color: colors.white,
    textAlign: "center",
    borderWidth: 5,
    borderColor: colors.white,
    padding: 10,
  },
});
