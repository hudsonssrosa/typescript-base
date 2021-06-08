import { Fibonacci } from "../main/fibonacci";

describe("Fibonacci test", () => {
  it("should return 0 for input 0", () => {
    let fibonacci: Fibonacci = new Fibonacci();
    expect(fibonacci.fibonacci(0)).toBe(0);
  });
});
