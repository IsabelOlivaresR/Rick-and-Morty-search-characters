import React from 'react';
import CharacterList from './CharacterList';
import Filter from './Filter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Filter />
        <CharacterList />
      </div>
    );
  }
}

export default App;
