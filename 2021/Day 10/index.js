function solution(data) {
  let stack = [];
  const collection = data.split('\n');
  const result = [];
  const PAIRS = {
    '(': ')',
    '[': ']',
    '<': '>',
    '{': '}',
  };

  const POINTS = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137,
  };

  collection.forEach(item => {
    for (let i = 0; i < item.length; i++) {
      let element = item[i];
      if ('({<['.includes(element)) {
        stack.push(element);
      } else {
        const stackElement = stack.pop();

        if (PAIRS[stackElement] !== element) {
          result.push(element);
          break;
        }
      }
    }

    stack = [];
  });

  return result.reduce((prev, cur) => prev + POINTS[cur], 0);
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


/*console.log(solution('[({(<(())[]>[[{[]{<()<>>\n' +
  '[(()[<>])]({[<{<<[]>>(\n' +
  '{([(<{}[<>[]}>{[]{[(<()>\n' +
  '(((({<>}<{<{<>}{[]{[]{}\n' +
  '[[<[([]))<([[{}[[()]]]\n' +
  '[{[{({}]{}}([{[{{{}}([]\n' +
  '{<[[]]>}<{[{[{[]{()[[[]\n' +
  '[<(<(<(<{}))><([]([]()\n' +
  '<{([([[(<>()){}]>(<<{{\n' +
  '<{([{{}}[<[[[<>{}]]]>[]]'))*/

