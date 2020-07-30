import Sum from "../sum";

describe("Feature: Sum module", () => {
    describe("Given all arguments are provided", () => {
        describe("When summing 1 and 2", () => {
            it("Then it should return 3", () => {
                const result = Sum(1, 2);
                expect(result).toEqual(3);
            });
        });
    });
});