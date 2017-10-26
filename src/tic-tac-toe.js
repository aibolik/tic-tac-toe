class TicTacToe {
    constructor() {
        this.matrix = [[null, null, null], [null, null, null], [null, null, null]];
        this.currentPlayer = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] !== null) return
        this.matrix[rowIndex][columnIndex] = this.currentPlayer
        if (this.currentPlayer === 'x') {
            this.currentPlayer = 'o';
        } else {
            this.currentPlayer = 'x';
        }
    }

    isFinished() {
        return this.isDraw() || this.getWinner() !== null;
    }

    getWinner() {
        for(let i = 0; i < 3; i++) {
            if (this.matrix[i][0] !== null &&
                this.matrix[i][0] === this.matrix[i][1] &&
                this.matrix[i][0] === this.matrix[i][2]) {
                return this.matrix[i][0];
            }
            if (this.matrix[0][i] !== null &&
                this.matrix[0][i] === this.matrix[1][i] &&
                this.matrix[0][i] === this.matrix[2][i]) {
                return this.matrix[0][i];
            }
        }
        if (this.matrix[0][0] !== null &&
            this.matrix[0][0] === this.matrix[1][1] &&
            this.matrix[0][0] === this.matrix[2][2]) {
            return this.matrix[0][0];
        }
        if (this.matrix[0][2] !== null &&
            this.matrix[0][2] === this.matrix[1][1] &&
            this.matrix[0][2] === this.matrix[2][0]) {
            return this.matrix[0][2];
        }
        return null;
    }

    noMoreTurns() {
        for(let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.matrix[i][j] === null) return false;
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
