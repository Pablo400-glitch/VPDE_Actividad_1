document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    let currentPlayer = "X";
    let cells = [];
    let boardState = Array(9).fill(null);
    
    function createBoard() {
        player.textContent = "Turno del Jugador 1 - X";
        player.style.color = "blue";
        for (let i = 0; i < 9; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;
            cell.addEventListener("click", handleCellClick);
            cells.push(cell);
            board.appendChild(cell);
        }
    }
    
    function handleCellClick(event) {
        let cell = event.target;
        let index = cell.dataset.index;
        let player = document.getElementById("player");
    
        if (!cell.textContent && !checkWinner()) {
            cell.textContent = currentPlayer;
            boardState[index] = currentPlayer;
            if (checkWinner()) {
                player.textContent = `${currentPlayer === "X" ? "Jugador 1" : "Jugador 2"} gana!`;
                player.style.display = "block";
                player.style.color = "green";
                setTimeout(() => {location.reload();}, 3000);
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                player.textContent = "Turno del ";
                player.textContent += currentPlayer === "X" ? "Jugador 1 - X" : "Jugador 2 - O";
                player.style.color = currentPlayer === "X" ? "blue" : "red";
            }
        }
    }

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        
        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key.toLowerCase() === "q") {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }
    });
    
    createBoard();
});