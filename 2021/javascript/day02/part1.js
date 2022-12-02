const appDiv = document.getElementById('app').innerHTML;

let score = 0;

appDiv
  .split('\n')
  .map((char1) => char1.split(' '))
  .forEach((char) => {
    if (char[3] === 'X' && char[2] === 'A') {
      score += 4;
    }
    if (char[3] === 'X' && char[2] === 'B') {
      score += 1;
    }
    if (char[3] === 'X' && char[2] === 'C') {
      score += 7;
    }

    if (char[3] === 'Y' && char[2] === 'A') {
      score += 8;
    }
    if (char[3] === 'Y' && char[2] === 'B') {
      score += 5;
    }
    if (char[3] === 'Y' && char[2] === 'C') {
      score += 2;
    }

    if (char[3] === 'Z' && char[2] === 'A') {
      score += 3;
    }
    if (char[3] === 'Z' && char[2] === 'B') {
      score += 9;
    }
    if (char[3] === 'Z' && char[2] === 'C') {
      score += 6;
    }
  });

document.getElementById('app').innerHTML = score;
