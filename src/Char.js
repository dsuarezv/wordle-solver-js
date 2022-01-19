import React from 'react';



const Char = ({ value, color, row, column, onChange }) => {

    const handleChange = () => {
        if (onChange) onChange(row, column, value, color);
    }

    const handleClick = () => {
        // cycle colors
        if (color < 2)
            color++
        else 
            color = 0;

        // and notify change
        handleChange(row, column, value, color);
    }

    return (
        <div className={'CharWrapper Color' + color}>
            <span className={"Char"} onClick={handleClick}>{value}</span>
        </div>
    )
}


export default Char;