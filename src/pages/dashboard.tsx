import React, { useEffect, useState } from 'react';
import TaskListGrid from '../components/TaskListGrid';

const Dashboard: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  if (!token) {
    return <div>Please log in to view your task lists.</div>;
  }

  return (
    <div>
      <h1>Your Task Lists</h1>
      <TaskListGrid />
    </div>
  );
};

export default Dashboard;
