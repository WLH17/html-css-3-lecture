import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleDropdown: false
    }
  }

  handleToggle = () => {
    this.setState({toggleDropdown: !this.state.toggleDropdown})
  }

  render(){
    return (
      <div className="App">
        <header className='main-header'>
          <img src='https://ih1.redbubble.net/image.495915585.0747/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg' alt='handsome squidward' className='header-logo'/>
          {this.state.toggleDropdown
          ? (
            <>
              <span className='dropdown-toggle' onClick={this.handleToggle}>X</span>
              <nav className='mobile-links'>
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
              </nav>
            </>
          )
          : (
            <span className='dropdown-toggle' onClick={this.handleToggle}>X</span>
          )
          }
          <nav className='header-links'>
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </nav>
        </header>
        <img src={logo} alt='react.js logo' className='react-logo'/>
      </div>
    )
  }
}

export default App;
