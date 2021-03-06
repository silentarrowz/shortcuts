import React, { Component } from 'react';
import { Shortcuts } from 'react-shortcuts';
import Login from './Login';
import logo from './logo.svg';
import './App.css';


export default class MainApp extends Component{
	constructor(){
		super();
        this.state={
            color:'',
            size:'36px'
        }
   this.handleKeys = this.handleKeys.bind(this);		

	}

	handleKeys(action, event) {
    switch (action) {
      case 'CHANGE_COLOR':
        this.setState({ color: 'red' });
        break;
      case 'CHANGE_BACK':
        this.setState({ color: '' });
        break;
      case 'CHANGE_FONT_SIZE':
        this.setState({ size: '36px' });
        break;
      case 'CHANGE_FONT_BACK':
        this.setState({ size: '24px' });
        break;
      case 'SHOW_MODAL':
       // this.setState({ showModal: true });
        break;
      case 'HIDE_MODAL':
        //this.props.hideLockFunc();
        break;
      }

    }
 

	render(){
        const divStyle = {
            color:this.state.color,
            fontSize:this.state.size
        };
		return(
            <Shortcuts
            name="MAIN"
            handler={this.handleKeys}
          >
			 <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" style={divStyle} >
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Login/>
      </div>
      </Shortcuts>
      );
	}
}