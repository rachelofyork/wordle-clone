import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Key({keyVal, bigKey}){
     const {guesses, setGuesses, currentAttempt, setCurrentAttempt} = useContext(AppContext); /*need to import the current board state*/

    const selectLetter = () => {
        if (keyVal === "Enter"){
            if (currentAttempt.letterPos !== 5) return; /*if letter attempt is not equal to 5, end function*/
            setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPos: 0});
        } else {
        if (currentAttempt > 4) return; /*stops after 5 letters are typed*/
        const newBoard = [...guesses] 
        newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal /*first[0] is for attempt number, second[0] is for letter number 
        Here changing letter square to be equal to keyVal*/
        setGuesses(newBoard);
        setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1});
        /*above state equal to what it was before, and moves letter position on by one*/
    }
};
    return <div className="key" id={bigKey && "big"} onClick={selectLetter}>{keyVal}</div>
    /*if a key is a bigKey it will be assigned the id of #big, otherwise keys will no no id*/
}