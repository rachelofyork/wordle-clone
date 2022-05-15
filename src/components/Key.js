import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Key({keyVal, bigKey}){
     const { onSelectLetter, onEnter, onDelete } = useContext(AppContext); /*need to import the current board state*/

    const selectLetter = () => {
        if (keyVal === "Enter"){
           onEnter()
        } else if (keyVal === "Delete"){
           onDelete()
        }
         else {
        onSelectLetter(keyVal)
    }
};
    return <div className="key" id={bigKey && "big"} onClick={selectLetter}>{keyVal}</div>
    /*if a key is a bigKey it will be assigned the id of #big, otherwise keys will no no id*/
}