import React, { Component } from 'react';

import Lightbox from 'react-image-lightbox';


class Show extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current: props.imgIndex
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if(this.props.imgIndex !== nextProps.imgIndex) {
            this.setState({ current: nextProps.imgIndex })
        }
    }

    moveNext(){
        if(this.props.images[this.state.current+1]) {
            this.setState({ current: this.state.current + 1})
        }
    }

    movePrev() {
        if (this.props.images[this.state.current-1]) {
            this.setState({ current: this.state.current - 1})
        }
    }

    render() {
        const { images, onClose } = this.props;
        const { current } = this.state;
        if((images && !images.length) || !Number.isInteger(current)) return null;

        return  <Lightbox
            mainSrc={images[current].url}
            imageTitle={images[current].date.toLocaleDateString()}        
            onCloseRequest={onClose}
            nextSrc={images[current+1] && images[current+1].url}
            prevSrc={images[current-1] && images[current-1].url}
            onMovePrevRequest={() => this.movePrev()}
            onMoveNextRequest={() => this.moveNext()} />;
    }
}

export default Show;