import axios from 'axios';
import { User } from '../../domain/entities/User';

export const fetchUserFromApi = async (id: string): Promise<User> => {
  const response = await axios.get<User>(`/api/users/${id}`);
  return response.data;
};
