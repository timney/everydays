import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import './App.css';

import ImageList from './components/ImageList'
import ImageGrid from './components/ImageGrid'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      images: []
    }
  }
  
  componentWillMount() {
    fetch('https://6juq6295f5.execute-api.eu-west-1.amazonaws.com/test')
      .then(res => res.json())
      .then(data => this.setState({ images: data }))
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ offset: 2 }}>
            <header className="App-header">
              <h1 className="App-title">Everydays</h1>
            </header>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 6, offset: 2 }}>
            <ImageList images={this.state.images} />
          </Col>
          <Col md={{ size: 2 }}>
            <ImageGrid images={this.state.images} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
