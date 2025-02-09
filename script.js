document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    let currentPlayer = "X";
    let cells = [];
    let boardState = Array(9).fill(null);
    
    function createBoard() {
        player.textContent = "Turno del Jugador 1 - X";
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
        if (!cell.textContent && !checkWinner()) {
            cell.textContent = currentPlayer;
            boardState[index] = currentPlayer;
            if (checkWinner()) {
                setTimeout(() => alert(`${currentPlayer === "X" ? "Jugador 1" : "Jugador 2"} gana!`), 10);
                location.reload();
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
        let player = document.getElementById("player");
        player.textContent = "Turno del "
        player.textContent +=  currentPlayer === "X" ? "Jugador 1 - X" : "Jugador 2 - O";
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