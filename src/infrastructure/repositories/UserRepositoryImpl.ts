import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';
import { fetchUserFromApi } from '../api/UserApi';

export class UserRepositoryImpl implements UserRepository {
  async fetchUser(id: string): Promise<User> {
    return fetchUserFromApi(id);
  }
}
