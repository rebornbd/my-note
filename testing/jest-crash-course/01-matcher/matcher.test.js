const sum = require('./matcher');


test("should add 1+2 === 3", () => {
  expect(sum(1, 2)).toBe(3);
});


// NUMBER
describe('NUMBER GROUPS', () => {
  it('integer number testing', () => {
    const res = 2+2;

    expect(res).toBeGreaterThan(3);
    expect(res).toBeGreaterThanOrEqual(4);
    expect(res).toBeLessThan(5);
    expect(res).toBeLessThanOrEqual(5);

    // toBe and toEqual are equivalent for numbers
    expect(res).toBe(4);
    expect(res).toEqual(4);
  });

  it("floating number testing", () => {
    const res = 0.1 + 0.2;

    expect(res).toBeCloseTo(0.3);
    expect(res).not.toBe(0.3);
    /*
      expect(res).toBe(0.3);
      This won't work because of rounding error
    */
  });
});

// STRING
describe("STRING GROUP", () => {
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });
})


// ARRAY
describe("ARRAY GROUP", () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });
})


// EXCEPTION
describe("EXCEPTION GROUP", () => {
  const compileAndroidCode = () => {
    throw new Error('you are using the wrong JDK');
  }
  
  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
})
