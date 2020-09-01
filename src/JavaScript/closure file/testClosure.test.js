import {
  createsSentenceMaker,
  createsIterator,
  createsMultiplier,
  objectMakerFactory,
  reverseIteratorFactory,
  propertyValuesStringFactory,
  objectFactory,
   bloodyFunctionFactory
} from "./closure learning";

describe("closure", () => {
  it("does something", () => {
    const expected = "I am excited about this";
    const sentenceMaker = createsSentenceMaker("this");
    const actual = sentenceMaker("I am excited about");
    expect(actual).toEqual(expected);
  });
  it("creates an iterator", () => {
    const expected = 3;
    const iterator = createsIterator(0);
    let actual = iterator();
    actual = iterator();
    actual = iterator();
    expect(actual).toEqual(expected);
  });
  it("pays me a lot of money", () => {
    const expected = 18;
    const multiplier = createsMultiplier(2);
    const actual = multiplier([2, 3, 4]);
    expect(actual).toEqual(expected);
  });
  it("creates objects", () => {
    const expected = { name: "Joe", city: "Berlin", age: 46 };
    const profileMaker = objectMakerFactory(["name", "city", "age"]);
    const dogMaker = objectMakerFactory(["size", "breed", "certified"]);
    const actual = profileMaker(["Joe", "Berlin", 46]);
    console.log(actual);
    expect(actual).toEqual(expected);
  });
  it("creates a reverse-iterator", ()=> {
    const expected = 1;
    const reverseIterator = reverseIteratorFactory (5);
    let actual= reverseIterator ();
    actual= reverseIterator ();
    actual= reverseIterator ();
    actual= reverseIterator ();
    expect(actual).toEqual(expected);
  });
  it("creates string of property values", ()=> {
    const expected = "Dania Cuba Havana";
    const propertyValuesString = propertyValuesStringFactory({name:"Dania", country:"Cuba", city:"Havana"}, ["name", "country", "city"]);
    const actual = propertyValuesString ();
    expect(actual).toEqual(expected);
  });
  it("creates a function that creates objects", () => {
    const expected = {
      name: "Joe",
      age: 46,
      addresses: [{city: "Berlin", state: "Berlin", street: {name: "Traunsteiner", houseNumber: 4}}],
      profession: "FE-developer"
    }
    const objectMaker = objectFactory (["name", "age", "addresses", "profession" ]);
    const actual = objectMaker (["Joe",46, [{city: "Berlin", state: "Berlin", street: {name: "Traunsteiner", houseNumber: 4}}],"FE-developer"])
    expect(actual).toEqual(expected);
  })
});
it ("creates a function that creates a function that attaches the word intense to every word", ()=>{
  const expected = ["intense JavaScript", "intense cold", "intense Germany"];
  const bloodyFunction = bloodyFunctionFactory(["JavaScript","cold","Germany"]);
  const actual = bloodyFunction("intense");
  expect(actual).toEqual(expected);
});
