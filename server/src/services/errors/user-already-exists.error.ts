export class UserAlreadyExists extends Error {
  constructor() {
    super('Esse usuário já existe')
  }
}
