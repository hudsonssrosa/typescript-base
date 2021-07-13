import { Position } from "./position";

type Player = 'X' | 'O';

export class TicTacToe {
  private position: Position;
  private matrix: string[][];

  constructor() {
    this.position = new Position();
    this.matrix = [[], [], [], [], [], [], [], [], []];
  }

  play(player: Player, desiredPosition: Position) {
    this.position = desiredPosition;
    let coordinates = this.position.getPosition();
    const row = coordinates.row;
    const column = coordinates.column;
    if (this.matrix[row][column] === "X" || this.matrix[row][column] === "0") {
      return 'Position played';
    }
    this.matrix[row][column] = player;
    return this.matrix;
  }

  hasAnyBodyWon() {
    let gameState = false;
    let pos = 0;
    while (pos < 3 && gameState === false) {
      gameState = this.isWinner(pos);
      pos++;
    }
    return gameState;
  }

  isWinner(pos: number){
    return (this.wonByRow(pos) || this.wonByColumn(pos) || this.wonByDiagonal(pos));
  }

  wonByRow(pos: number) {
    return (this.matrix[pos][0] === "X" || this.matrix[pos][0] === "O") && this.matrix[pos][0] === this.matrix[pos][1] && this.matrix[pos][1] === this.matrix[pos][2];
  }

  wonByColumn(pos: number) {
    return (this.matrix[0][pos] === "X" || this.matrix[0][pos] === "O") && this.matrix[0][pos] === this.matrix[1][pos] && this.matrix[1][pos] === this.matrix[2][pos];
  }

  wonByDiagonal(pos: number) {
    return (this.matrix[1][1] === "X" || this.matrix[1][1] === "O") && (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) ||
    (this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0]);
  }

}
