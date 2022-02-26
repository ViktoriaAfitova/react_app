import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container'>
        <h1>Page not found</h1>
        <NavLink to='/' className="btn btn-primary">back to home</NavLink>
    </div>
  )
}

export default NotFound