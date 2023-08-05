import { useState } from 'react';
import calculate from '../logic/calculate';
import CalculatorButton from './CalculatorButton';

const CalculatorApp = () => {
  const initialData = {
    total: null,
    next: '0',
    operation: null,
  };

  const [dataObj, setDataObj] = useState(initialData);

  const operations = (buttonName) => {
    const calOperation = calculate(dataObj, buttonName);
    setDataObj(calOperation);
  };

  return (
    <section id="calculator-app">
      <div className="display-result">
        <p className="final-result">{`${dataObj.total || ''} ${dataObj.operation || ''} ${dataObj.next || ''} `}</p>
      </div>
      <div className="buttons-container">
        <CalculatorButton name="AC" classes={['btn-gray']} interactivity={operations} />
        <CalculatorButton name="+/-" classes={['btn-gray']} interactivity={operations} />
        <CalculatorButton name="%" classes={['btn-gray']} interactivity={operations} />
        <CalculatorButton name="÷" classes={['btn-orange']} interactivity={operations} />
        <CalculatorButton name="7" classes={['btn-gray']} interactivity={operations} />
        <CalculatorButton name="8" classes={['btn-gray']} interactivity={operations} />
        <CalculatorButton name="9" classes={['btn-gray']} interactivity={operations} />
        <CalculatorButton name="x" classes={['btn-orange']} interactivity={operations} />
        <CalculatorButton name="4" classes={['btn-gray']} interactivity={operations} />
        <CalculatorButton name="5" classes={['btn-gray']} interactivity={operations} />
        <CalculatorButton name="6" classes={['btn-gray']} interactivity={operations} />
        <CalculatorButton name="-" classes={['btn-orange']} interactivity={operations} />
        <CalculatorButton name="1" classes={['btn-gray']} interactivity={operations} />
        <CalculatorButton name="2" classes={['btn-gray']} interactivity={operations} />
        <CalculatorButton name="3" classes={['btn-gray']} interactivity={operations} />
        <CalculatorButton name="+" classes={['btn-orange']} interactivity={operations} />
        <CalculatorButton name="0" classes={['btn-gray', 'btn-zero']} interactivity={operations} />
        <CalculatorButton name="." classes={['btn-gray']} interactivity={operations} />
        <CalculatorButton name="=" classes={['btn-orange']} interactivity={operations} />
      </div>
    </section>
  );
};

export default CalculatorApp;
