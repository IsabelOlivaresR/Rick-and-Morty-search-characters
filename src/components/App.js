import React from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filter from './Filter';
import getDataFromApi from '../services/data';
import { Route, Switch } from 'react-router-dom';
import Logo from '../images/Rick_and_Morty_-_logo_(English).png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filterSearch: '',
    };
    this.getValueFromSearch = this.getValueFromSearch.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
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
  renderCharacterDetail(props) {
    console.log(props);
    const routeCharacterId = props.match.params.id;
    const characterInfo = this.state.characters.find(
      (character) => character.id === parseInt(routeCharacterId)
    );
    console.log(characterInfo);
    return (
      <CharacterDetail
        name={characterInfo.name}
        image={characterInfo.image}
        species={characterInfo.species}
        origin={characterInfo.origin}
        episode={characterInfo.episode}
        status={characterInfo.status}
      />
    );
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
        <img className='character_img' src={Logo} alt='Rick and Morty' />
        <Filter
          getValueFromSearch={this.getValueFromSearch}
          filterSearch={this.state.filterSearch}
        />
        <Switch>
          <Route exact path='/'>
            <CharacterList list={Character} />
          </Route>
          <Route path='/character/:id' render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
