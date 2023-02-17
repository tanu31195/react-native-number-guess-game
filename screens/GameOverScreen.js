import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import colors from "../constants/colors";

export default function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlightText}>X</Text> rounds
          to guess the number <Text style={styles.highlightText}>Y</Text>.
        </Text>
      </View>
      <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 200,
    height: 400,
    width: 400,
    borderWidth: 3,
    borderColor: colors.primary8,
    overflow: "hidden",
    margin: 15,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    marginVertical: 24,
    textAlign: "center",
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: colors.primary5,
  },
});
