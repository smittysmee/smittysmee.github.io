import { User ***REMOVED*** from '../entities/User';
import { UserRepository ***REMOVED*** from '../repositories/UserRepository';

export class FetchUser {
  constructor(private userRepository: UserRepository) {***REMOVED***

  async execute(id: string): Promise<User> {
    return this.userRepository.fetchUser(id);
  ***REMOVED***
***REMOVED***
