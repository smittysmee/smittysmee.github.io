import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class FetchUser {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string): Promise<User> {
    return this.userRepository.fetchUser(id);
  }
}
