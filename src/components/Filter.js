import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.getValueFromSearchChild = this.getValueFromSearchChild.bind(this);
  }
  getValueFromSearchChild(ev) {
    this.props.getValueFromSearch(ev.currentTarget.value);
  }

  render() {
    return (
      <form className='form' onSubmit={(event) => event.preventDefault()}>
        <input
          type='text'
          name='search'
          className='form__searchBar'
          placeholder='Introduce un personaje'
          value={this.props.filterSearch}
          onChange={this.getValueFromSearchChild}
        />
      </form>
    );
  }
}

export default Filter;
