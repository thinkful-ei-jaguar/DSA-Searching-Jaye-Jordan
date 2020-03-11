const bst = require('./bstClass')
//Drill #1
function binarySearch(array, value, start=0, end=array.length-1) {
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
    return binarySearch(array, value, index + 1, end);
  }

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
//console.log(sortedArr);


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

//drill 5
function drill5(){
  let pineTree = new bst()
  pineTree.insert(25)
  pineTree.insert(15)
  pineTree.insert(50)
  pineTree.insert(10)
  pineTree.insert(24)
  pineTree.insert(35)
  pineTree.insert(70)
  pineTree.insert(4)
  pineTree.insert(12)
  pineTree.insert(18)
  pineTree.insert(31)
  pineTree.insert(44)
  pineTree.insert(66)
  pineTree.insert(90)
  pineTree.insert(22)
  console.log('INORDER------------------------- ')
  pineTree.dfsInOrder()
  console.log('POST ORDER------------------------- ')
  pineTree.dfsPostOrder()
  console.log('PREORDER------------------ ' )
  pineTree.dfsPreOrder()
}
//drill5()

//6
/**
 * picard
 *    riker
 *       worf
 *       laforge
 *    data
 *        crusher
 *            selar
 */
function drill6(){
  let starshipUSSEnterprise = new bst()
  starshipUSSEnterprise.insert('Captain Picard')
  starshipUSSEnterprise.left = new bst('Commander Riker', null, 'Captain Picard')
  starshipUSSEnterprise.right = new bst('Commander Data', null, 'Captain Picard')
  starshipUSSEnterprise.left.left = new bst('Lt. Cmdr. Worf', null, 'Commander Riker')
  starshipUSSEnterprise.left.right = new bst('Lt. Cmdr. LaForge', null, 'Commander Riker')
  starshipUSSEnterprise.right.right = new bst('Lt. Cmdr. Crusher', null, 'Commander Data')
  starshipUSSEnterprise.right.right.left = new bst('Lieutenant Selar', null, 'Lt. Cmdr. Crusher')
  starshipUSSEnterprise.dfsPreOrder()
}
//drill6()

//7
//input, a day which is actually an index
//output, max profit when bought on that day and sell on subsequent day
function drill7(day){
  const shares = [128, 97, 121, 123, 98, 97, 105]
  let temp
  let max = -50
  for(let i = day+1; i < shares.length; i++){
    temp = shares[i] - shares[day]
    if(temp > max) {
      max = temp
    }
  }
  console.log(max)
}
//drill7(0)