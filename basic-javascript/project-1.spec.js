const {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
} = require('./project-1');

// start testing!
describe('Jest', () => {
  test('jest runs', () => {});
});

test('Multiply By Ten', () => {
  const input = 3;
  const result = 30;
  expect(multiplyByTen(input)).toEqual(result);
});

test('Subtract Five', () => {
  const input = 25;
  const result = 20;
  expect(subtractFive(input)).toEqual(result);
});

test('Are Same Length', () => {
  const input1 = 'test';
  const input2 = 'work';
  expect(areSameLength(input1, input2)).toBeTruthy();
});

test('Are Equal', () => {
  const x = 100;
  const y = 100;
  expect(areEqual(x, y)).toBeTruthy();
});

test('Less Than Ninety', () => {
  const input = 91;
  const result = false;
  expect(lessThanNinety(input, result)).toBe(result);
});
