import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {

};

function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {



    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color_box') || 'deeppink';
        return initColor;
    });




    function handleBoxClick() {
        // get a random color --> set color
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('color_box', newColor);
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >

        </div>
    );
}

export default ColorBox;