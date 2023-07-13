import calculate from '../logic/calculate';

describe('The calculate function', () => {
  test("returns an object { total: null, next: '5' }, when the calculator is reset and user press button: 5", () => {
    const dataObject = { total: null, next: '0', operation: null };

    const result = calculate(dataObject, '5');

    expect(result).toEqual({ total: null, next: '5' });
  });

  test("returns an object { total: '50', next: '0', operation: '+' }, when user press the button: 0 twice", () => {
    const dataObject = { total: '50', next: null, operation: '+' };

    const resultFirstZero = calculate(dataObject, '0');
    const resultSecondZero = calculate(resultFirstZero, '0');

    expect(resultSecondZero).toEqual({ total: '50', next: '0', operation: '+' });
  });

  test("returns an object { total: '200', next: null, operation: null }, when user press the equal button (=) after did the operation 100 x 2", () => {
    const dataObject = { total: '100', next: '2', operation: 'x' };

    const result = calculate(dataObject, '=');

    expect(result).toEqual({ total: '200', next: null, operation: null });
  });

  test("returns an object {total: null, next: '0', operation: null}, when user press the button: AC", () => {
    const dataObject = { total: '10', next: null, operation: '-' };

    const result = calculate(dataObject, 'AC');

    expect(result).toEqual({ total: null, next: '0', operation: null });
  });
});
