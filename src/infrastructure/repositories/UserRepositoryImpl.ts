import { UserRepository ***REMOVED*** from '../../domain/repositories/UserRepository';
import { User ***REMOVED*** from '../../domain/entities/User';
import { fetchUserFromApi ***REMOVED*** from '../api/UserApi';

export class UserRepositoryImpl implements UserRepository {
  async fetchUser(id: string): Promise<User> {
    return fetchUserFromApi(id);
  ***REMOVED***
***REMOVED***
