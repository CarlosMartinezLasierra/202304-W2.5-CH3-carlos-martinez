import { fizzbuzz } from "./sample";
describe("fizzbuzz", () => {
  test("Given initial and final number, it should return an array", () => {
    const start = 1;
    const end = 15;
    const result = fizzbuzz(start, end);
    expect(Array.isArray(result)).toBe(true);
  });

  test("When given a fizzbuzz function", () => {
    describe("When we give it 1 and 15 as parameters", () => {
      test("We should recieve the array", () => {
        const start = 1;
        const end = 15;
        const expected = [
          1,
          2,
          "Fizz",
          4,
          "Buzz",
          "Fizz",
          7,
          8,
          "Fizz",
          "Buzz",
          11,
          "Fizz",
          13,
          14,
          "FizzBuzz",
        ];
        const result = fizzbuzz(start, end);
        expect(result).toEqual(expected);
      });
    });
  });
});
