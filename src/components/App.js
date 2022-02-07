import MyButton from "./MyButton/MyButton";
import  { useState } from 'react';
import ToggleButton from "./MyButton/ToggleButton";

const App = () => {
  const [buttonText, setButtonText] = useState('click me');
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <MyButton changeText={setButtonText}>{buttonText}</MyButton>
      <ToggleButton toggle={toggle} setToggle={setToggle}>{toggle ? 'One' : 'Two'}</ToggleButton>
    </div>
  );
}

export default App;
