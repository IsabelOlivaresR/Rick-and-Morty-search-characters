import React from 'react';
import CharacterList from './CharacterList';
import Filter from './Filter';
import getDataFromApi from '../services/data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filterSearch: '',
    };
    this.getValueFromSearch = this.getValueFromSearch.bind(this);
  }
  componentDidMount() {
    getDataFromApi().then((responseData) => {
      this.setState({
        characters: responseData,
      });
    });
  }
  getValueFromSearch(ev) {
    console.log(ev);
    this.setState({ filterSearch: ev });
  }

  render() {
    console.log(this.state.characters);
    const Character = this.state.characters.filter((character) => {
      if (this.state.filterSearch !== '') {
        return character.name
          .toUpperCase()
          .includes(this.state.filterSearch.toUpperCase());
      } else {
        return true;
      }
    });
    return (
      <div>
        <Filter getValueFromSearch={this.getValueFromSearch} />
        <CharacterList list={Character} />
      </div>
    );
  }
}

export default App;
