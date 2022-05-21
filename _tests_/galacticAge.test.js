import { GalacticAge } from "../src/galacticAge.js";

describe('GalacticAge', () => {
  let myGalacticAge;
  beforeEach(() => {
    myGalacticAge = new GalacticAge(42,175,68,22,4,50,100);
  });

  test('it should create a galactic age class that has 5 age properties', () => {

    expect(myGalacticAge.earthAge).toEqual(42);
    expect(myGalacticAge.mercuryAge).toEqual(175);
    expect(myGalacticAge.venusAge).toEqual(68);
    expect(myGalacticAge.marsAge).toEqual(22);
    expect(myGalacticAge.jupiterAge).toEqual(4);
  });

  test('should calculate age in Mercury years based on Earth age', () => {
    myGalacticAge.calculateMercuryAge(42);
    expect(myGalacticAge.mercuryAge).toEqual(175);
  });

  test('should calculate age in Venus years based on Earth age', () => {
    myGalacticAge.calculateVenusAge(42);
    expect(myGalacticAge.venusAge).toEqual(68);
  });

  test('should calculate age in Mars years based on Earth age', () => {
    myGalacticAge.calculateMarsAge(42);
    expect(myGalacticAge.marsAge).toEqual(22);
  });

  test('should calculate age in Jupiter years based on Earth age', () => {
    myGalacticAge.calculateJupiterAge(42);
    expect(myGalacticAge.jupiterAge).toEqual(4);
  });

  test('should calculate life expectancy on each planet', () => {
    myGalacticAge.calculateLifeExpectancy();
    expect(myGalacticAge.mercuryExpectancy).toEqual(154);
    expect(myGalacticAge.venusExpectancy).toEqual(60);
    expect(myGalacticAge.marsExpectancy).toEqual(20);
    expect(myGalacticAge.jupiterExpectancy).toEqual(3);
  });
});