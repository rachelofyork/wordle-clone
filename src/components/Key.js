import React from "react";

export default function({keyVal, bigKey}){
    return <div className="key" id={bigKey && "big"}>{keyVal}</div>
    /*if a key is a bigKey it will be assigned the id of #big, otherwise keys will no no id*/
}