import PropTypes from 'prop-types';

const NumberButton = ({ name, classes }) => (<button type="button" className={`btn ${classes.join(' ')}`}>{ name }</button>);

NumberButton.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NumberButton;
