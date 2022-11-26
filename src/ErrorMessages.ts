export class ErrorMessages {
  public static readonly moreThan2NumbersErrorMessage: string =
    "Invalid input, can not add more than 2 numbers";
  public static readonly nonNumberErrorMessage: string =
    "number expected but found non-number";
  private static readonly negativeNumber: string =
    "Negative Numbers not allowed : ";

  public static negativeNumberMessage(numbers: number[]): string {
    return this.negativeNumber + numbers.join(" ");
  }
}
