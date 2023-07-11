import PropTypes from 'prop-types';

const NavigationLink = ({ title, route }) => (
  <li>
    <a href={route} className="nav-link">{title}</a>
  </li>
);

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default NavigationLink;
