import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView()

document.querySelector(".restart").addEventListener("click", () =>{
    onRestartClick()
})

// use querySelector for all the classes and get an array returned
let tiles = document.querySelectorAll(".board-tile")

// loop for each tile with an ES6 arrow funciton
tiles.forEach((tile) => {
    // add a click event to each tile
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index)
    })
})

// handles the tile click based on position
function onTileClick(i) {
    game.makeMove(i)
    gameView.updateBoard(game)
}
  
function onRestartClick() {
    game = new Game()
    gameView.updateBoard(game)
}

gameView.updateTurn(game)
