import { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';
import NumberButton from './NumberButton';

const Calculator = () => {

  const initialData = {
    total: '0',
    next: null,
    operation: null,
  };

  const [dataObj, setDataObj] = useState(initialData);

  const operations = (buttonName) => {
    const calOperation = calculate(dataObj, buttonName);
    setDataObj(calOperation);
  };

  return(
  <section id="calculator-app">
    <div className="display-result">
      <p className="previews-result"></p>
      <p className="final-result"></p>
    </div>
    <div className="buttons-container">
      <NumberButton name="AC" classes={['btn-gray']} />
      <NumberButton name="+/-" classes={['btn-gray']} />
      <NumberButton name="%" classes={['btn-gray']} />
      <NumberButton name="÷" classes={['btn-orange']} />
      <NumberButton name="7" classes={['btn-gray']} />
      <NumberButton name="8" classes={['btn-gray']} />
      <NumberButton name="9" classes={['btn-gray']} />
      <NumberButton name="x" classes={['btn-orange']} />
      <NumberButton name="4" classes={['btn-gray']} />
      <NumberButton name="5" classes={['btn-gray']} />
      <NumberButton name="6" classes={['btn-gray']} />
      <NumberButton name="-" classes={['btn-orange']} />
      <NumberButton name="1" classes={['btn-gray']} />
      <NumberButton name="2" classes={['btn-gray']} />
      <NumberButton name="3" classes={['btn-gray']} />
      <NumberButton name="+" classes={['btn-orange']} />
      <NumberButton name="0" classes={['btn-gray', 'btn-zero']} />
      <NumberButton name="." classes={['btn-gray']} />
      <NumberButton name="=" classes={['btn-orange']} />
    </div>
  </section>
)};

export default Calculator;
