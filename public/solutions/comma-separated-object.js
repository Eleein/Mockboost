function commaSeparatedToObject(commaSepString) {
  const propertyList = commaSepString.split(",");
  return propertyList.reduce((object, property) => {
    object[property] = "";
    return object;
  }, {});
}

console.log(commaSeparatedToObject("one,two,three,four"));
