const readline = require('node:readline/promises');
const { stdin, stdout } = require('node:process');

const tictactoeApi = require('./tictactoeLogic');

async function askQuestion(inputPrompt) {
    const rl = readline.createInterface({ input: stdin, output: stdout });

    const answer = await rl.question(inputPrompt);

    rl.close();

    return answer;
}
console.log("\n==================== TIC-TAC-TOE ====================")
console.log("\n===Player X starts first===\n")
async function gameRun() {
    let exit='y';
    let count=1;
    while (exit!=='n') {

        // Print the current board
        console.table(tictactoeApi.tictactoeLogic);
        let rows;
        let cols;
        let input;
        
        

        while(true){
        rows =Number( await askQuestion("Enter row number: "));
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
        {  cols = Number(await askQuestion("Enter column number: "));
           if(cols<=2 && cols>=0)
           { 
            
            break;
           }
        else
        {
            console.log("Invalid column number");
            continue;
        }
        
        }
           if (count%2!=0)
           {
            input ="X";
            
           }
           else
           {
            input ="O"
            
           }
        
       
        let done=tictactoeApi.updateTable(rows, cols, input);
            if(done)
                count++;
        
        if (
            tictactoeApi.checkWinRows() ||
            tictactoeApi.checkWinCols() ||
            tictactoeApi.checkWinPDiagonal() ||
            tictactoeApi.checkWinSDiagonal() ||
            tictactoeApi.checkDraw()
        ) {
            console.table(tictactoeApi.tictactoeLogic);
            
            
             exit= await askQuestion("Enter n to exit or any other key to continue: ");
            if (exit==='n')
                {
                 console.log("\n===============Game Over===============");
                 break;
                }
            else
                { 
                 console.log("\n==========New Game==========");
                 if(count%2!=0)
                 {
                    console.log("\n===Player X starts first===")
                 }
                 else
                 {
                    console.log("\n===Player O starts first===")
                 }
                 tictactoeApi.resetTable();

                }
          }
    }
}

gameRun();