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
      <form>
        <label>Busca un personaje</label>
        <input
          type='text'
          name='search'
          className='search-bar'
          placeholder='Introduce un personaje'
          onChange={this.getValueFromSearchChild}
        />
      </form>
    );
  }
}

export default Filter;
