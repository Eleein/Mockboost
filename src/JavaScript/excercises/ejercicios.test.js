import React from 'react';
import {makeObject, convertToString,convertToSpan,smallWordsInUpperCase, makeIntoString,htmlWrapperFactory,makeStringIntoObject,listOfAuthors, sumBalance} from'./ejercicios'

describe("JavaScript testing environment", () => {
    it("tests if the function creates an object", ()=> {
          const expected = {
              name: "name",
              city: "city",
              country: "country"
          };
          const actual = makeObject(["name", "city","country"]);
        expect(actual).toEqual(expected)
    });
    it("tests if the array elements are in an unordered list", () => {
        const expected = `<ul><li>1</li><li>2</li><li>3</li></ul>`;
        const actual= convertToString ([1,2,3]);
            expect(actual).toEqual(expected)
    });
    it("wraps the elements of the array in span tags", () => {
        const expected = ["<span>think</span>","<span>Dania</span>", "<span>think</span>"];
        const actual= convertToSpan(["I","think", "Dania","will", "not", "think"]);
        expect(actual).toEqual(expected)
    });
    it("it gets words that are not more than 3 characters and uppercases them", () => {
        const expected = ["YOU", "TRY","IT" ];
        const actual = smallWordsInUpperCase (["you", "will", "try", "it", "this", "will", "not", "fail"]);
        expect(actual).toEqual(expected);
    })
    it("it converts numbers to string", () => {
        const expected = ["1","2","3","4"];
        const actual = makeIntoString([1,2,3,4]);
        expect(actual).toEqual(expected)
    });
    it("wraps the elements with HTML tag", () => {
        const expected = "<div>Daniel</div>";
        const htmlWrapper = htmlWrapperFactory ("div");
        const actual = htmlWrapper("Daniel");
        expect(actual).toEqual(expected)
    });
    it("returns an object with empty values", () => {
        const expected = {
            first: "",
            second: "",
            third:""
        };
        const actual = makeStringIntoObject("first,second,third");
        expect(actual).toEqual(expected)
    });
    it("makes a list of authors names", () =>{
        const expected = ["J.K. Rowling", "Roald Dahl", "Lewis Carroll", "Jane Austin",
            "Susanna Clarke", "Katherine Briggs", "Lady Wilde", "Jane Austin", "John Connolly",
            "H. P. Lovecraft", "Katherine Briggs", "Lady Wilde"];
        const actual = listOfAuthors([
                {
                    name: "J.K. Rowling",
                    influences: [
                        {
                            name: "Roald Dahl",
                            influences: [
                                {
                                    name: "Lewis Carroll",
                                    influences: []
                                }
                            ]
                        },
                        {
                            name: "Jane Austin",
                            influences: []
                        }
                    ]
                },
                {
                    name: "Susanna Clarke",
                    influences: [
                        {
                            name: "Katherine Briggs",
                            influences: [
                                {
                                    name: "Lady Wilde",
                                    influences: []
                                }
                            ]
                        },
                        {
                            name: "Jane Austin",
                            influences: []
                        }
                    ]
                },
                {
                    name: "John Connolly",
                    influences: [
                        {
                            name: "H. P. Lovecraft",
                            influences: []
                        },
                        {
                            name: "Katherine Briggs",
                            influences: [
                                {
                                    name: "Lady Wilde",
                                    influences: []
                                }
                            ]
                        }
                    ]
                }
            ]
        );
        expect(actual).toEqual(expected)

    });
    it('sums all the account balances in the array', () =>{
        const expected = 40608;
        const actual = sumBalance([
            {
                accountNumber: "125768494",
                accountHolder: "Jorge",
                accountBalance: 143,
                subAccounts: [
                    {
                        accountNumber: "5847893938",
                        accountHolder: "Jorge",
                        accountBalance: 27653,
                        subAccounts: [
                            {
                                accountNumber: "483939375",
                                accountHolder: "Jorge",
                                accountBalance: 574,
                                subAccounts: []
                            }
                        ]
                    }
                ]
            },
            {
                accountNumber: "234234234",
                accountHolder: "Mathilde",
                accountBalance: 4567,
                subAccounts: [
                    {
                        accountNumber: "456456456",
                        accountHolder: "Mathilde",
                        accountBalance: 12,
                        subAccounts: [
                            {
                                accountNumber: "3468797654",
                                accountHolder: "Mathilde",
                                accountBalance: 743,
                                subAccounts: [
                                    {
                                        accountNumber: "473635679",
                                        accountHolder: "Mathilde",
                                        accountBalance: 486,
                                        subAccounts: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                accountNumber: "55455678",
                accountHolder: "Rejnaldo",
                accountBalance: 6430,
                subAccounts: []
            }
        ]);
        expect(actual).toEqual(expected)
    })

});
