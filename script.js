const Gameboard = (() => {
    // create array of tiles
    let board = document.getElementsByClassName('tile');
    console.log(board);
    for (let i = 0; i < 9; i++) {
        board[i].addEventListener('click', () => {
            if (board[i] != 'X' || board[i] != 'O') {
                board[i].innerHTML = "X";
            }
            
        })
    }

    const reset = () => {
        console.log("reset");
        for (let i = 0; i < 9; i++) {
            board[i].innerHTML = "";
        }
    };

    return {reset};
    // add logic to prevent adding used spots
})();

const Flow = (() => {

    // check when game is over
    // congratulate winning player

})();


const Player = () => {
    //add marks to spots on the board
};


// button to start/restart
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    console.log('reset clicked');
    Gameboard.reset;
})

// create a computer player