import React from 'react';

import './Image.css'

const Image = props => {
    return (
        <img src={props.img} 
            className="ed-img" 
            alt={props.alt}
            onClick={props.onClick} />
    );
};

export default Image;