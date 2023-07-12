const Gameboard = (() => {
    // create array of tiles
    let board = document.getElementsByClassName('tile');
    console.log(board);

    for (let i = 0; i < 9; i++) {
        board[i].addEventListener('click', () => {
            if (Flow.startGame()) {
                if (board[i].innerHTML != 'X' && board[i].innerHTML != 'O') {
                    if (Flow.playerTurn() == 1){
                        board[i].innerHTML = player1.playerMark();
                    } else {
                        board[i].innerHTML = player2.playerMark();
                    }
                    if (Flow.turnNumber() >= 4) {
                        // check logic for winner
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
    let turnCount = 1;

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
        turnCount++;
    };

    const startGame = () => {
        return gameStart;
    };

    const endGame = () => {
        gameStart = false;
    };

    const playerTurn = () => {
        return this.turn;
    };

    const turnNumber = () => {
        return this.turnCount;
    }

    // check when game is over
    const win = (arr) => {
        let length = arr.length;
        for (let i = 0; i < length; i++) {

        }
    };
    // congratulate winning player



    return {nextTurn, startGame, endGame, playerTurn, turnNumber};
})();


const Player = (mark) => {
    let pMark = mark;
    let playerArr = [];

    const playerMark = () => {
        return pMark;
    };



    return {playerMark, playerArr};
};

const player1 = Player('X');
const player2 = Player('O');



// create a computer player?