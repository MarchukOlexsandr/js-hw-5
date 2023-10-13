function processArray(arr) {
  const hasNegative = arr.some((number) => number < 0);

  if (hasNegative) {
    return arr.filter((number) => number > 0);
  } else {
    return "No negative numbers found";
  }
}

const inputArray = [3, -2, 5, 6, -8, 2];
const resultArray = processArray(inputArray);

console.log(resultArray); // Відповідь: [3, 5, 6, 2]
