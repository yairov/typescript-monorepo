import calculate from './calculate';

describe('calculate', () => {
  test('calculate with number', () => {
    expect(calculate(1)).toBe(2);
  });

  test('calculate with string', () => {
    expect(calculate('str')).toBe('str1');
  });
});
