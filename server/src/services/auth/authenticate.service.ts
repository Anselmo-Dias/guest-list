import { KeyWordRepository } from '@/repositories/interfaces/key-word-repository'
import { KeyWord } from '@prisma/client'
import { UnauthorizedError } from '../errors/unauthorized.error'

interface AuthenticateServiceRequest {
  keyWord: string
}

interface AuthenticateServiceResponse {
  key: KeyWord
}

export class AuthenticateService {
  constructor(private keyWordRepository: KeyWordRepository) {}

  async execute({
    keyWord,
  }: AuthenticateServiceRequest): Promise<AuthenticateServiceResponse> {
    const keysWord = await this.keyWordRepository.findAll()

    const key = keysWord.find((item) => item.name === keyWord)

    if (!key) {
      throw new UnauthorizedError()
    }

    return { key }
  }
}
