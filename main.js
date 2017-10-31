

//#region - selectors
const input = document.getElementById("inputSticker");
const table = document.getElementById("table");
const calcButton = document.getElementById("calc");
const printButton = document.getElementById("print");
const newAlbumButton = document.getElementById("newAlbum");
const displayResult = document.getElementById("result");
//#endregion

let album = Number(prompt("Koliko album ima sličica?"));

inputCheck();

//#region - input check
function inputCheck() {
    if (isNaN(album) || album === 0) {
        while (isNaN(album) || album === 0) {
            album = Number(prompt("Neispravan unos.Koliko album ima sličica?"));
        }
    }
}
//#endregion

let stickers = 0;

//#region - Format table based on number of stickers in album
const createTable = (album) => {
    for (let i = 1; i <= album; i++) {
        let sticker = document.createElement("td");
        sticker.textContent = i;
        table.appendChild(sticker);
    }
}
//#endregion

createTable(album);

//#region - Event listeners
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let tds = table.children;
        for (let i = 0; i < tds.length; i++) {
            if (input.value === tds[i].textContent) {
                tds[i].classList.add("success");
                input.value = "";
            }
        }
    }
});

table.addEventListener("click", (event) => {
    if (event.target.tagName === "TD") {
        event.target.classList.toggle("success");
    }
});

calcButton.addEventListener("click", (event) => {

    //get selected stickers
    let selectedTds = document.querySelectorAll(".success");

    //count and removes selected stickers
    for (let i = 0; i < selectedTds.length; i++) {
        stickers++;
        let parent = selectedTds[i].parentNode;
        parent.removeChild(selectedTds[i]);
    }
    result();
})

printButton.addEventListener("click", () => { window.print() });

newAlbumButton.addEventListener("click", () => window.location.reload(true));
//#endregion

//#region - calculate and display result
const result = () => {
    let percentage = Math.round((stickers * 100) / album);
    displayResult.innerHTML = "Album: " + album + " sličica."
        + " Ukupno sakupljenih sličica: " + stickers +
        ". Preostalo sličica: " + (album - stickers) + ".Trenutno je popunjeno " + percentage + "% albuma.";
};
//#endregion
