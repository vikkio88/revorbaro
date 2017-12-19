import React, { Component } from 'react';
import { Commands, Bullet, LastAction } from './components';
import './App.css';
import restart from './assets/next.svg';

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
    games: 0,
    rounds: 1,
    won: 0,
    lost: 0,
    context: {
      winner: null,
      player: {
        loaded: false
      },
      computer: {
        loaded: false
      }
    }
  };

  resetGame() {
    let { won, lost, games, context } = this.state;
    games += 1;
    if (context.winner === "player") {
      won += 1;
    } else {
      lost += 1;
    }

    this.setState({
      context: INITIAL_STATE,
      games,
      rounds: 1,
      won,
      lost
    });
  }
  postAction(newState) {
    this.setState({ context: newState, rounds: this.state.rounds + 1 });
  }

  render() {
    const { player, computer, winner } = this.state.context;
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
        <div className="round-counter">
          <h1>Round: {this.state.rounds}</h1>
          <h3>Games Played: {this.state.games}</h3>
          <strong>Games Won: {this.state.won}</strong>
          <strong>Games Lost: {this.state.lost}</strong>
        </div>
        <div className="controls">
          {
            !winner &&
            <Commands postAction={newState => this.postAction(newState)} player={player} computer={computer} />
          }

          {winner && (
            <div className="winner">
              <h1>{winner.toUpperCase()} Won</h1>
              <button className="action-button" onClick={() => this.resetGame()}>
                <img className="icon" src={restart} alt="Restart" />
                <span>Restart</span>
              </button>
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
