let table = [["", "", ""], ["", "", ""], ["", "", ""]];

let state = 0;
let num3 = 9;

function updateTable(rows, cols, input) {

    if (table[rows][cols] === "")
        table[rows][cols] = input;
    else
        console.log("Occupied space!");

}

// Rows
function checkWinRows() {

    state = 0;

    for (let i = 0; i < 3; i++) {

        if (
            table[i][0] === table[i][1] &&
            table[i][0] === table[i][2] &&
            table[i][0] !== ""
        )
            state = 1;
    }

    return state;
}

// Columns
function checkWinCols() {

    state = 0;

    for (let j = 0; j < 3; j++) {

        if (
            table[0][j] === table[1][j] &&
            table[0][j] === table[2][j] &&
            table[0][j] !== ""
        )
            state = 1;
    }

    return state;
}

// Primary Diagonal
function checkWinPDiagonal() {

    state = 0;

    if (
        table[0][0] === table[1][1] &&
        table[0][0] === table[2][2] &&
        table[0][0] !== ""
    )
        state = 1;

    return state;
}

// Secondary Diagonal
function checkWinSDiagonal() {

    state = 0;

    if (
        table[0][2] === table[1][1] &&
        table[0][2] === table[2][0] &&
        table[0][2] !== ""
    )
        state = 1;

    return state;
}

// Draw
function checkDraw() {

    num3 = 9;

    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {

            if (table[i][j] !== "")
                num3--;
        }
    }

    if (num3 === 0)
        return true;

    return false;
}

// Reset
function resetTable() {

    for (let i = 0; i < 3; i++) {

        table[i] = ["", "", ""];
    }

    state = 0;
    num3 = 9;
}

module.exports = {

    tictactoeLogic: table,updateTable,resetTable,checkDraw,checkWinCols,checkWinRows,checkWinPDiagonal,checkWinSDiagonal

};