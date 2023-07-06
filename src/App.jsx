import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './App.css';

function App() {
  return (
    <>
      <h1>Math Magicians</h1>
      <div className="App">
        <Calculator />
        <Quote />
      </div>
    </>
  );
}

export default App;
