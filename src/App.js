import React, { Component } from 'react';
import { resolveActions, ATTACK, DEFEND, RELOAD } from './lib';
import logo from './logo.svg';
import './App.css';

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
  render() {
    const { player, computer, winner } = this.state;
    return (
      <div className="App">
        <div className="App-intro">
          <h1>Your gun {player.loaded ? 'LOADED' : 'NOT LOADED'}</h1>
          <h1>His gun {computer.loaded ? 'LOADED' : 'NOT LOADED'}</h1>
          {
            !winner &&
            (
              <div>
                <button disabled={!player.loaded} onClick={() => this.setState(resolveActions(ATTACK, { player, computer }))}>Shoot</button>
                <button onClick={() => this.setState(resolveActions(RELOAD, { player, computer }))}>Reload</button>
                <button onClick={() => this.setState(resolveActions(DEFEND, { player, computer }))}>Dodge</button>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
