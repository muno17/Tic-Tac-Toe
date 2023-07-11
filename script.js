const Gameboard = (() => {
    // create array of tiles
    let board = document.getElementsByClassName('tile');
    console.log(board);

    for (let i = 0; i < 9; i++) {
        board[i].addEventListener('click', () => {
            if (Flow.startGame()) {
                if (board[i].innerHTML != 'X' && board[i].innerHTML != 'O') {
                    board[i].innerHTML = 'X';
                    Flow.nextTurn();
                }
            }
            
        })
    }

    const reset = () => {
        console.log('reseting');
        for (let i = 0; i < 9; i++) {
            board[i].innerHTML = '';
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

    // check when game is over
    // congratulate winning player
    return {nextTurn, startGame};
})();


const Player = (mark) => {
    let playerMark = mark;

    const addMark = (playerMark) => {
        
    }

    
    //add marks to spots on the board
};

const player1 = Player('X');
const player2 = Player('O');



// create a computer player?