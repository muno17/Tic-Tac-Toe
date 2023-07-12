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
                        player1.addTile(i);
                    } else {
                        board[i].innerHTML = player2.playerMark();
                        player2.addTile(i);
                    }
                    Flow.nextTurn();
                }
            }
        })
    }

    const reset = () => {
        for (let i = 0; i < 9; i++) {
            board[i].innerHTML = '';
        }
        Flow.endGame();
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
        start.disabled = true;
    });

    let reset = document.getElementById("reset");
    reset.addEventListener("click", () => {
        Gameboard.reset();
        display.innerHTML = "";
        start.disabled = false;
    });

    const nextTurn = () => {
        if (this.turn == 1 ) {
            this.turn = 2; 
        } else {
            this.turn = 1;
        }
        display.innerHTML = `Player ${this.turn}\'s Turn`;
        if (turnCount >= 4) {
            // check logic for winner
            if (winCheck(player1.tileProvider())) {
                display.innerHTML = "Player 1 Wins!!!";
                endGame();
            } else if (winCheck(player2.tileProvider())) {
                display.innerHTML = "Player 2 Wins!!!";
                endGame();
            }
        }

        turnCount++;
        if (turnCount == 10) {
            display.innerHTML = "Tie Game!!!"
            endGame();
        } 
        
    };

    const startGame = () => {
        return gameStart;
    };

    const endGame = () => {
        gameStart = false;
        player1.tileClearer();
        player2.tileClearer();
    };

    const playerTurn = () => {
        return this.turn;
    };

    const turnNumber = () => {
        return this.turnCount;
    }

    // check when game is over
    const winCheck = (arr) => {

        if (arr.includes(0)) {
            if (arr.includes(1)) {
                if (arr.includes(2)) {
                    return true;
                }
            }
            if (arr.includes(4)) {
                if (arr.includes(8)) {
                    return true;
                }
            } 
            if (arr.includes(3)) {
                if (arr.includes(6)) {
                    return true;
                }
            }
        }
        if (arr.includes(1)) {
            if (arr.includes(4)) {
                if (arr.includes(7)) {
                    return true;
                }
            }
        } 
        if (arr.includes(2)) {
            if (arr.includes(5)) {
                if (arr.includes(8)) {
                    return true;
                }
            } 
            if (arr.includes(4)) {
                if (arr.includes(6)) {
                    return true;
                }
            }
        }
        if (arr.includes(3)) {
            if (arr.includes(4)) {
                if (arr.includes(5)) {
                    return true;
                }
            }
        }
        if (arr.includes(6)) {
            if (arr.includes(7)) {
                if (arr.includes(8)) {
                    return true;
                }
            }
        }

    };
    // congratulate winning player



    return {nextTurn, startGame, endGame, playerTurn, turnNumber, winCheck};
})();


const Player = (mark) => {
    let pMark = mark;
    let playerArr = [];

    const playerMark = () => {
        return pMark;
    };

    const addTile = (x) => {
        playerArr.push(x);
    }

    const tileProvider = () => {
        return playerArr;
    }

    const tileClearer = () => {
        playerArr = [];
    }


    return {playerMark, addTile, tileProvider, tileClearer};
};

const player1 = Player('X');
const player2 = Player('O');



// create a computer player?