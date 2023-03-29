import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const words = ['apple', 'banana', 'orange', 'pear', 'grape'];

const HangmanGame = () => {
  const [word, setWord] = useState('');
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const handleNewGame = () => {
    const newWord = getRandomWord();
    setWord(newWord);
    setGuess('');
    setGuesses([]);
    setRemainingAttempts(6);
  };

  const handleGuess = () => {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    setGuess('');
    if (!word.includes(guess)) {
      setRemainingAttempts(remainingAttempts - 1);
    }
  };

  const getDisplayWord = () => {
    let displayWord = '';
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (guesses.includes(letter)) {
        displayWord += letter;
      } else {
        displayWord += '_';
      }
    }
    return displayWord;
  };

  const isGameWon = () => {
    return getDisplayWord() === word;
  };

  const isGameLost = () => {
    return remainingAttempts === 0;
  };

  const getGameStatus = () => {
    if (isGameWon()) {
      return 'You win!';
    } else if (isGameLost()) {
      return 'You lose!';
    } else {
      return `Attempts left: ${remainingAttempts}`;
    }
  };

  return (
    <View>
      <Text>Hangman Game</Text>
      <Text>{getDisplayWord()}</Text>
      <Text>{getGameStatus()}</Text>
      <TextInput value={guess} onChangeText={setGuess} maxLength={1} />
      <Button title="Guess" onPress={handleGuess} />
      <Button title="New Game" onPress={handleNewGame} />
    </View>
  );
};

export default HangmanGame;
