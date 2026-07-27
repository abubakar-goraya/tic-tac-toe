let player = "X";
let moves = 9;

let boxes = document.querySelectorAll(".box");
let turn = document.getElementById("turn");

updateStatus(`Player Turn = ${player}`);

// Add click event to every box
for (let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function () {

        boxClicked(boxes[i]);

    });

}

// Updates the status paragraph
function updateStatus(message) {

    turn.innerText = message;

}

// Changes player turn
function changeTurn() {

    if (player === "X") {
        player = "O";
    }
    else {
        player = "X";
    }

}

// Runs whenever a box is clicked
function boxClicked(box) {

    // Get row and column from HTML
    let rows = Number(box.dataset.rows);
    let cols = Number(box.dataset.cols);

    // Stop if game ended or box already contains X/O
    if (
        checkDraw() ||
        checkWinRows() ||
        checkWinCols() ||
        checkWinPDiagonal() ||
        checkWinSDiagonal() ||
        box.innerText != ""
    ) {
        return;
    }

    // Update logical board
    if (!updateTable(rows, cols, player)) {
        return;
    }

    // Update HTML
    box.innerText = player;

    moves--;

    // Check draw
    if (checkDraw()) {
        updateStatus("Draw");
        return;
    }

    // Check winner
    if (
        checkWinRows() ||
        checkWinCols() ||
        checkWinPDiagonal() ||
        checkWinSDiagonal()
    ) {

        updateStatus(`Player ${player} Won!!`);
        return;

    }

    // Change player
    changeTurn();

    updateStatus(`Player Turn = ${player}`);

}

// Restart game
function restartGame() {

    for (let i = 0; i < boxes.length; i++) {

        boxes[i].innerText = "";

    }
    if (player === "X") {
        player = "O";
} else {
    player = "X";
}


    moves = 9;

    resetTable();

    updateStatus(`Player Turn = ${player}`);

}