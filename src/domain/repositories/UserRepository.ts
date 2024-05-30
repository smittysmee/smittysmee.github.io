import { User } from '../entities/User';

export interface UserRepository {
  fetchUser(id: string): Promise<User>;
}
