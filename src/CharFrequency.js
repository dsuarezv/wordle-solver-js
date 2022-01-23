import React from 'react';
import { getCharFrequency, normalizeDict } from './Scorer';
import './CharFrequency.css';

const CharFrequency = ({wordList}) => {

    var stats = normalizeDict(getCharFrequency(wordList));

    return (
        <div className='CharFreqWrapper'>
            <h1>LETTER STATS</h1>
            <div className=''>
                {Object.keys(stats).map(c => {
                    return (
                        <p className='CharFreqItem' key={c}>
                            <span className='CharFreqChar' style={{width: '30px'}}>{c}: </span>
                            <span style={{display: 'inline-block', width: 'calc(100% - 30px)'}}>
                                <span className='CharFreqSize' style={{width: 'calc(' + stats[c] * 95 + '%)'}}></span>
                            </span>
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default CharFrequency;