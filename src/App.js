import React, { Component } from 'react';
import './App.css';
import { Commands } from './components';

class App extends Component {
  state = {
    winner: null,
    player: {
      loaded: false
    },
    computer: {
      loaded: false
    }
  }

  postAction(newState) {
    this.setState(newState);
  }

  render() {
    const { player, computer, winner } = this.state;
    return (
      <div className="App">
        <div className="App-intro">
          <h1>Your gun {player.loaded ? 'LOADED' : 'NOT LOADED'}</h1>
          <h1>His gun {computer.loaded ? 'LOADED' : 'NOT LOADED'}</h1>
          {
            !winner &&
            <Commands postAction={newState => this.postAction(newState)} player={player} computer={computer} />
          }

          {winner && <h1>{winner.toUpperCase()} Won</h1>}
        </div>
      </div>
    );
  }
}

export default App;
