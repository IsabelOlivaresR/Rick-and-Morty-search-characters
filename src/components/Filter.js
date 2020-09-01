import React from 'react';
import Human from '../images/human.png';
import Alien from '../images/alien.png';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.getValueFromSearchChild = this.getValueFromSearchChild.bind(this);
    this.getOnlyHumanChild = this.getOnlyHumanChild.bind(this);
    this.getOnlyAlienChild = this.getOnlyAlienChild.bind(this);
  }
  getValueFromSearchChild(ev) {
    this.props.getValueFromSearch(ev.currentTarget.value);
  }
  getOnlyHumanChild(ev) {
    this.props.getOnlyHuman(ev);
  }
  getOnlyAlienChild(ev) {
    this.props.getOnlyAlien(ev);
  }

  render() {
    console.log(this.props);
    return (
      <form className='form' onSubmit={(event) => event.preventDefault()}>
        <input
          type='text'
          name='search'
          className='form__searchBar'
          placeholder='Summer Smith'
          value={this.props.filterSearch}
          onChange={this.getValueFromSearchChild}
        />
        <div>
          <label>
            <img className='filter_icons' src={Human} alt='Human' />
          </label>
          <input
            type='Checkbox'
            className='humanFilter'
            onChange={this.getOnlyHumanChild}
            checked={this.props.isHumanChecked}
          />
          <label>
            <img className='filter_icons' src={Alien} alt='Human' />
          </label>
          <input
            type='Checkbox'
            className='alienFilter'
            onChange={this.getOnlyAlienChild}
            checked={this.props.isAlienChecked}
          />
        </div>
      </form>
    );
  }
}

Filter.propTypes = {
  getValueFromSearch: PropTypes.func,
  filterSearch: PropTypes.string,
  getOnlyAlien: PropTypes.func,
  getOnlyHuman: PropTypes.func,
  isHumanChecked: PropTypes.bool,
  isAlienChecked: PropTypes.bool,
};

export default Filter;
