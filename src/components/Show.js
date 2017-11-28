import React from 'react';
import Lightbox from 'react-image-lightbox';

const Show = props => {
    if(props.img && !props.img.url) return null;

    return  <Lightbox
        mainSrc={props.img.url}
        imageTitle={props.img.date.toLocaleDateString()}        
        onCloseRequest={props.onClose} />;
};

export default Show;