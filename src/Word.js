import React, { useState } from 'react';
import Char from './Char';

const Word = ({value, colors, onChange, rowNumber}) => {

    
    return (
        <div className="WordWrapper">
            <span className='RowIndex'>{rowNumber}</span>
            {[...value].map((cv, i) => <Char key={i} value={cv} color={colors[i]} row={rowNumber} column={i} onChange={onChange} />)}
        </div>
    )
}

export default Word;