import React from 'react';
import Logo from '../images/Rick_and_Morty_-_logo_(English).png';
import Spaceship from '../images/spaceship.png';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header__animation'>
          <img
            className='header__animation__img'
            src={Spaceship}
            alt='spaceship'
          />
        </div>
        <img className='header__img' src={Logo} alt='Rick and Morty' />
      </div>
    );
  }
}

export default Header;
