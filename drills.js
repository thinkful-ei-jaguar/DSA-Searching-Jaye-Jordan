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

const inputArr=[3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
console.log(binarySearch(inputArr, 8));
// output -> 11, 5, 6, 8 (3rd index)