import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export const setAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const fetchTaskLists = async () => {
  const response = await api.get('/task_lists');
  return response.data;
};
