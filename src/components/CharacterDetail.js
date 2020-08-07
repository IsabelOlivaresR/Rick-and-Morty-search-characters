import React from 'react';

class CharacterDetail extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='character_info'>
        <img
          className='character_img'
          src={this.props.image}
          alt={this.props.name}
        />
        <h2 className='character_name'>{this.props.name}</h2>
        <p className='character_species'>{this.props.species}</p>
        <p className='character_origin'>{this.props.origin.name}</p>
        <p className='character_episode'>{this.props.episode.length}</p>
        <p className='character_status'>{this.props.status}</p>
      </div>
    );
  }
}

export default CharacterDetail;
