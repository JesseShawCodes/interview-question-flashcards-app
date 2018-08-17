import React, { Component } from 'react';
import './App.css';
import questionsData from './data/questions.json'

import Questionanswerpanel from './components/questionpanel.js'

import Button from '@material-ui/core/Button';

// import FacebookLogin from 'react-facebook-login';
/*
const responseFacebook = (response) => {
  console.log(response);
}
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.floor(Math.random() * questionsData.length)
    };
    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber() {
    this.setState({number: Math.floor(Math.random() * questionsData.length)})
  }

  renderQuestionAndAnswer() {
    return (
      <Questionanswerpanel  
        title={Object.keys(questionsData[this.state.number])}
        answer={Object.values(questionsData[this.state.number])}
      />
    )
  }
  componentClicked() {
    console.log("You clicked the Facebook Component");
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Interview Questions</h1>
        </header>
        <div>
          {this.renderQuestionAndAnswer()}
        </div>
        <Button variant="contained" color="secondary" onClick={this.updateNumber}>
          New Question
        </Button>
      </div>
    );
  }
}

export default App;
