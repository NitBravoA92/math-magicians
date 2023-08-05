import NavigationLink from './NavigationLink';

const Navigation = () => (
  <nav>
    <ul id="menu">
      <NavigationLink title="Home" route="/" key={1} />
      <NavigationLink title="Calculator" route="/calculator" key={2} />
      <NavigationLink title="Quote" route="/quote" key={3} />
    </ul>
  </nav>
);

export default Navigation;
