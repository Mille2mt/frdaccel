import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
  }
  
  showMenu = e => {
    e.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div>
        <h3 className='brandLogo six columns'>FRD Accel</h3>
        <button className='menuButton six columns' onClick={this.showMenu}>
          Menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <a href="/" class="nav-link">About us</a>
                <a href="/" class="nav-link">Some other option</a>
                <a href="/" class="nav-link">A third option</a>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}



export default Dropdown;