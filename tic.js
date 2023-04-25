
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;



// Add event listeners to all cells
cells.forEach(cell => {
cell.addEventListener('click', () => {
// If cell is over, d not empty or game iso nothing
if (cell.value !== '' || gameOver) {
  return;
}

// Add current player's symbol to the cell and update gameBoard array
cell.value = currentPlayer;
gameBoard[cell.id] = currentPlayer;

// Check for a win or tie
if (checkWin() || checkTie()) {
  gameOver = true;
  return;
}

// Switch to the other player
if (currentPlayer==='X') {
    currentPlayer='O'; 
} else {
    currentPlayer='X';
}
});
});

// Check if current player has won
function checkWin() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
    
      for (let i = 0; i < winningCombos.length; i++) {
        const combo = winningCombos[i];
        const cell1 = cells[combo[0]];
        const cell2 = cells[combo[1]];
        const cell3 = cells[combo[2]];
        if (cell1.value !== '' &&
            cell1.value === cell2.value &&
            cell2.value === cell3.value) {
                document.querySelector(`form :nth-child(${combo[0]+1})`).style.backgroundColor = 'green';
                document.querySelector(`form :nth-child(${combo[1]+1})`).style.backgroundColor = 'green';
                document.querySelector(`form :nth-child(${combo[2]+1})`).style.backgroundColor = 'green';
                let win = `Player ${currentPlayer} wins!!`;
                popup_message(win);
          return true;
        }
      }
    return false;
  }

// Check if there is a tie
function checkTie() {
if (!gameBoard.includes('')) {
// // Display a message indicating a tie
    let tie = "Game Tied!!";
    popup_message(tie);
// document.getElementById('winlose').innerHTML = "Game Tied!!";
return true;
}
return false;
}

function popup_message(_msg) {
    document.getElementById('winlose').innerHTML= _msg;
    console.log(_msg);
    document.getElementById('popup').style.display="flex";
    if (document.getElementById('popup').style.display="flex") {
      document.getElementById('reset-outside').style.display="none";
    }
}