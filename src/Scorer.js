export function getCharFrequency(wordList) {
    const res = {};
    for (let i = 97; i <= 122; ++i) {
        res[String.fromCharCode(i)] = 0;
    }

    wordList.forEach(word => {
        [...word].forEach(c => res[c] += 1);
    });
    
    return res;
}

export function normalizeDict(dict) {
    let max = 0;
    Object.keys(dict).forEach(k => {
        if (dict[k] > max) max = dict[k];
    });

    const res = {}
    Object.keys(dict).forEach(k => res[k] = dict[k] / max);
    return res;
}


function getUniqueChars(wordChars) {
    let res = 0;
    for (let i = 0; i < wordChars.length; ++i) {
        let found = false;
        for (let j = 0; j < i; ++j) {
            if (wordChars[i] === wordChars[j]) found = true;
        }
        if (!found) res++;
    }
    
    return res;
}


export function getWordScores(wordList, charFrequencies) {
    // Strategy: get word score based on char freqency, and multiple by number of unique chars. 
    // Words with more unique chars score higher than words with high frequency but repeated chars.
    const result = wordList.map(word => {
        const wordChars = [...word];
        const unique = getUniqueChars(wordChars);
        const freqScore = wordChars.reduce((prev, current) => {
            return prev + charFrequencies[current];
        }, 0);

        return {
            word, 
            unique,
            freqScore
        }
    });

    return result.sort((a, b) => {
        if (a.unique === b.unique) return b.freqScore - a.freqScore;
        return b.unique - a.unique;
    } );
}