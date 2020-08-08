import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
  const character = props.list.map((item, id) => {
    return (
      <li className='characterCard_container' key={item.id}>
        <Link to={`/character/${item.id}`}>
          <CharacterCard item={item} />
        </Link>
      </li>
    );
  });
  console.log(props);
  return (
    <div>
      {character.length !== 0 ? (
        <ul className='characters__container'>{character}</ul>
      ) : (
        <p className='searchAlert'>
          No hay ningún personaje que coincida con la palabra "
          {props.filterSearch}"
        </p>
      )}
      {/* <ul className='characters__container'>
        {character !== '' ? (
          [character]
        ) : (
          <p className='searchAlert'>
            No hay ningún personaje que coincida con la palabra "
            {props.filterSearch}"
          </p>
        )}
      </ul> */}
    </div>
  );
};
export default CharacterList;
