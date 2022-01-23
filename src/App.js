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
import CharFrequency from './CharFrequency';
import TopScoreWords from './TopScoreWords';

ReactGA.initialize(process.env.REACT_APP_GA_ID); 
ReactGA.pageview("index");

const wordlists = {
    'es': SpanishWordList,
    'en': EnglishWordList
}

const InitialWords = [ '     ', '     ', '     ', '     ', '     ', '     ' ];
const InitialColors = [ [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5] ];

function App() {

    const [words, setWords]  = useState(InitialWords);
    const [colors, setColors] = useState(InitialColors);
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
        animateScroll.scroller.scrollTo("TopScores");
        ReactGA.event({category: "interaction", action: "update" });
    }

    const handleLangChange = (lang) => {
        setLang(lang);
        
        // reset status when changing language
        setWords(InitialWords);
        setColors(InitialColors);
    }

    return (
        <div className="App">
            <h1>WORDLE HELPER</h1>

            <LangSelect value={lang} onChange={handleLangChange} />

            <Header />

            {words.map((word, i) => <Word key={i} rowNumber={i} word={word} colors={colors[i]} onChange={handleChange} canEditWord={true} />)}

            <div className="UpdateWrapper">
                <button onClick={handleUpdate}>Update</button>
            </div>
            
            <TopScoreWords wordList={matchingWords} />

            <CharFrequency wordList={matchingWords} />

            <MatchingWords updated={updated} data={matchingWords} />

            {/* <h1>WORD SCORES</h1>
            <p className='Hint'>Top 20 word scores with the current char distribution.</p>
            
            
            
            <h1>REGEX MATCHES</h1>
            <p className='Hint'>Finally a textbox to enter a regex and filter the current wordlist.</p> */}

            <Footer />
        </div>
    );
}

export default App;
