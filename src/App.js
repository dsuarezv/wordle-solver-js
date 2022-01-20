import './App.css';
import Word from './Word';
import Header from './Header';
import { useState } from 'react';
import { adaptPuzzleState, getCandidates } from './Solver';
import { EnglishWordList } from './EnglishWordList';
import MatchingWords from './MatchingWords';


function App() {

    const [words, setWords]  = useState([ '     ', '     ', '     ', '     ', '     ', '     ' ]);
    const [colors, setColors] = useState([ [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5] ]);
    const [matchingWords, setMatchingWords] = useState([]);
    const [updated, setUpdated] = useState(false);
    

    const handleChange = (row, updatedWord, updatedColors) => {
        const newColors = [ ...colors];
        newColors[row] = updatedColors;
        setColors(newColors);

        const newWords = [ ...words];
        newWords[row] = updatedWord;
        setWords(newWords);
    }

    const handleUpdate = () => {
        const puzzleState = adaptPuzzleState(words, colors);
        const result = getCandidates(EnglishWordList, puzzleState);
        setMatchingWords(result);
        setUpdated(true);
    }

    return (
        <div className="App">
            <Header />

            {words.map((word, i) => <Word key={i} rowNumber={i} word={word} colors={colors[i]} onChange={handleChange} canEditWord={true} />)}

            <div className="UpdateWrapper">
                <button onClick={handleUpdate}>Update</button>
            </div>
            
            <MatchingWords updated={updated} data={matchingWords} />

            <h1>WORD SCORES</h1>
            <p className='Hint'>Top 20 word scores with the current char distribution.</p>
            <h1>LETTER STATS</h1>
            <p className='Hint'>A chart with the char distribution in the current wordlist.</p>
            <h1>REGEX MATCHES</h1>
            <p className='Hint'>Finally a textbox to enter a regex and filter the current wordlist.</p>
        </div>
    );
}

export default App;
