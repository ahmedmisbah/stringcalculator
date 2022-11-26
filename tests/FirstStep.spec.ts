import { ErrorMessages } from "../src/ErrorMessages";
import { InvalidInputError } from "../src/InvalidInputError";
import { StringCalculator } from "../src/StringCalcualtor";

describe("String Calculator - First Step", () => {
  test("Empty string returns 0", () => {
    //Arrange
    const numbersString: string = "";
    //Act
    const actualSum: number = StringCalculator.add(numbersString);
    //Assert
    const expectedSum = 0;
    expect(actualSum).toEqual(expectedSum);
  });

  test("string with 1 number, returns itself", () => {
    //Arrange
    const numbersString: string = "1";
    //Act
    const actualSum: number = StringCalculator.add(numbersString);
    //Assert
    const expectedSum = 1;
    expect(actualSum).toEqual(expectedSum);
  });

  test("string with 2 numbers, returns their sum", () => {
    //Arrange
    const numbersString: string = "1,2";
    //Act
    const actualSum: number = StringCalculator.add(numbersString);
    //Assert
    const expectedSum = 3;
    expect(actualSum).toEqual(expectedSum);
  });

  test("returned sum rounded to 1 decimal place", () => {
    //Arrange
    const numbersString: string = "1.1,2.2";
    //Act
    const actualSum: number = StringCalculator.add(numbersString);
    //Assert
    const expectedSum = 3.3;
    expect(actualSum).toEqual(expectedSum);
  });

  test("string with non-number character, returns error", () => {
    //Arrange
    const numbersString: string = "1,x";
    //Act
    //Assert
    expect(() => {
      StringCalculator.add(numbersString);
    }).toThrow(new InvalidInputError(ErrorMessages.nonNumberErrorMessage));
  });
});
