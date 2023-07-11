import NavigationLink from './NavigationLink';
import routesList from '../routes/routesList';

const Navigation = () => {
  
  return (
    <nav>
      <ul id="menu">
        {
          routesList.map((link, index) => <NavigationLink { ...link } key={index + 1} />)
        }
      </ul>
    </nav>
  );
}

export default Navigation;