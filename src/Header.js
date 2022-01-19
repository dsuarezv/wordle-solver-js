import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>WORDLE HELPER</h1>
            <div className='Hint'>
                <p>This little tool will help you find the best solution for the game Wordle by narrowing down the possible words that fit your current tries.</p>
            </div>
        </div>
    )
}

export default Header;