import { User ***REMOVED*** from '../entities/User';

export interface UserRepository {
  fetchUser(id: string): Promise<User>;
***REMOVED***
