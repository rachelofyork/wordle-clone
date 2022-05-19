import React, { useContext } from "react";  
import { AppContext } from "../App";

export default function GameOver() {

    const {gameOver, correctWord, currentAttempt} = useContext(AppContext);

    return <div className="gameOver">
        <h3>{gameOver.guessedWord ? "You guessed correctly!" : "You Lost!"}</h3>
        <h1>The word was: {correctWord}</h1>
        {gameOver.guessedWord && (<h3>You guessed in {currentAttempt.attempt} attempts</h3>)}
    </div>
}