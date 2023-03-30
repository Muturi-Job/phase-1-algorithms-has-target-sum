function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j <array.length; j++){
     if( array[i] + array[j] === target)
    return([array[i],array[j]], true)
    }
    }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Iterate through the array
  Get the first element in the array
  Iterate through the second time each time taking the first element and adding it ti every other element in the array
  If at any point the numbers add up to the target return true and an array of the two numbers
  IF it doesn't, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
