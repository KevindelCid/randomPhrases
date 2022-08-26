import React, { useState } from 'react';
import Button from './Button';
import phrases from '../phrases.json'
import colors from '../colors.json'





const Card = () => {


    const randomIndex = Math.floor(Math.random()*phrases.length)
    const randomColor = Math.floor(Math.random()*colors.length)
    const defaultColor = colors[randomColor].hex

const [randIndex, setRandIndex] = useState(randomIndex)
const [randColor, setRandColor] = useState(defaultColor)
document.body.style = "backGround: " + randColor



const makeRandNumber = () => {

    const random = Math.floor(Math.random()*phrases.length)
    const color = Math.floor(Math.random()*colors.length)
    setRandColor(colors[color].hex)
    document.body.style = "backGround: " + colors[color].hex

    setRandIndex(random) 

}








    return (
        <div className='card-container'>
            <p style={{color: randColor}} ><i className="fa-solid fa-quote-left"></i> {phrases[randIndex].quote}</p>
            <div style={{color: randColor}} className="section-name-button">
                <b className='author'>{phrases[randIndex].author}</b>
            <Button randColor={randColor}  randNumber={makeRandNumber}  />
            </div>
            
        </div>
    );
};

export default Card;