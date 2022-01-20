import React, { useState } from 'react';
import Char from './Char';
import WordInput from './WordInput';

const Word = ({word, colors, onChange, rowNumber, canEditWord}) => {

    // This is used in the main UI to display the words and colors, as well as entering edit mode.
    // In the edit dialog it's used to change the colors of each char.
    
    const [editVisible, setEditVisible] = useState(false);

    const handleChange = (column, updatedColor) => {
        const updatedCharColors = [...colors];
        updatedCharColors[column] = updatedColor;

        onChange(rowNumber, word, updatedCharColors);
    }

    const handleClick = (e) => {
        if (canEditWord) {
            setEditVisible(true);
        }
    }

    const handleEditSave = (word, updatedColors) => {
        onChange(rowNumber, word, updatedColors);
        setEditVisible(false);
    }

    const handleEditCancel = () => {
        setEditVisible(false);
    }

    return (
        <>
            <div className="WordWrapper">
                {[...word].map((cv, i) => <Char key={i} value={cv} color={colors[i]} row={rowNumber} column={i} onColorChange={handleChange} onEdit={canEditWord ? handleClick : null} />)}
            </div>
            {editVisible && <WordInput onCancel={handleEditCancel} onSave={handleEditSave} chars={[...word]} colors={colors} />}
        </>
    )
}

export default Word;