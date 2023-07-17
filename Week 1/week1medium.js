function findMostRepeatedLetter(text) {
    const letterCounts = {};
    let mostRepeatedLetter = [];
    let maxCount = 0;

    for (let i = 0; i < text.toLowerCase().length; i++) {
        const letter = text.toLowerCase()[i];

        letterCounts[letter] = (letterCounts[letter] || 0) + 1;
        if (letterCounts[letter] > maxCount) {
            maxCount = letterCounts[letter];
        }
    }

    for (const letter in letterCounts) {
        if (letterCounts[letter] == maxCount) {
            mostRepeatedLetter.push(letter);
            maxCount = letterCounts[letter];
        }
    }

    if (mostRepeatedLetter.length == 1) {
        return `The most repeated letter is '${mostRepeatedLetter}' with a count of ${maxCount}.`;
    } else {
        return `The most repeated letters are '${mostRepeatedLetter}' with a count of ${maxCount}.`;
    }
}

let userString = prompt('Can you give me a string?')
const result = findMostRepeatedLetter(userString);
alert(result);