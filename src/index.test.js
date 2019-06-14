const { handler } = require("./index");

describe("Index", () => {
  test("Correct", () => {
    expect(handler()).toBe("jest_unit_tests");
  });
});
