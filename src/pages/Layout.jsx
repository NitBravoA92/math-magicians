import Header from '../components/Header';
const Layout = ({ children }) => (
  <>
    <Header />
    <main>
      { children }
    </main>
  </>
);

export default Layout;