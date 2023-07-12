import PropTypes from 'prop-types';
import Header from '../components/Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>
      { children }
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
