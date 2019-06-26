exports.prepareString = input => {
  let result = removeWhitespace(input).split(" ");
  result = result.map(word => capitalizeInitial(word)).join("_");
  return result;
};

const removeWhitespace = input => {
  // trim space off the ends
  let result = input.trim();

  // collapse duplicate spaces
  result = result.replace(/\s+/g, " ");

  return result;
};

const capitalizeInitial = input => {
  let result = input.toLowerCase();
  result = result.charAt(0).toUpperCase() + result.slice(1);

  return result;
};
