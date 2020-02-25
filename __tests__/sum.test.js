import Sum from "../sum";

describe('When adding to positive numbers', () => {
    it('Then it should be a positive number', () => {
        const result = Sum(1, 2);
        const isPositive = result > -1;

        expect(isPositive).toEqual(true);
    });
});