import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import './App.css';

import ImageList from './components/ImageList'
import ImageGrid from './components/ImageGrid'
import Show from './components/Show';

const parseDates = img => {
  return { ...img, date: new Date(img.date) }
};

const sortByNewest = (a, b) => b.date - a.date;

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      images: [],
      show: false,
      imgIndex: null,
    }
  }
  
  componentWillMount() {
    fetch('https://6juq6295f5.execute-api.eu-west-1.amazonaws.com/test')
      .then(res => res.json())
      .then(data => this.setState({ images: data.map(parseDates).sort(sortByNewest) }))
  }

  show(imgIndex) {
    this.setState({ show: true, imgIndex })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ offset: 3 }}>
            <header className="App-header">
              <h1 className="App-title">Everydays</h1>
              {this.state.images.length === 0 && <h3>...just not today</h3>}
            </header>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <ImageList images={this.state.images} show={i => this.show(i)} />
            <Show 
              images={this.state.images}
              imgIndex={this.state.imgIndex} 
              onClose={() => this.setState({ show: false, imgIndex: null })} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
