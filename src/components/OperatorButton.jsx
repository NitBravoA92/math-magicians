import PropTypes from 'prop-types';

const OperatorButton = ({ name, classes }) => (<button type="button" className={`btn ${classes.join(' ')}`}>{ name }</button>);

OperatorButton.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OperatorButton;
