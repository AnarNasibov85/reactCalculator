import { useState } from 'react';
import * as math from 'mathjs';

import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const addToText = (val) => {
    setText((prev) => [...prev, val + ' ']);
  };

  const calculateResult = () => {
    const input = text.join('');
    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText('');
    setResult('');
  };

  return (
    <div className='App'>
      <div className='calc-wrapper'>
        <Input
          text={text}
          result={result}
        />
        <div className='row'>
          <Button
            symbol='7'
            handleClick={addToText}
          />
          <Button
            symbol='8'
            handleClick={addToText}
          />
          <Button
            symbol='9'
            handleClick={addToText}
          />
          <Button
            symbol='/'
            color='#ff5722'
            handleClick={addToText}
          />
        </div>
        <div className='row'>
          <Button
            symbol='4'
            handleClick={addToText}
          />
          <Button
            symbol='5'
            handleClick={addToText}
          />
          <Button
            symbol='6'
            handleClick={addToText}
          />
          <Button
            symbol='*'
            color='#ffc107'
            handleClick={addToText}
          />
        </div>
        <div className='row'>
          <Button
            symbol='1'
            handleClick={addToText}
          />
          <Button
            symbol='2'
            handleClick={addToText}
          />
          <Button
            symbol='3'
            handleClick={addToText}
          />
          <Button
            symbol='+'
            color='#8bc34a'
            handleClick={addToText}
          />
        </div>
        <div className='row'>
          <Button
            symbol='0'
            handleClick={addToText}
          />
          <Button
            symbol='.'
            handleClick={addToText}
          />
          <Button
            symbol='='
            handleClick={calculateResult}
          />
          <Button
            symbol='-'
            color='#607d8b'
            handleClick={addToText}
          />
        </div>
        <Button
          symbol={'C'}
          type='clear'
          color='red'
          handleClick={resetInput}
        />
      </div>
    </div>
  );
}

export default App;
