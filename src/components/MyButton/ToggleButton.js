import React from 'react';

const ToggleButton = ({toggle, setToggle, children}) => {
  return <button onClick={() => setToggle(!toggle)}>{children}</button>;
}

export default ToggleButton;

// rfce