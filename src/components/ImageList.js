import React from 'react'

import Image from './Image'

import './ImageList.css'



const ImageList = props => {
    return (
        <div className="image-list">
            {props.images.map((img, i) => {
                if(i === 0) {
                    return (<div key={i}>
                            <h5>{img.date.toLocaleDateString()}</h5>
                            <Image img={img.url} alt={img.date} onClick={() => props.show(i)} />
                            <hr />
                        </div>)
                } else {
                    return <div 
                        key={i}
                        className="image-thumb"
                        style={{
                            backgroundImage: `url("${img.url}")`,
                        }}
                        title={img.date}
                        onClick={() => props.show(i)}></div>
                }
            })}
        </div>);
};

export default ImageList;