function countPriorities(str) {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let priority = 0;
    str.split('\n').forEach((string) => {
        const middle = Math.floor(string.length / 2);
        const leftString = string.slice(0, middle);
        const rightString = string.slice(middle, string.length);
        let sharedLetter = '';

        for (let i = 0; i < rightString.length; i++) {
            if (leftString.includes(rightString[i])) {
                sharedLetter += rightString[i];
            }
        }

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
