import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
  const character = props.list.map((item, id) => {
    return <Character />;
  });

  return <div></div>;
};
export default CharacterList;
