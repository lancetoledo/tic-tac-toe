export default class Game {

    constructor() {
        this.turn ="X"
        this.board = new Array(9).fill(null)

    }

    nextTurn() {
        if(this.turn == "X") {
            this.turn = "O"
        }
        else {
            this.turn = "X"
        }
    }

    makeMove(i) {

        //If endOfGame() is true then game will stop
        if(this.endOfGame()) {
            return
        }

        if(this.board[i]) {
            return;
        }
        this.board[i] = this.turn; //which can be "X" or "O"

        //calls method to check for winCombo
        let winCombo = this.findWinCombo();
        if(!winCombo) {
            this.nextTurn()
        }
    }

    findWinCombo() {
        const winCombo = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2],
        ]
        // loop through winCombo
        for(const combo of winCombo) {
            // destructure combo
            const [a,b,c] = combo
            //check if board has the winCombo
            if(
                this.board[a] &&
                this.board[a] === this.board[b] && 
                this.board[a] === this.board[c]) {
                    return combo
            }
            
        }
        return null
    }

    endOfGame() {
        let winCombo = this.findWinCombo()
        if(winCombo){
            return true;
        } else {
            return false;
        }
    }
}


