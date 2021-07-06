type Player = 'X' | 'O';
export class TicTacToe {

    private matrix: string[][]


    constructor() {
        this.matrix = [
            [], [], [],
            [], [], [],
            [], [], []
        ]

    }
  
    play(player: Player, position: any) {
        const posX = position.posX
        const posY = position.posY
        if (this.matrix[posX][posY] != undefined) {
            return "Position played";
        }
        this.matrix[posX][posY] = player
        return this.matrix;
    }

    hasAnyBodyWon(){
        if (this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][1] == this.matrix[0][2]){
            return true;
        }
        return false
    }


}
