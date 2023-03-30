import { View, StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const deviceWidth = Dimensions.get("window");

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginTop: deviceWidth < 380 ? 18 : 30,
    marginHorizontal: 20,
    backgroundColor: colors.primary8,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
});
