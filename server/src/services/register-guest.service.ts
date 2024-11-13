import {
  ICreate as IRegisterGuestRequest,
  UsersRepository,
} from '@/repositories/interfaces/users-repository.interface'

export class RegisterGuestService {
  constructor(private usersRepository: UsersRepository) {}

  async execute(data: IRegisterGuestRequest) {
    await this.usersRepository.create(data)
  }
}
