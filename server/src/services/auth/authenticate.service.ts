import { KeywordRepository } from '@/repositories/interfaces/keyword-repository'
import { Keyword } from '@prisma/client'
import { UnauthorizedError } from '../errors/unauthorized.error'

interface AuthenticateServiceRequest {
  keyword: string
}

interface AuthenticateServiceResponse {
  key: Keyword
}

export class AuthenticateService {
  constructor(private keyWordRepository: KeywordRepository) {}

  async execute({
    keyword,
  }: AuthenticateServiceRequest): Promise<AuthenticateServiceResponse> {
    const key = await this.keyWordRepository.findByName(keyword)

    if (!key) {
      throw new UnauthorizedError()
    }

    return { key }
  }
}
