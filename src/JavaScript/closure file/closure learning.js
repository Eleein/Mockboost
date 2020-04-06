export function createsSentenceMaker(OneWord) {
  return function SentenceMaker(OneSentence) {
    return `${OneSentence} ${OneWord}`;
  };
}

export function createsIterator(givenNumber) {
  return function iterator() {
    return ++givenNumber;
  };
}

export function createsMultiplier(givenNumber) {
  return function multiplier(listOfNumbers) {
    return listOfNumbers.reduce((result, number) => {
      result += number * givenNumber;
      return result;
    }, 0);
  };
}

export function objectMakerFactory(listOfPropertyNames) {
  return function objectMaker(listOfPropertyValues) {
    return listOfPropertyNames.reduce((object, propertyName, index) => {
      object[propertyName] = listOfPropertyValues[index];
      return object;
    }, {});
  };
}

export function reverseIteratorFactory(startingNumber) {
  return function reverseIterator() {
    let finalNumber;
    if (startingNumber > 0) {
      finalNumber = --startingNumber;
    } else {
      finalNumber = 0;
    }
    return finalNumber;
  };
}

// TODO change this function to not be a closure
export function propertyValuesStringFactory(propertyObject, listOfProperties) {
  return function propertyValuesString() {
    // then, the access the value of the object, and put it in bigString.
    let values = listOfProperties.reduce((propertyValuesInString, property) => {
      propertyValuesInString += propertyObject[property] + " ";
      return propertyValuesInString;
    }, "");
    values = values.trim();
    return values;
  };
}

export function objectFactory(propList) {
  return function objectMaker(valuesList) {
    return propList.reduce((newObject, propItem, index) => {
      newObject[propItem] = valuesList[index];
      return newObject;
    }, {});
  };
}

export const bloodyFunctionFactory = words => prefixedWord =>
  words.map(word => prefixedWord + " " + word);