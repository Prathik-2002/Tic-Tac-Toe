let Players = ["Player 1", "Player 2"]
let currentPlayer = 0;
let grid = [[[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0]]];
let notFinish = true
let count = 0;
const handleClick = (element,num) => {
    
    if(element.innerHTML == "" && notFinish && count != 9){
        if (currentPlayer == 0){
            element.innerHTML = "X";
        }
        else{
            element.innerHTML = "O";

        }
        num = num - 1;
        grid[currentPlayer][parseInt(num/3)][num%3] = 1;
        count += 1;
        if(check(grid[currentPlayer])){
            const display = document.getElementById("comment");
            display.innerHTML = Players[currentPlayer]+" Won";
            notFinish = false;
        }
        currentPlayer = 1 - currentPlayer;
    }
    if(count == 9){
        const display = document.getElementById("comment");
        display.innerHTML = "Draw";
    }
}

const playerNameChange = (element,num)=>{
    Players[num] = element.value;
}

const check = (grid) =>{
    for (let i = 0; i < 3; i++){
        if((grid[0][i] & grid[1][i] & grid[2][i]) | (grid[i][0] & grid[i][1] & grid[i][2]) == 1)
            return true;
    }
    if ((grid[0][0] & grid[1][1] & grid[2][2]) | (grid[2][0] & grid[1][1] & grid[0][2]) == 1)
    {
        return true;
    }
    return false;
}
const newGame = () =>{
    grid = [[[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0]]];
    count = 0;
    notFinish = true;
    currentPlayer = 0;
    document.getElementById("comment").innerHTML = '';
    const reset = document.getElementsByClassName("blocks")
    for (let i = 0; i < 9; i++){
        reset[i].innerHTML = "";
    }
}