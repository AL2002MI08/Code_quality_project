function solution(roman) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentCharacter = roman[i];
    const currentValue = obj[currentCharacter];
    if (currentValue < prevValue) {
      res -= currentValue;
    } else {
      res += currentValue;
    }
    prevValue = currentValue;
  }

  return res;
}
