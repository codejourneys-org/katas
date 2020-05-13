const app = require('./index');

describe('Tribonacci', () => {
    it('if n === 0 returns an empty array', () => {
        const res = app.run(0)
        expect(Array.isArray(res)).toBeTruthy();
        expect(res.length).toEqual(0);
    });
    it('should generate a tribonacci sequence of n elements', () => {
        let res = app.run([1, 1, 1], 5)
        expect(res).toEqual([1, 1, 1, 3, 5]);
        res = app.run([1, 5, 0], 5)
        expect(res).toEqual([1, 5, 0, 6, 11]);
    });
});