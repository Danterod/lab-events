let currentPlayer = 'X';

function makeBoard() {
    const board = document.querySelector('.tic-tac-toe');
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.onclick = function() {
            if (square.innerHTML === '') {
                square.innerHTML = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        };
        board.appendChild(square);
    }
}

document.addEventListener('DOMContentLoaded', makeBoard);

document.querySelector('button').onclick = function() {
    makeBoard();
    currentPlayer = 'X';
};
