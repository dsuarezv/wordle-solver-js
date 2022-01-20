import React from 'react';

const MatchingWords = ({updated, data}) => {
    return (
        <>
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
                    <p>Press the "Update" button above to generate the list of words that match your criteria.</p>
                }
            </div>
        </>
    )
}

export default MatchingWords;