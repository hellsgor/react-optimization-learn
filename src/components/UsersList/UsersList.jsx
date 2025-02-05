import PropTypes from 'prop-types';
import classes from './UsersList.module.css';
import { UserItem } from '../UserItem/UserItem';

export const UsersList = ({ users }) => {
  return (
    <ul className={classes.usersList}>
      {users.map((user) => (
        <li key={user.id}>
          <UserItem user={user} />
        </li>
      ))}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      isActive: PropTypes.bool,
      id: PropTypes.number.isRequired,
    }),
  ),
};
