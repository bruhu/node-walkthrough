const removeWhitespace = input => {
  // Trim whitespace from the beginning and end of the param
  let result = input.trim();

  //collapse duplicate spaces - using regex
  result = result.replace(/\s+/g, " ");

  console.log(result);
};

// removeWhitespace("  sao tome     ");
