import { sum } from "../src"

test('sum of two numbers is correct', () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
