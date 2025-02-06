import classes from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ children }) => {
  return <button className={classes.button}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.element,
};
