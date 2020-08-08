import React from 'react';
import Logo from '../images/Rick_and_Morty_-_logo_(English).png';

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='header'>
        <img className='header__img' src={Logo} alt='Rick and Morty' />
      </div>
    );
  }
}

export default Header;
