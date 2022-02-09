import React from 'react';
import button from './toggleBtn.css';

const ToggleButton = ({toggle, setToggle, children}) => {
  return (
  <button
      className={toggle ? 'button-teal' : 'button-pink'}
      onClick={() => setToggle(!toggle)}
      > {children}
      </button>
  )
}

export default ToggleButton;

// rfce