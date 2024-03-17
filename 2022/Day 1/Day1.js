function solution(data) {
  const collection = data.split('\n');
  let max = -1;
  let max2 = -1;
  let max3 = -1;
  let currentEnergyLevel = 0;

  for (let i = 0; i <= collection.length; i++) {
    const currentItem = collection[i];

    if (!currentItem) {
      if (max < currentEnergyLevel) {
        let temp = max;
        max = currentEnergyLevel;
        currentEnergyLevel = temp;
      }

      if (max2 < currentEnergyLevel) {
        let temp = max2;
        max2 = currentEnergyLevel;
        currentEnergyLevel = temp;
      }

      if (max3 < currentEnergyLevel) {
        max3 = currentEnergyLevel;
      }

      currentEnergyLevel = 0;
    } else {
      currentEnergyLevel += parseInt(currentItem, 10);
    }
  }

  return max + max2 + max3;
}


const fs = require('fs')

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(solution(data));
})
