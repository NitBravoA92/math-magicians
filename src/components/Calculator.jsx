import './Calculator.css';
import { NumberButton } from './NumberButton';
import { OperatorButton } from './OperatorButton';

export function Calculator() {
  return(
    <section id="calculator-app">
      <div className="display-result">
        <p className="previews-result"></p>
        <p className="final-result">0</p>
      </div>
      <div className="buttons-container">
        <OperatorButton name="AC" classes={['btn-gray']} />
        <OperatorButton name="+/-" classes={['btn-gray']} />
        <OperatorButton name="%" classes={['btn-gray']} />
        <OperatorButton name="÷" classes={['btn-orange']} />
        <NumberButton name="7" classes={['btn-gray']} />
        <NumberButton name="8" classes={['btn-gray']} />
        <NumberButton name="9" classes={['btn-gray']} />
        <OperatorButton name="x" classes={['btn-orange']} />
        <NumberButton name="4" classes={['btn-gray']} />
        <NumberButton name="5" classes={['btn-gray']} />
        <NumberButton name="6" classes={['btn-gray']} />
        <OperatorButton name="-" classes={['btn-orange']} />
        <NumberButton name="1" classes={['btn-gray']} />
        <NumberButton name="2" classes={['btn-gray']} />
        <NumberButton name="3" classes={['btn-gray']} />
        <OperatorButton name="+" classes={['btn-orange']} />
        <NumberButton name="0" classes={['btn-gray', 'btn-zero']} />
        <NumberButton name="." classes={['btn-gray']} />
        <OperatorButton name="=" classes={['btn-orange']} />
      </div>
    </section>
  );
}