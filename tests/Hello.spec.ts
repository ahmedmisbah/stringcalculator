import { Hello } from "../src/Hello";

describe("Test environment suite", () => {
  it("Test running code", () => {
    const hello = new Hello();

    const greetedName: string = hello.greet("Gad");

    expect(greetedName).toEqual(`Hello, Gad`);
  });
});
