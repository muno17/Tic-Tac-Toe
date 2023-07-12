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
                    if (Flow.turnNumber() >= 4) {
                        // check logic for winner
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
        player1.tileClearer();
        player2.tileClearer();
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
    });

    let reset = document.getElementById("reset");
    reset.addEventListener("click", () => {
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
    const winCheck = (arr) => {
        let win = false;

        if (arr.includes(0)) {
            if (arr.includes(1)) {
                if (arr.includes(2)) {
                    win = true;
                    return win;
                }
            } else if (arr.includes(4)) {
                if (arr.includes(8)) {
                    win = true;
                    return win;
                }
            } else if (arr.includes(3)) {
                if (arr.includes(6)) {
                    win = true;
                    return win;
                }
            }
        } else if (arr.includes(1)) {
            if (arr.includes(4)) {
                if (arr.includes(7)) {
                    win = true;
                    return win;
                }
            }
        } else if (arr.includes(2)) {
            if (arr.includes(5)) {
                if (arr.includes(8)) {
                    win = true;
                    return win;
                }
            } else if (arr.includes(4)) {
                if (arr.includes(6)) {
                    win = true;
                    return win;
                }
            }
        } else if (arr.includes(3)) {
            if (arr.includes(4)) {
                if (arr.includes(5)) {
                    win = true;
                    return win;
                }
            }
        } else if (arr.includes(6)) {
            if (arr.includes(7)) {
                if (arr.includes(8)) {
                    win = true;
                    return win;
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