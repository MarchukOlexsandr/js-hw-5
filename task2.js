function sumOfPositiveMultiplesOf3(arr) {
  const filteredArray = arr.filter((number) => number > 0 && number % 3 === 0);

  const sum = filteredArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
}

const inputArray = [3, 5, -9, 7, 2, 8, 10, -6];
const resultSum = sumOfPositiveMultiplesOf3(inputArray);

console.log(resultSum); // Відповідь: 12
