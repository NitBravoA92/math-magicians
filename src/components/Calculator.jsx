import { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';
import CalculatorButton from './CalculatorButton';

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
      <CalculatorButton name="AC" classes={['btn-gray']} />
      <CalculatorButton name="+/-" classes={['btn-gray']} />
      <CalculatorButton name="%" classes={['btn-gray']} />
      <CalculatorButton name="÷" classes={['btn-orange']} />
      <CalculatorButton name="7" classes={['btn-gray']} />
      <CalculatorButton name="8" classes={['btn-gray']} />
      <CalculatorButton name="9" classes={['btn-gray']} />
      <CalculatorButton name="x" classes={['btn-orange']} />
      <CalculatorButton name="4" classes={['btn-gray']} />
      <CalculatorButton name="5" classes={['btn-gray']} />
      <CalculatorButton name="6" classes={['btn-gray']} />
      <CalculatorButton name="-" classes={['btn-orange']} />
      <CalculatorButton name="1" classes={['btn-gray']} />
      <CalculatorButton name="2" classes={['btn-gray']} />
      <CalculatorButton name="3" classes={['btn-gray']} />
      <CalculatorButton name="+" classes={['btn-orange']} />
      <CalculatorButton name="0" classes={['btn-gray', 'btn-zero']} />
      <CalculatorButton name="." classes={['btn-gray']} />
      <CalculatorButton name="=" classes={['btn-orange']} />
    </div>
  </section>
)};

export default Calculator;
