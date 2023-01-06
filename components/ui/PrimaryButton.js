import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    console.log("Pressed");
    onPress();
  }
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: colors.primary6 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 10,
    margin: 5,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: colors.primary5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 5,
  },
  buttonText: {
    textAlign: "center",
    color: colors.white,
  },
  pressed: {
    opacity: 0.75,
  },
});
