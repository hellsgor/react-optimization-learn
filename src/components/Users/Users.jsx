import PropTypes from 'prop-types';

import classes from './Users.module.css';
import { Input } from '../UI/Input/Input';
import { UsersList } from '../UsersList/UsersList';
import { Counter } from '../Counter/Counter';
import { useState } from 'react';
import { useUsers } from '../../hooks/useUsers';

export const Users = ({ users = [] }) => {
  const [controls, setControls] = useState({ search: '', sort: '' });

  const handledUsers = useUsers(users, controls);

  return (
    <section className={classes.users}>
      <h2>Список пользователей:</h2>

      <div className={classes.controls}>
        <div className={classes.controlsWrapper}>
          <Input
            label={'Search:'}
            value={controls.search}
            onChange={(e) =>
              setControls({ ...controls, search: e.target.value })
            }
          />
        </div>
        <hr />
      </div>

      <UsersList users={handledUsers} />

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
