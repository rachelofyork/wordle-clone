import './App.css';
import Guesses from './components/Guesses.js';
import Keyboard from './components/Keyboard.js';
import { guessesDefault } from './Words.js';
import { createContext, useState } from "react"; /*Gets access to AppContext API to help with state management */

export const AppContext = createContext(); /*exporting to have access from other components*/

function App() {
  const [guesses, setGuesses] = useState(guessesDefault) /*pulls in matrix from Words.js and sets it as the default state for Guesses*/
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPos: 0}) 
  /* above state keeps track of attempt and letter position you're on*/
  return (
    <div className="App">
      <nav><h1>Wordle</h1></nav>
      <AppContext.Provider value={{guesses, setGuesses, currentAttempt, setCurrentAttempt}}> 
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