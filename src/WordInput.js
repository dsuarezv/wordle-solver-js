import React, { useState } from 'react';
import Word from './Word';
import "./WordInput.css"


const WordInput = ({chars, colors, onCancel, onSave}) => {

    const [wordChars, setWordChars] = useState(chars);
    const [wordColors, setWordColors] = useState(colors);

    const handleSave = () => {
        onSave(word, wordColors);
    }

    const handleWordChange = (e) => {
        const newWord = e.target.value;
        if (newWord.length > 5) return;

        setWordChars([...newWord]);
    }

    const handleColorChange = (_, updatedWord, updatedColors) => {
        setWordColors(updatedColors);
    }

    const word = wordChars.join("");

    return (
        <div className="ModalBackground" onClick={onCancel}>
            <div className='ModalInput' onClick={e => e.stopPropagation()}>
                
                <input value={word} onChange={handleWordChange} />

                <Word word={word} colors={wordColors} onChange={handleColorChange} />

                <button onClick={handleSave}>OK</button>
            </div>
        </div>
    )
}

export default WordInput;