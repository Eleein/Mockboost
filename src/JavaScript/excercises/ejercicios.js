import React from "react";

export function makeObject(listOfWords) {
  return listOfWords.reduce((newObject, word) => {
    newObject[word] = word;
    /*for each word, I get a property and a value*/
    return newObject;
  }, {});
}

export function convertToString(numbers) {
  const finalString = numbers.reduce((newString, number) => {
    newString += `<li>${number}</li>`;
    return newString;
  }, "");
  return `<ul>${finalString}</ul>`;
}

export function convertToSpan3(wordsInList) {
  return wordsInList
    .filter(word => {
      return word.length > 4;
    })
    .map(word => {
      return `<span>${word}</span>`;
    });
}

export function convertToSpan(wordsInList) {
  return wordsInList.reduce((newSpannedList, word) => {
    if (word.length > 4) {
      newSpannedList.push(`<span>${word}</span>`);
    }
    return newSpannedList;
  }, []);
}

export function smallWordsInUpperCase(listOfWords) {
  return listOfWords.reduce((smallerWords, word) => {
    word.length <= 3
      ? smallerWords.push(word.toUpperCase())
      : "word is not small";
    return smallerWords;
  }, []);
}

export function makeIntoString(numbers) {
  return numbers.map(number => number.toString());
}

export function htmlWrapperFactory(htmlElement) {
  return function htmlWrapper(name) {
    return `<${htmlElement}>${name}</${htmlElement}>`;
  };
}

export function makeStringIntoObject(setOfStrings) {
  return setOfStrings.split(",").reduce((objectOfString, word) => {
    objectOfString[word] = "";
    return objectOfString;
  }, {});
}
export function listOfAuthors(authors) {
  return authors.reduce((listNamesOfAuthors, author) => {
    listNamesOfAuthors.push(author.name);
    if (author.influences.length !== 0) {
      listNamesOfAuthors = listNamesOfAuthors.concat(
        listOfAuthors(author.influences)
      );
    }
    return listNamesOfAuthors;
  }, []);
}

export function sumBalance(accounts){
  return accounts.reduce((result, account) => {
    result+= account.accountBalance;
    if(account.subAccounts.length !== 0){
      result+= sumBalance(account.subAccounts)
    }
    return result
  }, 0)
}
