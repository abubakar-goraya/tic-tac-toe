let table = [["", "", ""], ["", "", ""], ["", "", ""]];
let num3 = 9;
let playerX="XXX";
let playerO="OOO";

function updateTable(rows, cols, input) {

    if (table[rows][cols] === "")
    {    table[rows][cols] = input;
        return true;
    }
    else
     {
           console.log("Occupied space!");
           return false;
           
     }
}

// Rows
function checkWinRows() {

    

    for (let i = 0; i < 3; i++) 
    {

        if (
            table[i][0] === table[i][1] &&
            table[i][0] === table[i][2] &&
            table[i][0] !== ""
        )
        {if(table[i][0]+table[i][1]+table[i][2]==playerX)
        { console.log("\n----------Player X Wins!!----------");}
        else if(table[i][0]+table[i][1]+table[i][2]==playerO)
        { console.log("\n----------Player O Wins!!----------");}
            return true;
        }   
    }

    
}

// Columns
function checkWinCols() {

   

    for (let j = 0; j < 3; j++) {

        if (
            table[0][j] === table[1][j] &&
            table[0][j] === table[2][j] &&
            table[0][j] !== ""
        )
        {
            if(table[0][j]+table[1][j]+table[2][j]==playerX)
               { console.log("\n----------Player X Wins!!----------");}
            else if(table[0][j]+table[1][j]+table[2][j]==playerO)
               { console.log("\n----------Player O Wins!!----------");}
            
               return true;
        }
    }
    
}

// Primary Diagonal
function checkWinPDiagonal() {

  

    if (
        table[0][0] === table[1][1] &&
        table[0][0] === table[2][2] &&
        table[0][0] !== ""
    )
    {
        if(table[0][0]+table[1][1]+table[2][2]==playerX)
               { console.log("\n----------Player X Wins!!----------");}
        else if(table[0][0]+table[1][1]+table[2][2]==playerO)
               { console.log("\n----------Player O Wins!!----------");}
        
               return true;
    }
  
}

// Secondary Diagonal
function checkWinSDiagonal() {

    

    if (
        table[0][2] === table[1][1] &&
        table[0][2] === table[2][0] &&
        table[0][2] !== ""
    )
    {
         if(table[0][2]+table[1][1]+table[2][0]==playerX)
               { console.log("\n----------Player X Wins!!----------");}
        else if(table[0][2]+table[1][1]+table[2][0]==playerO)
               { console.log("\n----------Player O Wins!!----------");}
        
        return true;
    }
    
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
    { if(!checkWinCols() && !checkWinRows() && !checkWinPDiagonal() && !checkWinSDiagonal())
        { console.log("\n----------Game Draw!!----------");}
        return true;
    }
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

    TerminalLogic: table,updateTable,resetTable,checkDraw,checkWinCols,checkWinRows,checkWinPDiagonal,checkWinSDiagonal

};