function caesarCipher(s, k) {
  // Write your code here
  let result = '';
  const realK = k % 26;
  for(let i = 0; i < s.length; i++) {
    let symbolCode = s[i].charCodeAt(0);
    let upperSymbol = symbolCode >= 65 && symbolCode <= 90;

    if (upperSymbol) {
      symbolCode += 32;
    }

    if (symbolCode >= 97 && symbolCode <= 122) {
      let index = (symbolCode + realK);

      if (index > 122) {
        index = index % 122 + 96;
      }

      result += String.fromCharCode(upperSymbol ? index - 32 : index);
    } else {
      result += s[i];
    }
  }

  return result;
}

console.log(caesarCipher('www.abc.xy', 9))