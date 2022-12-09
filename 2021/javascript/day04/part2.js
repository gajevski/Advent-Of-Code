function countPairs(input) {
    let answer = 0;
    const data = input.split('\n');
    const pairs = data.map(item => item.split(',').map(element => element.split('-').map(num =>
        parseInt(num)
    )));
    pairs.forEach(item => {
        const [a, b] = item[0];
        const [x, y] = item[1];
        if ((a < x && b < x) || (a > y && b > y)) {
          answer += 0;
        } else {
          answer += 1;
        }
    });
    return answer;
}

const input = document.getElementById("app").innerHTML.trim();

console.log(countPairs(input));