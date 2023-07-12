import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const linkStatus = ({ isActive, isPending }) => {
  if (isPending) return 'pending';
  if (isActive) return 'active';
  return '';
};

const NavigationLink = ({ title, route }) => (
  <li className="nav-item">
    <NavLink to={route} className={linkStatus}>{title}</NavLink>
  </li>
);

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default NavigationLink;
