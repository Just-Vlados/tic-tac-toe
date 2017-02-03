class TicTacToe {
    constructor() {
        this.field = [[null, null, null], 
                      [null, null, null], 
                      [null, null, null]];
        this.currentSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this.currentSymbol;
            if(this.currentSymbol == 'x') {
                this.currentSymbol = 'o';
            } else {
                this.currentSymbol = 'x';
            }
        } else {
            this.currentSymbol = this.currentSymbol;
        }
    }

    isFinished() {
        if(this.getWinner() || this.isDraw()) {
            return true;
        }
        return false;
    }

    getWinner() {
        if(this.field[0][0] == this.field[0][1] && this.field[0][0] == this.field[0][2] && this.field[0][0] != null){
            return this.field[0][0];
        }
        if(this.field[1][0] == this.field[1][1] && this.field[1][0] == this.field[1][2] && this.field[1][0] != null){
            return this.field[1][0];
        }
        if(this.field[2][0] == this.field[2][1] && this.field[2][0] == this.field[2][2] && this.field[2][0] != null){
            return this.field[2][0];
        }
        if(this.field[0][0] == this.field[1][0] && this.field[0][0] == this.field[2][0] && this.field[0][0] != null){
            return this.field[0][0];
        }
        if(this.field[0][1] == this.field[1][1] && this.field[0][1] == this.field[2][1] && this.field[0][1] != null){
            return this.field[0][1];
        }
        if(this.field[0][2] == this.field[1][2] && this.field[0][2] == this.field[2][2] && this.field[0][2] != null){
            return this.field[0][2];
        }
        if(this.field[0][0] == this.field[1][1] && this.field[0][0] == this.field[2][2] && this.field[0][0] != null){
            return this.field[0][0];
        }
        if(this.field[0][2] == this.field[1][1] && this.field[0][2] == this.field[2][0] && this.field[0][2] != null){
            return this.field[0][2];
        }

        return null;
    }

    noMoreTurns() {
        for(var i = 0; i < 3; i++) {
            for(var j = 0; j < 3; j++) {
                if(this.field[i][j] == null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner()){
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.field[rowIndex][colIndex] != null) {
            return this.field[rowIndex][colIndex];
        } 
        return null;
    }
}

module.exports = TicTacToe;
