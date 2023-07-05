import PropTypes from 'prop-types';

const NumberButton = ({ name, classes, interactivity }) => (<button type="button" onClick={ () => interactivity(name) } className={`btn ${classes.join(' ')}`}>{ name }</button>);

NumberButton.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.arrayOf(PropTypes.string).isRequired,
  interactivity: PropTypes.func.isRequired,
};

export default NumberButton;
