export interface User {
  name: string;
  email: string;
}

export interface UserState {
  allUsers: User[];
  loading: boolean;
  error: string | null;
}
