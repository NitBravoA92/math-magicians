import Layout from './Layout';
import CalculatorApp from '../components/CalculatorApp';
import '../styles/Calculator.css';

const Calculator = () => (
  <Layout>
    <section id="calculator">
      <h1 className="page-title">Let&apos;s do some math!</h1>
      <div className="page-content">
        <CalculatorApp />
      </div>
    </section>
  </Layout>
);

export default Calculator;
