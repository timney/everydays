import React from 'react'
import Lightbox from 'react-image-lightbox';

import Image from './Image'

import './ImageList.css'

const parseDates = img => {
    return { ...img, date: new Date(img.date) }
};

const sortByNewest = (a, b) => b.date - a.date;

const ImageList = props => {
    return (
        <div className="image-list">
            {props.images.map(parseDates).sort(sortByNewest).map((img, i) => {
                if(i === 0) {
                return (<div key={i}>
                            <h5>{img.date.toLocaleDateString()}</h5>
                            <Image img={img.url} alt={img.date} />
                            <hr />
                        </div>)
                } else {
                    return <div 
                    key={i}
                    style={{
                        backgroundImage: `url("${img.url}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        margin: '5px',
                        width: '100px',
                        height: '100px',
                        display: 'inline-block',
                        borderRadius: '3px'
                    }}
                    title={img.date}
                    onClick={() => props.show(img)}></div>
                }
            })}
        </div>);
};

export default ImageList;