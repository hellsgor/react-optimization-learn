import PropTypes from 'prop-types';

import classes from './Users.module.css';
import { UsersList } from '../UsersList/UsersList';
import { Counter } from '../Counter/Counter';

export const Users = ({ users = [] }) => {
  return (
    <section className={classes.users}>
      <h2>Список пользователей:</h2>

      {/* <div className={classes.filter}>
        <input type="text" value={controls.filter} />
        <input type="text" value={controls.sort} />
      </div> */}

      <UsersList users={users} />

      <Counter value={users.length} text={'Всего пользователей:'} />
    </section>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      isActive: PropTypes.bool,
      id: PropTypes.number.isRequired,
    }),
  ),
};
