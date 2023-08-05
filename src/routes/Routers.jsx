import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Quote from '../pages/Quote';

const Routers = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="calculator" element={<Calculator />} />
    <Route path="quote" element={<Quote />} />
  </Routes>
);

export default Routers;
