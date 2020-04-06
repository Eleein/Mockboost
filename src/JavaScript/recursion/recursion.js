export function sumOfValues(listOfNumbers) {
  return listOfNumbers.reduce((sum, number) => {
    if (!Array.isArray(number)) {
      sum += number;
    } else {
      sum += sumOfValues(number);
    }
    return sum;
  }, 0);
}


const People = {
  name: "Jorge",
  age:23 ,
  associates: [
    {
      name:"Penelope",
      age: 31,
      associates: [
        {
          name:"Martin",
          age:32,
          associates:[
            {
              name:"Ernesto",
              age:47,
              associates: []
            }
          ]},
        {name:"Filippa",
          age:29,
          associates: []
        }
      ]
    },
    {
      name:"Eduardo",
      age:37,
      associates: []
    }]
};

