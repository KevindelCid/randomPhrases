import React from 'react';

const Button = ({randNumber, randColor}) => {
    return (
        <div>
            <button className='btn-phrase' style={{backgroundColor: randColor}} onClick={randNumber}><i className="fa-solid fa-angle-right"></i></button>
        </div>
    );
};

export default Button;