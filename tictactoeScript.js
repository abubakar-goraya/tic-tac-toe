const readline = require('node:readline/promises');
const { stdin, stdout } = require('node:process');

const tictactoeApi = require('./tictactoeLogic');

async function askQuestion(inputPrompt) {
    const rl = readline.createInterface({ input: stdin, output: stdout });

    const answer = await rl.question(inputPrompt);

    rl.close();

    return answer;
}

async function gameRun() {
    let exit='y';
    while (exit!=='n') {

        // Print the current board
        console.table(tictactoeApi.tictactoeLogic);
        let rows;
        let cols;
        let input;

        while(true){
        rows = await askQuestion("Enter row number: ");
        if(rows<=2&&rows>=0)
        {
            break;
        }
        else{
            console.log("Invalid row number!!");
            continue;
        }
        }
        while(true)
        {  cols = await askQuestion("Enter column number: ");
           if(cols<=2 && cols>=0)
            break;
        else
        {
            console.log("Invalid column number");
            continue;
        }
        }
     
        while(1===1)
        {
         input = await askQuestion("Enter input (X or O): ");
        if (input==="X" || input==="O")
          {
            break;
          }
          else
          {
            console.log("Invalid Input!!");
            continue;
          }
        }
        tictactoeApi.updateTable(rows, cols, input);

        if (
            tictactoeApi.checkWinRows() ||
            tictactoeApi.checkWinCols() ||
            tictactoeApi.checkWinPDiagonal() ||
            tictactoeApi.checkWinSDiagonal() ||
            tictactoeApi.checkDraw()
        ) {
            console.table(tictactoeApi.tictactoeLogic);
            
             exit= await askQuestion("Enter y to play and n to exit: ");
            if (exit==='n')
                {
                 console.log("\n===============Game Over===============");
                 break;
                }
            else
                { 
                 console.log("\n==========New Game==========");
                 tictactoeApi.resetTable();
                }
          }
    }
}

gameRun();