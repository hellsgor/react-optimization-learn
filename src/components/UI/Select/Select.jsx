import { getClassNames } from '../../../helpers/getClassNames';
import PropTypes from 'prop-types';

import classes from './Select.module.css';
import controlClasses from '../Control/Control.module.css';

export const Select = ({ label, options, ...restProps }) => {
  return (
    <label className={getClassNames(classes.select, controlClasses.control)}>
      {label && <span>{label}</span>}
      <div className={classes.inner}>
        <select {...restProps}>
          {options.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};
