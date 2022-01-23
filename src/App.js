import './App.css';
import Word from './Word';
import Header from './Header';
import { useState } from 'react';
import { adaptPuzzleState, getCandidates } from './Solver';
import { EnglishWordListWordle as EnglishWordList } from './EnglishWordListWordle';
import { SpanishWordList as SpanishWordList } from './SpanishWordList';
import MatchingWords from './MatchingWords';
import Footer from './Footer';
import animateScroll from 'react-scroll';
import ReactGA from 'react-ga4';
import LangSelect from './LangSelect';

ReactGA.initialize(process.env.REACT_APP_GA_ID); 
ReactGA.pageview("index");

const wordlists = {
    'es': SpanishWordList,
    'en': EnglishWordList
}

function App() {

    const [words, setWords]  = useState([ '     ', '     ', '     ', '     ', '     ', '     ' ]);
    const [colors, setColors] = useState([ [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5] ]);
    const [matchingWords, setMatchingWords] = useState([]);
    const [updated, setUpdated] = useState(false);
    const [lang, setLang] = useState('en');


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
        const result = getCandidates(wordlists[lang], puzzleState);
        setMatchingWords(result);
        setUpdated(true);
        animateScroll.scroller.scrollTo("MatchingWords");
        ReactGA.event({category: "interaction", action: "update" });
    }

    const handleLangChange = (lang) => {
        setLang(lang);
        // reset status when changing language
    }

    return (
        <div className="App">
            <Header />

            <LangSelect value={lang} onChange={handleLangChange} />

            {words.map((word, i) => <Word key={i} rowNumber={i} word={word} colors={colors[i]} onChange={handleChange} canEditWord={true} />)}

            <div className="UpdateWrapper">
                <button onClick={handleUpdate}>Update</button>
            </div>
            
            <MatchingWords updated={updated} data={matchingWords} />

            {/* <h1>WORD SCORES</h1>
            <p className='Hint'>Top 20 word scores with the current char distribution.</p>
            <h1>LETTER STATS</h1>
            <p className='Hint'>A chart with the char distribution in the current wordlist.</p>
            <h1>REGEX MATCHES</h1>
            <p className='Hint'>Finally a textbox to enter a regex and filter the current wordlist.</p> */}

            <Footer />
        </div>
    );
}

export default App;
