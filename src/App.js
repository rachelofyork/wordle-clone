import './App.css';
import Guesses from './components/Guesses.js';
import Keyboard from './components/Keyboard.js';
import { guessesDefault } from './Words.js';
import { createContext, useState } from "react"; /*Gets access to AppContext API to help with state management */

export const AppContext = createContext(); /*exporting to have access from other components*/

function App() {
  const [guesses, setGuesses] = useState(guessesDefault) /*pulls in matrix from Words.js and sets it as the default state for Guesses*/
  return (
    <div className="App">
      <nav><h1>Wordle</h1></nav>
      <AppContext.Provider value={{guesses, setGuesses}}> 
      <Guesses />
      <Keyboard />
      </AppContext.Provider>
    </div>

  );
}

export default App;
 /*everything inside the <AppContext.Provider> tags gets access to the states that we passed it through*/