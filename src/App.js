import React, { Component } from 'react';
import './App.css';
import { Commands, Bullet, LastAction } from './components';

const INITIAL_STATE = {
  winner: null,
  player: {
    loaded: false,
    lastAction: null,
  },
  computer: {
    loaded: false,
    lastAction: null
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
        <div
          className="playerStatus"
          style={winner && winner === 'computer' ? styles.loser : []}
        >
          <strong>You</strong>
          <Bullet loaded={player.loaded} />
          <LastAction action={player.lastAction} />
        </div>
        <div
          className="playerStatus"
          style={winner && winner === 'player' ? styles.loser : []}
        >
          <strong>Enemy</strong>
          <Bullet loaded={computer.loaded} />
          <LastAction action={computer.lastAction} />
        </div>
        <div className="controls">
          {
            !winner &&
            <Commands postAction={newState => this.postAction(newState)} player={player} computer={computer} />
          }

          {winner && (
            <div>
              <strong>{winner.toUpperCase()} Won</strong>
              <button onClick={() => this.setState(INITIAL_STATE)}>Restart</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}


const styles = {
  loser: {
    backgroundColor: 'red',
    color: 'white'
  }
}

export default App;
