import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
  const character = props.list.map((item, id) => {
    return (
      <li className='character_container' key={item.id}>
        <Character item={item} />
      </li>
    );
  });
  console.log(character);
  return (
    <div>
      <h1 className='page_title'>Mis series</h1>
      <ul className='character_info'>{character}</ul>
    </div>
  );
};
export default CharacterList;
