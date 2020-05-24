const app = require('./app');

describe('Prefill an Array', () => {
  it('if n === 0 returns an empty array', () => {
    const res = app.prefill(0);
    expect(Array.isArray(res)).toBeTruthy();
    expect(res.length).toEqual(0);
  });
  it('if n is anything other than an integer or integer-formatted string that is >=0 throw a TypeError with message n is invalid', () => {
    expect(() => app.prefill('xyz', 1)).toThrow('xyz is invalid');
    expect(() => app.prefill('-123', 1)).toThrow('-123 is invalid');
  });
  it('if v is ommited, fill the array with undefined', () => {
    const res = app.prefill(2);
    expect(res).toEqual([undefined, undefined]);
  });
  it('should return an array of n elements that all have the same value v', () => {
    let res = app.prefill(3, 1);
    expect(res).toEqual([1, 1, 1]);
    res = app.prefill(2, 'abc');
    expect(res).toEqual(['abc', 'abc']);
  });
});
