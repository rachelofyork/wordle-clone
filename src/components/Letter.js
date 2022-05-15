import React, { useContext } from "react";
import { AppContext } from "../App";


export default function Letter({ letterPosition, attemptValue }){
    const {guesses, correctWord, currentAttempt} = useContext(AppContext);
    const letter = guesses[attemptValue][letterPosition];

    const correct = correctWord[letterPosition] === letter;
    const almost = !correct && letter !== "" && correctWord.includes(letter);
    /*to be almost it can't be correct, can't be empty, the correctWord must include this letter*/

    const letterState = 
    currentAttempt.attempt > attemptValue && 
    (correct ? "correct" : almost ? "almost" : "wrong");
    /*this variable will handle the conditionals for colouring letters*/
    /* if correct variable is true it sets id to "correct", ditto for almost, if neither is true it sets it to "wrong"*/
    /*'currentAttempt.attempt > attemptValue &&' means color conditions only kick in when player has moved onto next line*/

    return <div className="letter" id={letterState}>
    {letter}
    </div>
}