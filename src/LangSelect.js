import React from 'react';
import './LangSelect.css';

import EN from './en.png';
import ES from './es.png';

const LangSelect = ({value, onChange}) => {

    const langs = [ 'en', 'es' ];
    const imgs = {
        'en': EN,
        'es': ES
    }

    return (
        <div className='LangSelectWrapper'>
            {langs.map(lang => {
                return (
                    <img 
                        key={lang}
                        src={imgs[lang]}
                        className={'LangItem' + (lang === value ? ' Selected' : '')}
                        onClick={() => onChange(lang)}
                        alt={lang}
                    />
                )
            })}
        </div>
    )
}

export default LangSelect;