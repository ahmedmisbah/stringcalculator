import { ErrorMessages } from "./ErrorMessages";
import { InvalidInputError } from "./InvalidInputError";
import { StringCalculatorGuard } from "./StringCalculatorGuard";

export class StringCalculator {
  public static add(numbersString: string) {
    if (/.*-.*/.test(numbersString)) {
      const negativeNumbers = [...numbersString.matchAll(/,?-\d+,?/g)];

      let nums: number[] = negativeNumbers.map((n) => {
        console.log({ n });
        return Number(n[0].match(/-\d+/)![0]);
      });
      throw new InvalidInputError(ErrorMessages.negativeNumberMessage(nums));
    }
    const stringNumbers: string[] = numbersString.split(",");

    const numbers: number[] = stringNumbers.map((n) => {
      let num: number = Number(n);
      StringCalculatorGuard.checkForNonNumberCharacter(num);
      return num;
    });

    let sum = numbers.reduce((a, b) => {
      return a + b;
    }, 0);
    sum = StringCalculator.roundToOneDecimalPlace(sum);
    return sum;
  }

  private static roundToOneDecimalPlace(sum: number) {
    sum = Math.round(sum * 10) / 10;
    return sum;
  }
}
