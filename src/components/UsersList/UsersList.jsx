import PropTypes from 'prop-types';

import classes from './UsersList.module.css';
import { UserItem } from '../UserItem/UserItem';

export const UsersList = ({ users = [] }) => {
  return (
    <section className={classes.usersList}>
      <h2>Список пользователей:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserItem user={user} />
          </li>
        ))}
      </ul>
    </section>
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
