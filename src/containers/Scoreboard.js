import React, {Component , PropTypes} from 'react';
import { bindActionCreators} from 'redux';

import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';

import Stopwatch from '../components/Stopwatch';
import Counter from '../components/Counter';
import Stats from '../components/Stats';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';


class Scoreboard extends Component {
  
  static propTypes ={
    players: PropTypes.array.isRequired
  };

  render(){

    const { dispatch, players} = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlaterScore, dispatch);

    const playerComponents = players.map((player, index) => (
        <Player
          index={index}
          name={player.name}
          score={player.score}
          key={player.name}
          updatePlaterScore={updatePlayerScore}
          removePlayer={removePlayer}
          />  
    ));

    return (
      <div className="scoreboard">
        <Header players={updatePlayerScore} />
        <div className="players">
            {playerComponents}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
};


const mapStateToProps = state => (
  {
    players: state
  }
);

//mapStateToProps = > transfer state to props
//Scoreboard = > Container we want to connect to Redux
export default connect(mapStateToProps)(Scoreboard);