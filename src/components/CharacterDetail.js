import React from 'react';
import { Link } from 'react-router-dom';
import Human from '../images/human.png';
import Alien from '../images/alien.png';
import Dead from '../images/rip.png';

class CharacterDetail extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='character_container'>
        <Link to={'/'}>
          <span className='pageNotFound__return'>
            <i className='fas fa-long-arrow-alt-left'></i> Back
          </span>
        </Link>
        <div className='characterDetail'>
          <img
            className='characterDetail__img'
            src={this.props.image}
            alt={this.props.name}
          />
          <h2 className='characterDetail__name'>{this.props.name}</h2>
          <img
            className='characterDetail__icon'
            src={this.props.species === 'Human' ? [Human] : [Alien]}
            alt='holi'
          />
          <p className='characterDetail__paragraph'>
            Origin: {this.props.origin.name}
          </p>
          <p className='characterDetail__paragraph'>
            Episodes: {this.props.episode.length}
          </p>
          {this.props.status === 'Dead' ? (
            <img className='ripIcon' src={Dead} alt='dead' />
          ) : (
            <p className='characterDetail__paragraph'>
              Status: {this.props.status}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default CharacterDetail;
