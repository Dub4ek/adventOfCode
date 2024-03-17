function solution(data) {
  const collection = data.split('\n').map(item => item.split(' '));
  const weightMap = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
  };
  console.log(collection)
  return collection.map(item => {
    const leftValue = weightMap[item[0]];
    const rightValue = weightMap[item[1]];

    if (leftValue > rightValue) {
      return 0 + rightValue;
    }

    if (leftValue === rightValue) {
      return 3 + rightValue;
    }

    return 6 + rightValue;
  }).reduce((prev, cur) => prev + cur, 0);
}

/*function part1(data) {
  const collection = data.split('\n').map(item => item.split(' '));
  const movePoints = {
    "X": 1, // Rock
    "Y": 2, // Paper
    "Z": 3, // Scissor
  }
  const winningMoves = {
    "A": "Y", // Rock loses to Paper
    "B": "Z", // Paper loses to Scissor
    "C": "X", // Scissor loses to Rock
  };
  const drawingMoves = {
    "A": "X", // Both Rock
    "B": "Y", // Both Paper
    "C": "Z", // Both Scissor
  };

  let totalPoints = 0;

  for (let move of collection) {
    const [opponentMove, myMove] = move;
    totalPoints += movePoints[myMove];
    if (winningMoves[opponentMove] === myMove) {
      totalPoints += 6;
    } else if (drawingMoves[opponentMove] === myMove) {
      totalPoints += 3;
    } else {
      totalPoints += 0;
    }
  }

  console.log(totalPoints);
}*/


const fs = require('fs')

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(solution(data));
})
