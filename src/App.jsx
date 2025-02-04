import './App.css';

import { useState } from 'react';
import { setId } from './helpers/setId';
import { UsersList } from './components/UsersList/UsersList';
import { defaultUsers } from './data/users';

export default function App() {
  const [users] = useState(
    defaultUsers.map((user) => ({ ...user, id: setId() })),
  );

  return (
    <>
      {users.length ? (
        <UsersList users={users} />
      ) : (
        <p>Пользователи не найдены :(</p>
      )}
    </>
  );
}
