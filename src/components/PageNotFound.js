import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../images/NotFound.jpg';

class PageNotFound extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='PNF_container'>
        <div className='pageNotFound'>
          <Link to={'/'}>
            <span className='pageNotFound__return'>
              <i className='fas fa-long-arrow-alt-left'></i> Back
            </span>
          </Link>
          <img
            className='pageNotFound__img'
            src={NotFound}
            alt='Page not found'
          />
          <p className='pageNotFound__alert'>
            "El personaje que buscas no existe".
          </p>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
