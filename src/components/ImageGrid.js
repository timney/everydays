import React from 'react';

import './ImageGrid.css'

const ImageGrid = props => {
    return (
        <div className="image-grid">
            {props.images.map(img => (<div style={{
                backgroundImage: `url("${img.url}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}></div>))}
        </div>
    );
};

export default ImageGrid;