import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReduce from './src/reducers/player';
import Scoreboard from './src/containers/Scoreboard';

const store = createStore(
  PlayerReduce
);

render(
  <Provider store={store}>
    <Scoreboard />
    </Provider>,
  document.getElementById('root')
);