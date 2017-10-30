

//#region - selectors
const input = document.getElementById("inputSticker");
const table = document.getElementById("table");
const calcButton = document.getElementById("calc");
const printButton = document.getElementById("print");
const displayResult = document.getElementById("result");
//#endregion

const album = Number(prompt("Koliko album ima sličica?"));
let stickers = 0;

//#region - Format table based on number of stickers in album
let table = (album) => {
    for (let i = 1; i <= album; i++) {
        let sticker = document.createElement("td");
        sticker.textContent = i;
        row.appendChild(sticker);
    }
}
//#endregion

table(album);
