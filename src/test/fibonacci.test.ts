import { Fibonacci } from "../main/fibonacci";

describe("Fibonacci test", () => {
  it("should return 0 for input 0", () => {
    let fibonacci: Fibonacci = new Fibonacci();
    expect(fibonacci.fibonacci(0)).toBe(0);
  });

  it("should return 1 for input 1", () => {
    let fibonacci: Fibonacci = new Fibonacci();
    expect(fibonacci.fibonacci(1)).toBe(1);
  });

  it("should return 1 for input 2", () => {
    let fibonacci: Fibonacci = new Fibonacci();
    expect(fibonacci.fibonacci(1)).toBe(2);
  });
});
