import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../images/NotFound.jpg';

class PageNotFound extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='PNF_container'>
        <div className='pageNotFound'>
          <p className='errorMessage'>404 NOT FOUND</p>
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
          <p className='pageNotFound__alert'>"This character doesn't exist".</p>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
