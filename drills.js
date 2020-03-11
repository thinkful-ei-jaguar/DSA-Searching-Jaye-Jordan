//Drill #1
function binarySearch(array, value, start=0, end=array.length-1) {
  if (start > end) {
    return -1;
  }

  //find the midpoint and the item att the midpoint 
  const index = Math.floor((start + end) / 2);
  const item = array[index];

  //if the middle element is the target them return that location
  if (item === value) {
    return index;
  }

  //if the middle element is less than the target then the target lies 
  //on the right side so eliminate all left side and only 
  //consider after the middle to the end of the array
  else if (item < value) {
    console.log(array[index], 'index');
    return binarySearch(array, value, index + 1, end);
  }
  //if the middle element is greater than the target then the 
  //target is on the left side so the left of the middle 
  else if (item > value) {
    console.log(array[index], 'index');
    return binarySearch(array, value, start, index - 1);
  }
}
// const inputArr=[3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
// console.log(binarySearch(inputArr, 8));
// output -> 11, 5, 6, 8 (3rd index)

// Drill #2
// 1) Linear
function linearSearch(array, value) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    counter++;
    if (array[i] === value) {
      return counter;

    }
  }
  return 'Your input was not found in the dataset, try a differnt input!';
}

function reactBinarySearch(array, value, start=0, end=array.length-1) {
  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  if (item === value) {
    return index;
  }

  else if (item < value) {
    console.log(array[index], 'index');
    return binarySearch(array, value, index + 1, end) + 1;
  }

  else if (item > value) {
    console.log(array[index], 'index');
    return binarySearch(array, value, start, index - 1) + 1;
  }
}
const inputArr=[3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
// console.log(reactBinarySearch(inputArr, 8));
// console.log(linearSearch(inputArr, 8));

const arrInput=[50, 3, 5, 22,  6, 8, 11, 12, 2, 14, 15, 17, 1, 18];
const sortedArr = arrInput.sort((a, b) => { return a-b; });
console.log(sortedArr);


module.exports = {linearSearch, reactBinarySearch};


//Drill #4
// 1)
// post-order: 14 19 15 27 25 79 90 91 89 35
// in-order:  14 15 19 25 27 35 79 89 90 91
// pre-order: 35 25 15 14 19 27 89 79 91 90
//             35
//         /       \
//       25         89
//     /   \       /  \
//   15     27    79   91
//   / \               /
// 14   19            90

// 2)
// post-order: 5 7 6 9 11 10 8
// pre-order: 8 6 5 7 10 9 11
//       8
//     /   \
//    6      10
//   / \     / \
// 5   7    9   11