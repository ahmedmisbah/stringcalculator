import { ErrorMessages } from "../src/ErrorMessages";
import { InvalidInputError } from "../src/InvalidInputError";
import { StringCalculator } from "../src/StringCalcualtor";

describe("String Calculator - Many Numbers", () => {
  test("Can add many numbers", () => {
    //Arrange
    const numbersString: string = "1,2,3,4,5";
    //Act
    const actualSum: number = StringCalculator.add(numbersString);
    //Assert
    const expectedSum = 15;
    expect(actualSum).toEqual(expectedSum);
  });
});
