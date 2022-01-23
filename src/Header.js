import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='Hint'>
                <p>This little tool will help you find the best solution for the game Wordle by narrowing down the possible words that fit your current tries.</p>
                <p>You can't play the game here, but you can get the list of words that fit in your Wordle game.</p>
                <p>Edit each word tapping on it. A dialog will open where you can type the word and set the colors as in the Wordle app. Go ahead and tap the first row.</p>
            </div>
        </div>
    )
}

export default Header;