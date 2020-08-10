import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
  const character = props.list
    .sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    .map((item, id) => {
      return (
        <li className='characterCard_container' key={item.id}>
          <Link to={`/character/${item.id}`}>
            <CharacterCard item={item} />
          </Link>
        </li>
      );
    });

  return (
    <div>
      {character.length !== 0 ? (
        <ul className='characters__container'>{character}</ul>
      ) : (
        <p className='searchAlert'>
          There are no characters matching the search term "{props.filterSearch}
          "
        </p>
      )}
    </div>
  );
};
export default CharacterList;
