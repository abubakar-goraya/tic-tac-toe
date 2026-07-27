// =========================
// Game Variables
// =========================

// Stores whose turn it is.
let currentPlayer = "X";

// Becomes true when the game ends.
let gameOver = false;

// Counts the total number of moves played.
let moves = 0;

// Size of the board (3 × 3).
let boardSize = 3;


// =========================
// HTML Elements
// =========================

// Select all HTML elements having class="cell".
const cells = document.querySelectorAll(".cell");

// Select the HTML element having id="status".
const status = document.getElementById("status");


// =========================
// Initial Status
// =========================

// Show the starting player when the page loads.
updateStatus(`Current Player = ${currentPlayer}`);


// =========================
// Add Click Event to Every Cell
// =========================

// Loop through every cell on the board.
for (const cell of cells) {

    // When this particular cell is clicked,
    // call the cellClicked() function.
    cell.addEventListener("click", function () {
        cellClicked(cell);
    });

}


// =========================
// Update Status Message
// =========================

// Changes the text inside the status element.
function updateStatus(message) {
    status.innerText = message;
}


// =========================
// Switch Player
// =========================

// Changes turn from X to O or O to X.
function switchPlayer() {

    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }

}


// =========================
// Check Draw
// =========================

// Checks if all cells have been filled.
function draw() {

    if (moves === boardSize * boardSize) {

        gameOver = true;

        updateStatus("It's a Draw");

        return true;
    }

    return false;
}


// =========================
// Cell Click Logic
// =========================

// Runs whenever a player clicks a cell.
function cellClicked(cell) {

    // Get row number from HTML.
    const row = Number(cell.dataset.row);

    // Get column number from HTML.
    const col = Number(cell.dataset.col);

    // Stop if game has ended
    // OR if the clicked cell already contains X or O.
    if (gameOver || cell.innerText !== "") {
        return;
    }

    // Update the logical board.
    // Stop if updateTable() says the move is invalid.
    if (!updateTable(row, col, currentPlayer)) {
        return;
    }

    // Show X or O on the webpage.
    cell.innerText = currentPlayer;

    // Increase move count.
    moves++;

    // Check if current player won.
    if (gameEnd()) {

        gameOver = true;

        updateStatus(`${currentPlayer} Wins`);

        return;
    }

    // Check for draw.
    if (draw()) {
        return;
    }

    // Change turn.
    switchPlayer();

    // Display whose turn is next.
    updateStatus(`Current Player = ${currentPlayer}`);

}


// =========================
// Clear Visible Board
// =========================

// Removes X and O from every HTML cell.
function resetBoard() {

    for (let i = 0; i < cells.length; i++) {

        cells[i].innerText = "";

    }

}


// =========================
// Restart Game
// =========================

// Restarts the entire game.
function restartGame() {

    // Player X starts first.
    currentPlayer = "X";

    // Reset move counter.
    moves = 0;

    // Allow the game to be played again.
    gameOver = false;

    // Clear the HTML board.
    resetBoard();

    // Clear the logical board.
    resetTable();

    // Show starting player.
    updateStatus(`Current Player = ${currentPlayer}`);

}