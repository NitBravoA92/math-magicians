import PropTypes from 'prop-types';

const NavigationLink = ({ title, route }) => (
  <li className="nav-item">
    <a href={route}>{title}</a>
  </li>
);

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default NavigationLink;
