import { useMemo } from 'react';

export const useSearchedUsers = (usersArr, query) =>
  useMemo(
    () =>
      usersArr.filter((user) =>
        user.name.trim().toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [usersArr, query],
  );

export const useUsers = (usersArr, controls) =>
  useSearchedUsers(usersArr, controls.search);
