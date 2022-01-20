import React, { useEffect, useRef, useState } from 'react';
import Word from './Word';
import "./WordInput.css"


const WordInput = ({chars, colors, onCancel, onSave}) => {

    const [wordChars, setWordChars] = useState(chars);
    const [wordColors, setWordColors] = useState(colors);
    const [wordError, setWordError] = useState(null);
    const [colorError, setColorError] = useState(null);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleSave = () => {
        // Validate word
        if (word.length < 5) {
            setWordError("The word must be exactly 5 letters long");
            return;
        }
        else if (word.includes(' ')) {
            setWordError("Spaces are not allowed");
            return;
        }
        else {
            setWordError(null);
        }

        // Validate colors
        let validColor = true;
        wordColors.forEach(c => {
            if (c > 2) validColor = false;
        });

        if (!validColor) {
            setColorError("You have to set a color for each letter by tapping it.");
            return;
        }
        else {
            setColorError(null);
        }

        // If valid, save
        onSave(word, wordColors);
    }

    const handleWordChange = (e) => {
        const newWord = e.target.value;
        if (newWord.length > 5) return;

        //if (newWord.match(/[ 0-9]/g)) return;

        setWordChars([...newWord]);
    }

    const handleColorChange = (_, __, updatedColors) => {
        setWordColors(updatedColors);
    }

    const word = wordChars.join("");

    return (
        <div className="ModalBackground" onClick={onCancel}>
            <div className='ModalInput' onClick={e => e.stopPropagation()}>
                <p className="Hint">First, enter the word you used in Wordle in this box.</p>
                {wordError && <p className="InputError">{wordError}</p>}

                <input ref={inputRef} className="WordInput" value={word} onChange={handleWordChange} />
                
                <p className="Hint">Now, tap on each letter to change the colors until it matches the colors in Wordle:</p>
                {colorError && <p className="InputError">{colorError}</p>}
                <Word word={word} colors={wordColors} onChange={handleColorChange} />

                <p className="Hint">When it looks good, hit OK</p>
                <button onClick={handleSave}>OK</button>
            </div>
        </div>
    )
}

export default WordInput; 