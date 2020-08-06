import React from 'react';

class Character extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='character_info'>
        <img
          className='character_img'
          src={this.props.item.image}
          alt={this.props.item.name}
        />
        <h2 className='character_name'>{this.props.item.name}</h2>
        <p className='character_species'>{this.props.item.species}</p>
      </div>
    );
  }
}

export default Character;
