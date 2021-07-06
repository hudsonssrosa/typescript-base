import { TicTacToe } from "../main/tictactoe";

describe("TicTacToe test", () => {
  let tictactoe: TicTacToe = new TicTacToe();

  it("Should returns 'Played' when Player 1 has 'X' at position  1,1", () => {
    const position = { posX: 1, posY: 1 }
    expect(tictactoe.play('X', position)).toBe('Played')
  })
});
