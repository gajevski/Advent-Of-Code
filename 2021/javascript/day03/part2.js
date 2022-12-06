function countPriorities(str) {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let string = str.split('\n');
    let priority = 0;
    for (let i = 0; i < string.length; i += 3) {
        const first = [...string[i]];
        const second = string[i + 1];
        const third = string[i + 2];
        let hit = false;

        first.forEach((char) => {
            console.log()
            if (second.includes(char) && third.includes(char) && !hit) {
                hit = true;
                if (char == char.toLocaleUpperCase()) {
                    priority += 52 - upperCaseChars.split('').reverse().indexOf(char);
                } else {
                    priority += 26 - lowerCaseChars.split('').reverse().indexOf(char);
                }
            }
        });
    }
    return priority;
}

document.getElementById('app').innerHTML = countPriorities(str);
