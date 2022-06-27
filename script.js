const DEFAULT_SIZE  =16;
let slider = document.getElementById("myRange");
let output = document.getElementById("gridValue");
let mode = "black";

slider.oninput = function () {
    output.innerHTML = this.value + " X "+ this.value;
    updateGridSize(this.value)
}

function updateGridSize(size){
    destroyBoard();
    generateSquares(size);
}

function destroyBoard(){
   let board = document.getElementById("gameGrid");
    board.innerHTML= '';
}

function colorSquare(e) {

    console.log(mode);


    let square = document.getElementById(e.target.id);
    if (mode == "black");
    square.style.background = "black";
    if (mode == "erase")
        square.style.background = "white";
    if(mode == "rainbow"){
        let R= Math.floor(Math.random()* 256);
        let G= Math.floor(Math.random()* 256);
        let B= Math.floor(Math.random()* 256);
        square.style.background = `rgb(${R}, ${G}, ${B})`;
    }


}

function setModeBlack() {
    mode = "black";


}
function setModeErase() {
    mode = "erase";

}
function setModeRainbow() {
    mode = "rainbow";

}

function clearBoard() {
    document.querySelectorAll('.gridElement').forEach((item) => {
        item.style.background = "white";
    })

}


//generates a single square and returns it to the main square generating function.
//styles can be altered here. 
function generateSquare(size, id) {

    let divCol = document.createElement("div");
    divCol.style.width = size + "px";
    divCol.style.height = size + "px";
    divCol.style.background = "white";
    divCol.className = "gridElement";
    divCol.id = id;
    divCol.addEventListener("mouseover", colorSquare);
    divCol.addEventListener('mousedown', colorSquare)
    return divCol;

}

//generates all the squares for the board
function generateSquares(size) {
    let board = document.getElementById("gameGrid");
    let id = 0;

    //generates the rows to be inserted into the board
    for (let i = 0; i < size; i++) {
        let divRow = document.createElement("div");
        let squareSize = 400 / size;

        //generates the single cell squares to be inserted into each row of the board. 
        for (let y = 0; y < size; y++) {
            let divCol = generateSquare(squareSize, id);
            divRow.appendChild(divCol);

            id++;

        }
        board.appendChild(divRow);

    }
}

generateSquares(DEFAULT_SIZE);