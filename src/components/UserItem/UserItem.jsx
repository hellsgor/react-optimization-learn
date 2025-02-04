import classes from './UserItem.module.css';
import PropTypes from 'prop-types';

export const UserItem = ({ user }) => {
  const classesArr = [classes.userItem];
  user.isActive && classesArr.push(classes.active);

  return (
    <div className={classesArr.join(' ')} data-user-id={user.id}>
      <p>
        <strong>{user.name}</strong>, <span>{user.age}</span>
      </p>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isActive: PropTypes.bool,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
