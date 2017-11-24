import React from 'react'

import Image from './Image'

import './ImageList.css'

const formatDate = date => new Date(date).toLocaleDateString()

const ImageList = props => {
    return (
        <div className="image-list">
            {props.images.map(img => (
                <div>
                    <h5>{formatDate(img.date)}</h5>
                    <Image img={img.url} />
                    <hr />
                </div>
            ))}
        </div>);
};

export default ImageList;