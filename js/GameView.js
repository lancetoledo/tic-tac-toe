export default class GameView {


    constructor() {
        
    }
    // passed in game object form Game.js
    updateBoard(game) {
        // console.log(game)
        this.updateTurn(game)
        const winCombo = game.findWinCombo()

        //loop through game board array to eventually display to front end
        for(let i=0;i<game.board.length;i++) {
            const tile = document.querySelector(`.board-tile[data-index ='${i}']`)

            tile.classList.remove("tile-winner")

            let tileType = game.board[i] == 'X' ? "tile-x" :
            "tile-o";

            tile.innerHTML = `<span class ="${tileType}">${game.board[i] ? game.board[i] :"" }</span>`

            if(winCombo && winCombo.includes(i)) {
                tile.classList.add("tile-winner")
            }
        }

    }

    updateTurn(game) {
        let playerX = document.querySelector(".player-X")
        let playerO = document.querySelector(".player-O")
        playerX.classList.remove("active")
        playerO.classList.remove("active")
    
        if(game.turn == "X") {
            playerX.classList.add('active') 
        }
        else {
            playerO.classList.add('active')
        }
        
    }
}