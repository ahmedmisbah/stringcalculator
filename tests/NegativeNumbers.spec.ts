import { ErrorMessages } from "../src/ErrorMessages";
import { InvalidInputError } from "../src/InvalidInputError";
import { StringCalculator } from "../src/StringCalcualtor";

describe("Negative Numbers", () => {
  test("Can detect the first negative number", () => {
    //Arrange
    const numbersString: string = "1,-2,3,4,5";

    expect(() => {
      StringCalculator.add(numbersString);
    }).toThrow(
      new InvalidInputError(ErrorMessages.negativeNumberMessage([-2]))
    );
  });

  test("Can detect the all negative numbers", () => {
    //Arrange
    const numbersString: string = "1,-2,-3,4,-5";

    expect(() => {
      StringCalculator.add(numbersString);
    }).toThrow(
      new InvalidInputError(ErrorMessages.negativeNumberMessage([-2, -3, -5]))
    );
  });
});
