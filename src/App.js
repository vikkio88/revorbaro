import React, { Component } from 'react';
import './App.css';
import { Commands, Bullet } from './components';

const INITIAL_STATE = {
  winner: null,
  player: {
    loaded: false
  },
  computer: {
    loaded: false
  }
};

class App extends Component {
  state = {
    winner: null,
    player: {
      loaded: false
    },
    computer: {
      loaded: false
    }
  };

  postAction(newState) {
    this.setState(newState);
  }

  render() {
    const { player, computer, winner } = this.state;
    return (
      <div className="App">
        <div className="App-intro">
          <div>
            <strong>You</strong>
            <Bullet loaded={player.loaded} />
          </div>
          <div>
            <strong>Enemy</strong>
            <Bullet loaded={computer.loaded} />
          </div>
          {
            !winner &&
            <Commands postAction={newState => this.postAction(newState)} player={player} computer={computer} />
          }

          {winner && (
            <div>
              <h1>{winner.toUpperCase()} Won</h1>
              <button onClick={() => this.setState(INITIAL_STATE)}>Restart</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
