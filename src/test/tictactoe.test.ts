import { TicTacToe } from "../main/tictactoe";

describe("TicTacToe test", () => {
  let tictactoe: TicTacToe = new TicTacToe();

  it("Should returns 'Played' when Player 1 has 'X' at position  1,1", () => {
    const position = { posX: 1, posY: 1 }
    const matrix = tictactoe.play('X', position)
    expect(matrix[1][1]).toBe('X')
  })

  it("Should returns 'position already played' when Player 2 has '0' at position  1,1", () => {
    const position = { posX: 1, posY: 1 }
    const matrix = tictactoe.play('O', position)
    expect(matrix[1][1]).toBe('X')
  })

});
