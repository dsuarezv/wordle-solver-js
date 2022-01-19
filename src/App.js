import './App.css';
import Word from './Word';
import Header from './Header';
import { useState } from 'react';
import { adaptPuzzleState, getCandidates } from './Solver';
import { EnglishWordList } from './EnglishWordList';






function App() {

    const [words, setWords]  = useState([ 'AERIE', 'SNITS', 'THING', '     ', '     ', '     ' ]);
    //const [colors, setColors] = useState([ [0, 0, 0, 1, 0], [0, 1, 2, 1, 0], [1, 0, 2, 2, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0] ]);
    const [colors, setColors] = useState([ [0, 0, 0, 1, 0], [0, 1, 2, 1, 0], [1, 0, 2, 2, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0] ]);
    const [matchingWords, setMatchingWords] = useState([]);

    const handleChange = (row, column, value, color) => {
        var newColors = [ [...colors[0]], [...colors[1]], [...colors[2]], [...colors[3]], [...colors[4]], [...colors[5]]]
        newColors[row - 1][column] = color;
        setColors(newColors);
    }

    const handleUpdate = () => {
        const puzzleState = adaptPuzzleState(words, colors);
        const result = getCandidates(EnglishWordList, puzzleState);
        setMatchingWords(result);
    }

    return (
        <div className="App">
            <Header />

            <Word rowNumber={1} value={words[0]} colors={colors[0]} onChange={handleChange} />
            <Word rowNumber={2} value={words[1]} colors={colors[1]} onChange={handleChange} />
            <Word rowNumber={3} value={words[2]} colors={colors[2]} onChange={handleChange} />
            <Word rowNumber={4} value={words[3]} colors={colors[3]} onChange={handleChange} />
            <Word rowNumber={5} value={words[4]} colors={colors[4]} onChange={handleChange} />
            <Word rowNumber={6} value={words[5]} colors={colors[5]} onChange={handleChange} />

            <div className="UpdateWrapper">
                <button onClick={handleUpdate}>Update</button>
            </div>

            
            <h1>MATCHING WORDS</h1>
            <div className='MatchingWordsWrapper'>
                {matchingWords.map(word => <span key={word} className='MatchingWord'>{word} </span>)}
            </div>
            
            <h1>WORD STATS</h1>
            <p className='Hint'>Top 20 word scores with the current char distribution.</p>
            <h1>LETTER STATS</h1>
            <p className='Hint'>A chart with the char distribution in the current wordlist.</p>
            <h1>REGEX MATCHES</h1>
            <p className='Hint'>Finally a textbox to enter a regex and filter the current wordlist.</p>
        </div>
    );
}

export default App;
