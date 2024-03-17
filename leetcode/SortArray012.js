const sortMe = (arr) => {
  const counts = {0: 0, 1: 0, 2: 0};

  for(let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];

    if (currentItem === 0 ) {
      counts['0'] += 1;
    } else if (currentItem === 1) {
      counts['1'] += 1;
    } else if (currentItem === 1) {
      counts['2'] += 1;
    }
  }

  for(let i = 0; i < arr.length; i++) {
    if ( i < counts['0']) {
      arr[i] = 0;
    } else if (i >= counts['0'] && i < counts['1'] + counts['0']) {
      arr[i] = 1;
    } else {
      arr[i] = 2;
    }
  }

  return arr;
};


console.log(sortMe([1, 0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0]))