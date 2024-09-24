import { inject } from '@adonisjs/core'
import UserRepository from '../../repository/user_repository.js'
import { CreateUserDto } from '../../dtos/user/create_user_dto.js'
import getAccessTokenAndId from '../../utils/functions/auth/get_access_token_and_id.js'
import ISignInResponse from '../../utils/interface/auth/sign_in_response.js'

@inject()
export default class SignUpUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async run(createUserDto: CreateUserDto): Promise<ISignInResponse> {
    const user = await this.userRepository.create(createUserDto)
    return await getAccessTokenAndId(user)
  }
}
