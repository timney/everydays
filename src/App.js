import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import './App.css';

import ImageList from './components/ImageList'
import ImageGrid from './components/ImageGrid'
import Show from './components/Show';
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      images: [],
      show: false,
      showImg: {}
    }
  }
  
  componentWillMount() {
    fetch('https://6juq6295f5.execute-api.eu-west-1.amazonaws.com/test')
      .then(res => res.json())
      .then(data => this.setState({ images: data }))
  }

  show(url) {
    this.setState({ show: true, showImg: url })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ offset: 3 }}>
            <header className="App-header">
              <h1 className="App-title">Everydays</h1>
            </header>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <ImageList images={this.state.images} show={e => this.show(e)} />
            <Show img={this.state.showImg} onClose={() => this.setState({ show: false, showImg: {} })} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
