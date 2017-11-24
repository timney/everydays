import React from 'react';

import './ImageGrid.css'

const ImageGrid = props => {
    return (
        <div className="image-grid">
            {props.images.map(img => (<div>
                    <img src={img.url} />
            </div>))}
        </div>
    );
};

export default ImageGrid;