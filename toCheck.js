// 3x3 Tic-Tac-Toe board initialized with empty strings
let table= [["","",""],["","",""],["","",""]];

// Total number of rows
let rows=3;

// Total number of columns
let cols=3;

// Winning condition (3 matching symbols)
let cond=3;

// Stores game state (used to indicate a winning condition)
let state=0;

// Counter used to determine draw condition (starts with 9 empty cells)
let num3=9;

// Function to place a player's symbol (X or O) on the board
function updateTable(rows,cols,input){

    // Check if the selected cell is empty
    if(table[rows][cols]==="")
        table[rows][cols]=input;   // Place the player's symbol
    else
        console.log("Occupied space!"); // Cell is already occupied

}

// -------------------- WIN CHECKING FUNCTIONS --------------------

// Function to check all rows for a winning condition
function checkWinRows(rows){

    // Loop through every row
    for(let i=0; i<rows; i++)
    {
        // If all three values in a row are equal and not empty
        if(table[i][0]===table[i][1] &&
           table[i][0]===table[i][2] &&
           table[i][0]!=="")
            state++;   // Increase state to indicate a win
    }

    // Return current game state
    return state;
}

// Function to check all columns for a winning condition
function checkWinCols(cols){

    // Loop through every column
    for(let j=0; j<cols; j++)
    {
        // If all three values in a column are equal and not empty
        if(table[0][j]===table[1][j] &&
           table[0][j]===table[2][j] &&
           table[0][j]!=="")
            state++;   // Increase state to indicate a win
    }

    // Return current game state
    return state;
}

// Function to check the primary diagonal (top-left to bottom-right)
function checkWinPDiagonal(){

    // Compare all cells on the primary diagonal
    if(table[0][0]===table[1][1] &&
       table[0][0]===table[2][2] &&
       table[0][0]!=="")
        state++;   // Increase state if a win is found

    return state;
}

// Function to check the secondary diagonal (top-right to bottom-left)
function checkWinSDiagonal(){

    // Compare all cells on the secondary diagonal
    if(table[0][2]===table[1][1] &&
       table[0][0]===table[2][0] &&
       table[0][2]!=="")
        state++;   // Increase state if a win is found

    return state;
}

// -------------------- DRAW CHECK --------------------

// Function to check whether the game has resulted in a draw
function checkDraw(){

    // Traverse every cell of the board
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++)
        {
            // If there is no winner and the cell is occupied,
            // decrease the remaining cell counter
            if(state=0 && table[i][j]!=="")
                num3=num3-1;
        }
    }

    // Return remaining counter
    return num3;
}

// -------------------- RESET BOARD --------------------

// Function to reset the game board
function resetTable() {

    // Replace every row with a new empty row
    for(let i=0;i<3;i++)
    {
        table[i]=["","",""];
    }
}

// Export board and functions so they can be used in other files
module.exports= {
    tictactoe:
    table,
    updateTable,
    resetTable,
    checkDraw
};