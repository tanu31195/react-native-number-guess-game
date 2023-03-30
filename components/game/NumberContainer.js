import { StyleSheet, Text, View, Dimensions } from "react-native";
import colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: colors.accent5,
    borderRadius: 10,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: colors.accent5,
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});
