import wordBank from "./wordle-bank.txt";

export const guessesDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
]
/*the default state of the board/guesses component - an array of arrays, which is a matrix*/

export const generateWordSet = async () => {
    let wordSet;
    let newWord;
    await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
        const wordArray = result.split("\r\n") /*need to create an array to create a set*/
        newWord = wordArray[Math.floor(Math.random() * wordArray.length)] /*grabs a random word from the array*/
        wordSet = new Set(wordArray) /*this creates a set from the array we created above*/
    });
    return { wordSet, newWord };
}
/*reads wordle-bank.txt and transforms it into a set*/
/*async function because we need to use fetch api from JS*/
/*result.split("\n") is telling it to split the words into separate elements by where there is a new line which
is what we want because each word is on its own line \n means new line*/