var turn = 0;
var topRow = Array.from(document.getElementById('top').cells);
var middleRow = Array.from(document.getElementById('middle').cells);
var bottomRow = Array.from(document.getElementById('bottom').cells);
var leftCol = [topRow[0], middleRow[0], bottomRow[0]];
var middleCol = [topRow[1], middleRow[1], bottomRow[1]];
var rightCol = [topRow[2], middleRow[2], bottomRow[2]]; 
var diag = [topRow[0], middleRow[1], bottomRow[2]];
var diag2 = [topRow[2], middleRow[1], bottomRow[0]];
var winCon = [topRow, middleRow, bottomRow, leftCol, middleCol, rightCol, diag, diag2];
var numTurn = 0



function clickCell(td) {
    if (td.innerHTML == '') {
        if (turn == 0) {
            td.innerHTML = 'X';
            td.classList.add('p1');
        } else {
            td.innerHTML = 'O';
            td.classList.add('p2');
        }
        checkWin();
        turn = turn ^ 1;
        setPlayer(turn);
        numTurn += 1;
    }
}

function reset() {
    numTurn = 1;
    turn = 0
    setPlayer(turn)
    board = document.getElementById('gameBoard');
    for (let i = 0; i < board.rows.length; i++) {
        row = board.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            cell = row.cells[j];
            cell.innerHTML = '';
            cell.classList.remove('p1', 'p2');
        }
    }
}

function checkWin() {
    for (let i = 0; i < winCon.length; i++) {
        if (winCon[i].every(x => x.innerHTML == 'X')) {
            alert('Player 1 Wins!!');
            return;
        } else if (winCon[i].every(x => x.innerHTML == 'O')) {
            alert('Player 2 Wins!');
            return;
        }
    }
    if (numTurn > 8) {
        alert('Draw!')
    }
}

function setPlayer(player) {
   p1 = document.getElementById('p1'); 
   p2 = document.getElementById('p2');
   p1.classList.remove('highlight');
   p2.classList.remove('highlight');

   if (player == 0) {
    p1.classList.add('highlight');
   } else {
    p2.classList.add('highlight')
   }
}

setPlayer(turn)