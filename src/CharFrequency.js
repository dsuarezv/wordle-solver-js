import React from 'react';
import { getCharFrequency, normalizeDict } from './Scorer';
import './CharFrequency.css';
import { getColorForFreq } from './TopScoreWords';

const CharFrequency = ({wordList}) => {

    if (!wordList || wordList.length === 0) return null;

    var stats = normalizeDict(getCharFrequency(wordList));

    return (
        <div className='CharFreqWrapper'>
            <h1>LETTER STATS</h1>
            <div className=''>
                {Object.keys(stats).map(c => {
                    const freq = stats[c];
                    return (
                        <p className='CharFreqItem' key={c}>
                            <span className='CharFreqChar' style={{width: '30px'}}>{c}: </span>
                            <span style={{display: 'inline-block', width: 'calc(100% - 30px)'}}>
                                <span className={'CharFreqSize Color' + getColorForFreq(freq)} style={{width: 'calc(' + freq * 95 + '%)'}}></span>
                            </span>
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default CharFrequency;