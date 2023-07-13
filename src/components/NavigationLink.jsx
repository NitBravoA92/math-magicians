import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ title, route }) => {
  const activeStyle = ({ isActive, isPending }) => {
    if (isActive) return 'active';
    if (isPending) return 'pending';
    return null;
  };

  return (
    <li className="nav-item">
      <NavLink
        to={route}
        className={activeStyle}
      >
        {title}
      </NavLink>
    </li>
  );
};

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default NavigationLink;
