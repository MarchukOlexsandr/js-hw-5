function findEvenNumbersGreaterThan10(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > 10) {
      result.push(arr[i]);
    }
  }

  return result.reverse();
}

const inputArray = [5, 14, 8, 20, 3, 11, 17, 4];
const resultArray = findEvenNumbersGreaterThan10(inputArray);

console.log(resultArray); // Результат: [20, 14]
