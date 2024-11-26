import { UsersRepository } from '@/repositories/interfaces/users-repository.interface'

export class ListAllGuestService {
  constructor(private usersRepository: UsersRepository) {}
  async execute() {
    return await this.usersRepository.listAll()
  }
}
