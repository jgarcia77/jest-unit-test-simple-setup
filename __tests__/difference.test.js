import Diff from "../difference";

describe('When subtracting', () => {
    it('Then it should return the difference', () => {
        const result = Diff(1, 2);

        expect(result).toEqual(-1);
    });
});