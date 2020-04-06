function createTagWrapper(tag) {
  return function tagWrapper(content) {
    return `<${tag}>${content}</${tag}>`;
  };
}

const wrapInDiv = createTagWrapper("div");
const blah = wrapInDiv("blah");

console.log(blah);
