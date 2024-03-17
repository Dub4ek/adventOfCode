/*var pivotIndex = function(nums) {
  const sum = nums.reduce((acc,curr) => acc + curr, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = sum - leftSum - nums[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
};*/

var pivotIndex = function(nums) {
  let j = 0;
  let k = nums.length - 1;
  let sumLeft = 0;
  let sumRight = 0;

  while(j < k && k - j > 1 ) {
    //console.log(j, k, sumLeft, sumRight)
    if (sumLeft > sumRight) {
      k--;
      sumRight += nums[k];
    } else if (sumLeft < sumRight) {
      j++;
      sumRight += nums[j];
    } else if (sumLeft === sumRight && sumLeft + sumRight > 1) {
      break;
    }
  }
  console.log(j, k, sumLeft, sumRight)
  if (sumLeft === sumRight && k - j === 1) {
    return j + 1;
  }

  return -1;
};

console.log(pivotIndex([2,1,-1]))