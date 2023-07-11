import mathLogo from '../mathLogo.gif';

const Logo = () => (
  <a href="/" className="logo-container">
    <img src={mathLogo} className="App-logo" alt="logo" />
    <span className="logo-title">Math Magicians</span>
  </a>
);

export default Logo;
