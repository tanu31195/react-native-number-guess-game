import { StyleSheet, TextInput, View, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import colors from "../constants/colors";

export default function GameStartScreen({onPickedNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Please enter a number between 1 and 99", [
        { text: "Okay", style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }

    console.log('Valid Number')
    onPickedNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType={"number-pad"}
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginTop: 100,
    marginHorizontal: 20,
    backgroundColor: colors.primary8,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  numberInput: {
    height: 50,
    width: 75,
    fontSize: 30,
    fontWeight: "bold",
    borderColor: colors.accent5,
    borderBottomWidth: 5,
    color: colors.accent5,
    marginVertical: 10,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
