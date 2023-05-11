function fizzbuzz(start: number, end: number): Array<string | number> {
  const result: Array<string | number> = [];

  for (let num = start; num <= end; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      result.push("FizzBuzz");
    } else if (num % 3 === 0) {
      result.push("Fizz");
    } else if (num % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(num);
    }
  }

  return result;
}

