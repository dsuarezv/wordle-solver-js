function getUniqueOtherChars(otherChars) {
    var res = [];

    otherChars.forEach(oc => {
        oc.forEach(c => {
            if (!res.includes(c)) res.push(c);
        });
    });

    return res;
}

function getNumberOfChars(chars) {
    var result = 0;
    
    chars.forEach(c => { if (c > ' ') result++; });

    return result;
}

export function getCandidates(wordList, puzzleState) {

    let result = [];

    var uniqueOtherChars = getUniqueOtherChars(puzzleState.otherChars);
    var numKnownChars = getNumberOfChars(puzzleState.knownChars);
    var numUniqueOtherChars = uniqueOtherChars.length;

    wordList.forEach(word => {
        let numExacMatches = 0;
        let numOtherChars = 0;
        var discarded = false;

        for (let i = 0; i < word.length; i++) {

            var k = puzzleState.knownChars[i];
            var w = word[i];

            if (puzzleState.rejects.includes(w)) {
                discarded = true;
                break;
            }

            if (k > ' ' && w == k) {
                numExacMatches++;
            }

            var otherCharsForPosition = puzzleState.otherChars[i];
            if (otherCharsForPosition.includes(w)) {
                discarded = true;
            }

            if (uniqueOtherChars.includes(w)) {
                numOtherChars++;
            }
        }

        if (!discarded && numExacMatches === numKnownChars && numOtherChars >= numUniqueOtherChars) {
            result.push(word);
        }
    });

    return result;
}


// const samplePuzzleState = {
//     knownChars: [ ' ', ' ', 'i', 'n', ' ' ],
//     otherChars: [
//         [ 't' ],
//         [ 'n' ],
//         [  ],
//         [ 'i', 't' ],
//         [  ]
//     ],
//     rejects: [ 'a', 'e', 'r', 's', 'h', 'g' ]
// }


export function adaptPuzzleState(words, colors) {
    // Adapts the input from the UI in the form of words and colors to the input required by the solver
    var result = {
        knownChars: [ ' ', ' ', ' ', ' ', ' ' ],
        otherChars: [
            [  ],
            [  ],
            [  ],
            [  ],
            [  ]
        ],
        rejects: [  ]
    }

    for (let row = 0; row < words.length; ++row) {
        const word = words[row].toLowerCase();
        if (!word || word === '     ' || !colors || colors.length !== words.length) continue;

        const wordColors = colors[row];

        for (let col = 0; col < wordColors.length; ++col) {
            const color = wordColors[col];
            const char = word[col];
            if (char === ' ') continue;

            switch (color) 
            {
                case 0: // Reject
                    result.rejects.push(char);
                    break;
                case 1: // yellow, otherChar letter present but on a different column
                    result.otherChars[col].push(char);
                    break;
                case 2: // green: known char, letter present in that column
                    result.knownChars[col] = char;
                    break;
                default: 
                    break;
            }
        }
    }

    // Remove knownChars from otherChars
    result.otherChars = result.otherChars.map(otherChars => {
        let res = [];
        otherChars.forEach(oc => {
            if (!result.knownChars.includes(oc)) res.push(oc);
        });
        return res;
    });

    // Remove otherChars from reject chars
    const uniqueOtherChars = getUniqueOtherChars(result.otherChars);
    const newRejects = [];
    result.rejects.forEach(r => { if (!uniqueOtherChars.includes(r) && !result.knownChars.includes(r)) newRejects.push(r); });
    result.rejects = newRejects;

    return result;
}