import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>WORDLE HELPER</h1>
            <div className='Hint'>
                <p>This little tool will help you find the best solution for the game Wordle by narrowing down the possible words that fit your current tries.</p>
                <p>Enter each word tapping the + button. Tap each letter in the word to set the color to match the color in the game (grey the letter is not in the word, yellow the letter is the word, but in a different place, and green the letter is in the right place). Just replcate the colors in the Wordle app.</p>
            </div>
        </div>
    )
}

export default Header;