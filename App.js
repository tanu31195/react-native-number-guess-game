import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import GameStartScreen from "./screens/GameStartScreen";

export default function App() {
  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode='cover'
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <GameStartScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25
  }
});
