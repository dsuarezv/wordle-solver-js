import React, { useState } from 'react';
import Char from './Char';

const Word = ({value, onChange, rowNumber}) => {

    
    const [charColors, setCharColors] = useState([ 0, 1, 2, 1, 2]);

    const handleChange = (row, column, value, color) => {
        let newColors = [...charColors];
        newColors[column] = color;
        setCharColors(newColors);

        onChange(row, column, value, color);
    }

    return (
        <div className="WordWrapper">
            {[...value].map((cv, i) => <Char key={i} value={cv} color={charColors[i]} row={rowNumber} column={i} onChange={handleChange} />)}
        </div>
    )
}

export default Word;