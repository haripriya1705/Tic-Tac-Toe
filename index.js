
function startGame() {
    
    const boxes = document.querySelectorAll(".box");
    const playerText = document.getElementById('playerText');
    const restartBtn = document.getElementById('restartBtn'); 

    let currentPlayer = 'X'; 
    let gameBoard = Array(9).fill(null); 


    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return combo; 
            }
        }
        return false; 
    }

    boxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            if (!gameBoard[index] && !checkWinner()) { 
                gameBoard[index] = currentPlayer; 
                box.innerText = currentPlayer; 

                const winner = checkWinner(); 
                if (winner) {
                    playerText.innerText = `${currentPlayer} wins!`; 
                    winner.forEach(winningIndex => boxes[winningIndex].classList.add('winner')); 
                    return; 
                }

                
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });

    
    restartBtn.addEventListener('click', () => {
        gameBoard.fill(null); 
        boxes.forEach(box => {
            box.innerText = ''; 
            box.classList.remove('winner'); 
        });
        playerText.innerText = 'Tic Tac Toe'; 
        currentPlayer = 'X'; 
    });
}


startGame();

