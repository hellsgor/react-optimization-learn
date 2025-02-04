import PropTypes from 'prop-types';

import classes from './UsersList.module.css';

export const UsersList = ({ users = [] }) => {
  return (
    <div className={classes.usersList}>
      <h1>Список пользователей:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}, {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
