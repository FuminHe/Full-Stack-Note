// test suit-> group of related tests
describe("calculator.js", function () {
  beforeEach(function () {
    // run every time before each test
  });
  beforeAll(function () {
    // only run once before test
  });

  it("should add numbers to total", function () {
    const calculator = new Calculator();
    calculator.add(5);

    expect(calculator.total).toBe(5);
    // toBe vs. toEqual vs. toBeTruthy .not.toBe()
  });
  it("should add substract to total", function () {
    // const cal = new Calculator();
  });
  it("should add multiply to total", function () {});
  it("should add divide to total", function () {});
  it("had common operations", function () {
    const calculator = new Calculator();
    expect(calculator.add).toBeDefined();
  });

  it("can overwrite total", function () {
    const calculator = new Calculator();
    calculator.total = null;
    expect(calculator.total).toBeNull();
  });

  // toContain: contain a special value

  it("does not handle NaN", function () {
    const calculator = new Calculator();
    calculator.total = "a";
    calculator.multiply(3);
    expect(calculator.total).toBeNaN();
  });

  // handle divde by 0
  it("handle divde by 0", function () {
    const calculator = new Calculator();

    // expect(function () {
    //   calculator.divide(0);
    // }).toThrow();

    // check error message
    expect(function () {
      calculator.divide(0);
    }).toThrowError("Cannot divide by zero");
  });

  it("match ? ", function () {
    const calculator = new Calculator();
    calculator.total = 10;
    expect(calculator.total).toMatch(/-?\d+/);
    expect(typeof calculator.total).toMatch("number");
  });

  //   afterAll(function () {});
  //   afterEach(function () {});
});
