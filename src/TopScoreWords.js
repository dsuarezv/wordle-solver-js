import React from 'react';
import { getCharFrequency, getWordScores } from './Scorer';
import Word from './Word';


export function getColorForFreq(charFreq) {
    const tenth = Math.round(charFreq * 10);
    return 100 + tenth;
}

function getColorsFromFreqs(charFreqs) {
    return charFreqs.map(cf => getColorForFreq(cf));
}

const TopScoreWords = ({wordList}) => {

    if (!wordList || wordList.length === 0) return null;

    const charFreqs = getCharFrequency(wordList);
    let scores = getWordScores(wordList, charFreqs);
    scores = scores.slice(0, 10);
    

    return (
        <div name="TopScores" className='TopScoreWrapper'>
            <h1>TOP SUGGESTIONS</h1>
            <div className='TopScores'>
                {scores.map(d => {
                    return (
                        <Word key={d.word} word={d.word} colors={getColorsFromFreqs(d.charFreqs)} />
                    )
                })}
            </div>
        </div>
    )
}

export default TopScoreWords;