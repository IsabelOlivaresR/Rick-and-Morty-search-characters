import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
  const character = props.list.map((item, id) => {
    return (
      <li className='character_container' key={item.id}>
        <Link to={`/character/${item.id}`}>
          <CharacterCard item={item} />
        </Link>
      </li>
    );
  });
  console.log(character);
  return (
    <div>
      <ul className='character_info'>{character}</ul>
    </div>
  );
};
export default CharacterList;
