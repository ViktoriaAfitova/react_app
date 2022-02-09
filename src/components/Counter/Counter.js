import React from 'react';
import { useState } from 'react';
import MyButton from '../MyButton/MyButton';
import div from './counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1)
  }
  const dec = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h2>Current count: {count}</h2>

        <MyButton action={inc}>+</MyButton>
        <MyButton action={dec}>-</MyButton>
    </div>
  )
}

export default Counter;
