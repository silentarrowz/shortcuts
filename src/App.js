import React, { Component } from 'react';
import { ShortcutManager } from 'react-shortcuts';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import MainApp from './MainApp';

const keymap = {
  MAIN: {
    CHANGE_COLOR: 'a',
    CHANGE_BACK: 'b',
    CHANGE_FONT_SIZE: 'up',
    CHANGE_FONT_BACK: 'down',
    SHOW_MODAL: 'esc',
   // HIDE_MODAL: 'ctrl',
  },
};

const shortcutManager = new ShortcutManager(keymap);


class App extends Component {
  getChildContext() {
    return { shortcuts: shortcutManager };
  }
  render() {
    return (
      <div className="App">
       <MainApp/>
      </div>
    );
  }
}

App.childContextTypes = {
  shortcuts: PropTypes.object.isRequired,
};

export default App;
