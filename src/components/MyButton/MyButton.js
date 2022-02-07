import React from 'react';

const MyButton = ({children, changeText}) => {

    return <button onClick={() => changeText('Thank you')}>{children}</button>
}

export default MyButton;