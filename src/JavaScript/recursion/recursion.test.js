import{sumOfValues} from './recursion';

describe ('recursion', () => {
    it("sums all the values in an array", () => {
        const expected = 105;
        const actual = sumOfValues ([1,2,[2,10,[10,10,10],[10,10,10],[10,10,10]]]);
        expect(actual).toEqual(expected);
    })
});