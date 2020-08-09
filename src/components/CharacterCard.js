import React from 'react';
import Human from '../images/human.png';
import Alien from '../images/alien.png';
class CharacterCard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='characterCard'>
        <img
          className='characterCard__img'
          src={this.props.item.image}
          alt={this.props.item.name}
        />
        <h2 className='characterCard__name'>{this.props.item.name}</h2>
        <img
          className='characterCard__species'
          src={this.props.item.species === 'Human' ? [Human] : [Alien]}
          alt={this.props.item.species === 'Human' ? 'Human' : 'Alien'}
        />
      </div>
    );
  }
}

export default CharacterCard;
