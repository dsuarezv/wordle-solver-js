import React from 'react';

const Char = ({ value, color, column, onColorChange, onEdit }) => {

    const handleClick = () => {
        if (onEdit) {
            onEdit();
            return;
        }
        
        const newColor = (color < 2) ? color + 1 : 0;
        if (onColorChange) onColorChange(column, newColor);
    }

    return (
        <div className={'CharWrapper Color' + color} onClick={handleClick}>
            <span className={"Char"} >{value}</span>
        </div>
    )
}


export default Char;