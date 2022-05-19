import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";


export default function Letter({ letterPosition, attemptValue }){
    const {guesses, correctWord, currentAttempt, setDisabledLetters} = useContext(AppContext);
    const letter = guesses[attemptValue][letterPosition];
    const correct = correctWord.toUpperCase()[letterPosition] === letter;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
    /*to be almost it can't be correct, can't be empty, the correctWord must include this letter*/

    const letterState = 
    currentAttempt.attempt > attemptValue && 
    (correct ? "correct" : almost ? "almost" : "wrong");
    /*this variable will handle the conditionals for colouring letters*/
    /* if correct variable is true it sets id to "correct", ditto for almost, if neither is true it sets it to "wrong"*/
    /*'currentAttempt.attempt > attemptValue &&' means color conditions only kick in when player has moved onto next line*/

    useEffect(() => {
        if (letter !== "" && !correct && !almost){
            setDisabledLetters((prev) => [...prev, letter]);    /*is setting setDL to be equal to all disabled letters before + current letter*/
        }
    }, [currentAttempt.attempt]);
    /*will run every time we move to a new attempt*/

    return <div className="letter" id={letterState}>
    {letter}
    </div>
}