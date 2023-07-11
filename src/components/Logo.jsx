import mathLogo from '../mathLogo.gif';
const Logo = () => (
  <a href='/' id="logo-container">
    <img src={mathLogo} className="App-logo" alt="logo" />
    <span id="main-title">Math Magicians</span>
  </a>
);

export default Logo;