let animals = [];


beforeAll(() => {
  console.log('***: BEFORE-ALL | GLOBAL SCOP');
  animals = [
    'elephant',
    'zebra',
    'bear',
    'tiger',
  ];
});

// beforeEach(() => {
//   console.log("***: BEFORE EACH TEST | GLOBAL SCOP");
// });


describe("SETUP & TEARDOWN GROUP", () => {
  beforeAll(() => {
    console.log('BEFORE-ALL | SETUP-TEARDOWN SCOP');
  });

  beforeEach(() => {
    console.log("BEFORE EACH TEST | SETUP-TEARDOWN SCOP");
  });
  
  afterEach(() => {
    console.log("AFTER EACH TEST");
    animals = [
      'elephant',
      'zebra',
      'bear',
      'tiger',
    ];
  });


  it("should add animal to end of array", () => {
    const animal = "dog";
    animals.push(animal);

    expect(animals[animals.length - 1]).toBe(animal);
  })

  it("should add animal to begin of array", () => {
    const animal = "monkey";
    animals.unshift(animal);

    expect(animals[0]).toBe(animal);
  })

  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4);
  })
})
