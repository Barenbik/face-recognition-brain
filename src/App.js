import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import React, { Component } from 'react';
import Clarifai from 'clarifai';

window.process = {
  env: {
    NODE_ENV: 'development',
  },
};

const app = new Clarifai.App({
  apiKey: '7ac92ca01b3e4c2a83b698faa1473171',
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict(Clarifai.FACE_DETECT_MODEL, 'https://i.insider.com/5d321d4ea209d3146d650b4a?width=1100&format=jpeg&auto=webp').then({
      function(response) {
        console.log(response);
      },
    });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
