import './App.css';
import Guesses from './components/Guesses.js';
import Keyboard from './components/Keyboard.js';
import { guessesDefault, generateWordSet } from './components/Words.js';
import { createContext, useEffect, useState } from "react"; /*Gets access to AppContext API to help with state management */

export const AppContext = createContext(); /*exporting to have access from other components*/

function App() {
  const [guesses, setGuesses] = useState(guessesDefault); /*pulls in matrix from Words.js and sets it as the default state for Guesses*/
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPos: 0});
  /* above state keeps track of attempt and letter position you're on*/
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  /*to create an array of letters than have already been guessed but aren't in the word*/

  const correctWord = "RIGHT";

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
    });
  }, [/*this is an empty dependancy list to make this only run once*/]);
  
  const onSelectLetter = (keyVal) => {
      if (currentAttempt > 4) return; /*stops after 5 letters are typed*/
        const newBoard = [...guesses] 
        newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal /*first[0] is for attempt number, second[0] is for letter number 
        Here changing letter square to be equal to keyVal*/
        setGuesses(newBoard);
        setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1});
        /*above state equal to what it was before, and moves letter position on by one*/
  }

  const onEnter = () => {
    if (currentAttempt.letterPos !== 5) return; /*if letter attempt is not equal to 5, end function*/

    let currentWord = "";
    for (let i = 0; i < 5; i++){
      currentWord += guesses[currentAttempt.attempt][i];
    }

    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPos: 0}); /*moves to next line, first(0)square*/
    } else {
      alert("Word not found!");
    }
    
    if (currentWord === correctWord) {
      alert("You won!")
    }
  };

  const onDelete = () => {
 if (currentAttempt.letterPos === 0) return; /*can't delete anything if it's on first letter*/
            const newBoard = [...guesses] 
        newBoard[currentAttempt.attempt][currentAttempt.letterPos -1] = ""; /*goes back 1 and sets square to empty string*/
        setGuesses(newBoard)
        setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos - 1});
  };
  

  
  return (
    <div className="App">
      <nav><h1>Wordle</h1></nav>
      <AppContext.Provider 
      value=
      {{guesses, setGuesses, currentAttempt, setCurrentAttempt, onSelectLetter, onEnter, onDelete, correctWord, setDisabledLetters, disabledLetters}}> 
      <div className='wrapper'>
        <Guesses />
      <Keyboard />
      </div>
      </AppContext.Provider>
    </div>

  );
}

export default App;
 /*everything inside the <AppContext.Provider> tags gets access to the states that we passed it through*/