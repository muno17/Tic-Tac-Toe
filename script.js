const Gameboard = (() => {
    // create array of tiles
    let board = document.getElementsByClassName('tile');
    console.log(board);

    for (let i = 0; i < 9; i++) {
        board[i].addEventListener('click', () => {
            if (Flow.startGame()) {
                if (board[i].innerHTML != 'X' && board[i].innerHTML != 'O') {
                    if (Flow.playerTurn() == 1){
                        board[i].innerHTML = "X";
                    } else {
                        board[i].innerHTML = "O";
                    }
                    Flow.nextTurn();
                }
            }
        })
    }

    const reset = () => {
        console.log('reseting');
        for (let i = 0; i < 9; i++) {
            board[i].innerHTML = '';
            Flow.endGame();
        }
    };

    return {reset};
    // add logic to prevent adding used spots
})();

const Flow = (() => {
    // display
    let display = document.getElementById("gameDisplay");
    let turn;
    let gameStart = false;

    let start = document.getElementById("start");
    start.addEventListener("click", () => {
        display.innerHTML = "Player 1's Turn";
        this.turn = 1;
        gameStart = true;
    });

    let reset = document.getElementById("reset");
    reset.addEventListener("click", () => {
        console.log("reset clicked");
        Gameboard.reset();
        display.innerHTML = "";
    });

    const nextTurn = () => {
        if (this.turn == 1 ) {
            this.turn = 2; 
        } else {
            this.turn = 1;
        }
        display.innerHTML = `Player ${this.turn}\'s Turn`;
    };

    const startGame = () => {
        return gameStart;
    };

    const endGame = () => {
        gameStart = false;
    }

    const playerTurn = () => {
        return this.turn;
    }

    // check when game is over
    // congratulate winning player
    return {nextTurn, startGame, endGame, playerTurn};
})();


const Player = (mark) => {
    return mark;
};

const player1 = Player('X');
const player2 = Player('O');



// create a computer player?