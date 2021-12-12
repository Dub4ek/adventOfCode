class Card {
  constructor(collection) {
    this.collection = collection;
  }

  markNumber(value) {
    this.collection.forEach((item) => {
      if (item.includes(value)) {
        item[item.indexOf(value)] = 'X';
      }
    })
  }

  checkStatus() {
    let result = false;

    for (let i = 0; i < this.collection.length; i++) {
      let element = this.collection[i];
      if (element.filter((item) => item === 'X').length === element.length) {
        result = true;
      }
    }
    if (result)
      console.log(this.collection)
    return result;
  }

  getSum() {
    let result = 0;

    this.collection.forEach((item) => {
      result += item.filter((item) => item !== 'X').reduce((prev, cur) => parseInt(prev) + parseInt(cur), 0);
    })

    return result;
  }
}

function solution(data) {
  const collection = data.split('\n');
  const [bingos, ...cards] = collection;
  const bingoNumbers = bingos.split(',');
  let tempCol = [];

  const cardCollection = cards.reduce((prev, cur) => {
    if (cur === '' && tempCol.length > 0) {
      prev.push(new Card(tempCol));
      tempCol = [];
    } else if (cur !== '') {
      tempCol.push(cur.trim().split(' ').filter(Boolean))
    }

    return prev;
  },[]);
  cardCollection.push(new Card(tempCol));

  let bingoNumber;
  for (let i = 0; i < bingoNumbers.length; i++) {
    bingoNumber = bingoNumbers[i];

    for (let j = 0; j < cardCollection.length; j++) {
      let card = cardCollection[j];
      card.markNumber(bingoNumber);

      if (card.checkStatus()) {
        return card.getSum() * bingoNumber;
      }
    }
  }
}

function solution2(data) {

}

const fs = require('fs')

fs.readFile('./input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(solution(data));
})
