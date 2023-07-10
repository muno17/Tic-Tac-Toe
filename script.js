const Gameboard = (() => {
    // create array of tiles
    let board = document.getElementsByClassName('tile');
    console.log(board);
    for (let i = 0; i < 9; i++) {
        board[i].addEventListener('click', () => {
            if (board[i] != 'X' || board[i] != 'O') {
                board[i].innerHTML = 'X';
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

    let start = document.getElementById("start");
    start.addEventListener("click", () => {
        display.innerHTML = "Player 1's Turn";
    });

    let reset = document.getElementById("reset");
    reset.addEventListener("click", () => {
        console.log("reset clicked");
        Gameboard.reset();
        display.innerHTML = "";
    });

    // check when game is over
    // congratulate winning player
})();


const Player = () => {
    //add marks to spots on the board
};

const player1 = Player();
const player2 = Player();



// create a computer player?