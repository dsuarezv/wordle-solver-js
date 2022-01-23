import React from 'react';
import './LangSelect.css';

const LangSelect = ({value, onChange}) => {

    const langs = [ 'en', 'es' ];

    return (
        <div className='LangSelectWrapper'>
            {langs.map(lang => {
                return (
                    <span 
                        key={lang} 
                        className={'LangItem' + (lang === value ? ' Selected' : '')}
                        onClick={() => onChange(lang)}
                    >
                        {lang.toUpperCase()}
                    </span>
                )
            })}
        </div>
    )
}

export default LangSelect;