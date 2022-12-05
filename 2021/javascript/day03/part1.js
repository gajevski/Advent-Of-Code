function countPriorities(str) {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let priority = 0;
    str.split('\n').forEach((string) => {
        const middle = Math.floor(string.length / 2);
        const leftString = string.slice(0, middle);
        const rightString = string.slice(middle, string.length);
        const dividedString = [leftString, rightString];
        let sharedLetter = '';

        dividedString[0].split('').forEach((char) => {
            dividedString[1].split('').forEach((char2) => {
                if (char === char2) {
                    sharedLetter += char;
                }
            });
        });

        const sharedLetterSet = new Set(sharedLetter);

        if (lowerCaseChars.indexOf([...sharedLetterSet]) === -1) {
            priority += 52 - upperCaseChars.split('').reverse().indexOf(...sharedLetterSet);
        } else {
            priority += 26 - lowerCaseChars.split('').reverse().indexOf(...sharedLetterSet);
        }
    });
    return priority;
}

const str = document.getElementById('app').innerHTML.trim();

document.getElementById('app').innerHTML = countPriorities(str);
