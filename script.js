// let currentPlayer="X";
// let array=Array(9).fill(null);
// console.log(array);

// function checkWinner(){
//     if(
//         (arr[0]!=null && arr[0] == arr[1] && arr[1] == arr[2] )||
//         (arr[3]!=null && arr[3] == arr[4] && arr[4] == arr[5]) || 
//         (arr[6]!=null && arr[6] == arr[7] && arr[7] == arr[8]) || 
//         (arr[0]!=null && arr[0] == arr[3] && arr[3] == arr[6]) || 
//         (arr[1]!=null && arr[1] == arr[4] && arr[4] == arr[7]) ||
//         (arr[2]!=null && arr[2] == arr[5] && arr[5] == arr[8]) || 
//         (arr[0]!=null && arr[0] == arr[4] && arr[4] == arr[8]) ||
//         (arr[2]!=null && arr[2] == arr[4] && arr[4] == arr[6])
//     ){
//         document.write(`Winner is ${currentPlayer}`);
//         return;
//     }
//     if(!array.some((e)=>e===null)){
//         document.write("Game is Draw");
//         return;
//     }
// }

// function handleClick(el){
//     const id=Number(el.id);
//     if(array[id]!==null){
//         return;
//     }
//     array[id]=currentPlayer;
//     el.innerText=currentPlayer;
//     currentPlayer=currentPlayer === "X"?"O":"X";
//     checkWinner();
    
// }
let currentPlayer = "X";
    let array = Array(9).fill(null);

    function checkWinner() {
        if (
            (array[0] != null && array[0] === array[1] && array[1] === array[2]) ||
            (array[3] != null && array[3] === array[4] && array[4] === array[5]) ||
            (array[6] != null && array[6] === array[7] && array[7] === array[8]) ||
            (array[0] != null && array[0] === array[3] && array[3] === array[6]) ||
            (array[1] != null && array[1] === array[4] && array[4] === array[7]) ||
            (array[2] != null && array[2] === array[5] && array[5] === array[8]) ||
            (array[0] != null && array[0] === array[4] && array[4] === array[8]) ||
            (array[2] != null && array[2] === array[4] && array[4] === array[6])
        ) {
            setTimeout(() => alert(`Winner is ${currentPlayer}`), 100);
            return true;
        }
        if (!array.some((e) => e === null)) {
            setTimeout(() => {
                document.getElementById("game-message").innerText = "Game is Draw";
            }, 100);
            return true;
        }
        return false;
    }

    function handleClick(el) {
        const id = Number(el.id);
        if (array[id] !== null) {
            return;
        }
        array[id] = currentPlayer;
        el.innerText = currentPlayer;
        if (!checkWinner()) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
    function restartGame() {
        array = Array(9).fill(null);
        currentPlayer = "X";
        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.innerText = "";
        });
        document.getElementById("game-message").innerText = "";
    }    