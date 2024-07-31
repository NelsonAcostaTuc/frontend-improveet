'use client';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getAllUsers } from '../redux/actions/userActions';

const Page: React.FC = () => {
  const dispatch = useAppDispatch();
  const { allUsers, loading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {allUsers.map((user) => (
          <li key={user.email}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
