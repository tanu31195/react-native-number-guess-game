import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: colors.accent5,
    borderRadius: 10,
    padding: 25,
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: colors.accent5,
    fontSize: 35,
  },
});
