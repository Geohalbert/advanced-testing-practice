import {add, subtract, multiply,divide} from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 3 from 5 to return 2", () => {
    expect(subtract(5, 3)).toBe(2);
  });
});

describe("multiply", () => {
  it("should multiply 4 and 2 and return 8", () => {
    expect(multiply(4, 2)).toBe(8);
  });
});

describe("divide", () => {
  it("should divide 2 from 6 and return 3", () => {
    expect(divide(6, 2)).toBe(3);
  });
});
