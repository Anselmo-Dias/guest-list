import { UsersRepository } from '@/repositories/interfaces/users-repository.interface'
import { ResourceNotFound } from '../errors/resource-not-found.error'

interface DeleteGuestServiceRequest {
  id: string
}

export class DeleteGuestService {
  constructor(private usersRepository: UsersRepository) {}
  async execute({ id }: DeleteGuestServiceRequest) {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new ResourceNotFound()
    }

    return await this.usersRepository.delete(id)
  }
}
