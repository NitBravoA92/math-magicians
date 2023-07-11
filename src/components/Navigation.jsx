import NavigationLink from './NavigationLink';
import routesList from '../routes/routesList';

const Navigation = () => (
  <nav>
    <ul id="menu">
      {
        routesList.map(({ index, title, route }) => (
          <NavigationLink title={title} route={route} key={index} />
        ))
      }
    </ul>
  </nav>
);

export default Navigation;
