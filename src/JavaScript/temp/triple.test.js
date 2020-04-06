import {triple} from "./triple"

describe("Triple numbers", () => {
    it("triples a list of numbers", function () {
        const expected = [6, 9, 15];
        const actual = triple([2,3,5]);
        expect(actual).toEqual(expected);
    });
});