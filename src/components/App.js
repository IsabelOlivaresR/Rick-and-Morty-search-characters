import React from 'react';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import PageNotFound from './PageNotFound';
import Filter from './Filter';
import getDataFromApi from '../services/data';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filterSearch: '',
      isHumanChecked: false,
      isAlienChecked: false,
    };
    this.getValueFromSearch = this.getValueFromSearch.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.getOnlyHuman = this.getOnlyHuman.bind(this);
    this.getOnlyAlien = this.getOnlyAlien.bind(this);
  }
  componentDidMount() {
    getDataFromApi().then((responseData) => {
      this.setState({
        characters: responseData,
      });
    });
  }
  getValueFromSearch(ev) {
    this.setState({ filterSearch: ev });
  }
  getOnlyHuman(ev) {
    this.setState((prevState) => {
      return {
        isHumanChecked: !prevState.isHumanChecked,
      };
    });
  }
  getOnlyAlien(ev) {
    this.setState((prevState) => {
      return {
        isAlienChecked: !prevState.isAlienChecked,
      };
    });
  }

  renderCharacterDetail(props) {
    const routeCharacterId = props.match.params.id;
    const characterInfo = this.state.characters.find(
      (character) => character.id === parseInt(routeCharacterId)
    );
    if (characterInfo) {
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
    } else {
      return <PageNotFound />;
    }
  }
  render() {
    const Character = this.state.characters
      .filter((character) => {
        if (this.state.filterSearch !== '') {
          return character.name
            .toUpperCase()
            .includes(this.state.filterSearch.toUpperCase());
        } else {
          return true;
        }
      })
      .filter((character) => {
        if (this.state.isHumanChecked === true) {
          return character.species.includes('Human');
        } else {
          return true;
        }
      })
      .filter((character) => {
        if (this.state.isAlienChecked === true) {
          return character.species.includes('Alien');
        } else {
          return true;
        }
      });

    return (
      <div>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Filter
              getValueFromSearch={this.getValueFromSearch}
              filterSearch={this.state.filterSearch}
              getOnlyHuman={this.getOnlyHuman}
              isHumanChecked={this.state.isHumanChecked}
              getOnlyAlien={this.getOnlyAlien}
              isAlienChecked={this.state.isAlienChecked}
            />
            <CharacterList
              list={Character}
              filterSearch={this.state.filterSearch}
            />
          </Route>
          <Route path='/character/:id' render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
