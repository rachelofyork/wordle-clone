import React, { useContext } from "react";
import App, { AppContext } from "../App";


export default function Letter({ letterPosition, attemptValue }){
    const {guesses} = useContext(AppContext);
    const letter = guesses[attemptValue][letterPosition];
    return <div className="letter">
    {letter}
    </div>
}