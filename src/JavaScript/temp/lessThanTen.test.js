import {lessThanTen} from "./lessThanTen"

describe("Numbers less than ten", () => {
    it("filters numbers that are less than ten", function () {
        const expected = [2, 4, 5, 9];
        const actual = lessThanTen([2, 10, 4, 5, 11, 14, 9]);
        expect(actual).toEqual(expected);
    })
})