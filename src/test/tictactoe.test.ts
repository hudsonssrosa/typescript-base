import { TicTacToe } from "../main/tictactoe";

describe("TicTacToe test", () => {
  let tictactoe: TicTacToe = new TicTacToe();

  it("Should returns the position 1,1 in matrix for Player X", () => {
    const position = { posX: 1, posY: 1 }
    const matrix = tictactoe.play('X', position)
    expect(matrix[1][1]).toBe('X')
  })

  it("Should returns the position 2,2 in matrix for Player O", () => {
    const position = { posX: 2, posY: 2 }
    const matrix = tictactoe.play('O', position)
    expect(matrix[2][2]).toBe('O')
  })

  it("Should returns the position 2,2 in matrix for Player X", () => {
    const position = { posX: 2, posY: 2 }
    const matrix = tictactoe.play('O', position)
    expect(matrix[2][2]).toBe('Position played')
  })

});
