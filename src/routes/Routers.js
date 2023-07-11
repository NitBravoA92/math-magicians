import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Quote from '../pages/Quote';

const Routers = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/calculator',
      element: <Calculator />,
    },
    {
      path: '/quote',
      element: <Quote />,
    },
  ]);

  return router;
};

export default Routers;
