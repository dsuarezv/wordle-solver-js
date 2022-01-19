import './App.css';
import Word from './Word';
import Header from './Header';
import { useState } from 'react';


function App() {

    const handleChange = () => {

    }

    return (
        <div className="App">
            <Header />

            <Word rowNumber={0} value='PLANE' onChange={handleChange} />
            <Word rowNumber={0} value='SIGHT' onChange={handleChange} />
            <Word rowNumber={0} value='MONEY' onChange={handleChange} />
            <Word rowNumber={0} value='     ' onChange={handleChange} />
            <Word rowNumber={0} value='     ' onChange={handleChange} />
        </div>
    );
}

export default App;
