import React from 'react';

const MatchingWords = ({updated, data}) => {
    return (
        <div name="MatchingWords">
            <h1>MATCHING WORDS</h1>
            <div className='MatchingWordsWrapper'>
                {updated ? (
                    data.length === 0 ?
                        <p className="Nop">No words found matching your combination</p>
                        :
                        <>
                            <p>{data.length} words</p>
                            {data.map(word => word + ' ')}
                        </>
                    )
                    :
                    null
                }
            </div>
        </div>
    )
}

export default MatchingWords;