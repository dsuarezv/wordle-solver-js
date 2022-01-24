import React from 'react';
import { getCharFrequency, getWordScores } from './Scorer';
import Word from './Word';

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
                        <Word key={d.word} word={d.word} colors={[5, 5, 5, 5, 5]} />
                    )
                })}
            </div>
        </div>
    )
}

export default TopScoreWords;