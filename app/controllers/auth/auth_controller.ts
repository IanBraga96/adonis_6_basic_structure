import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { signUpValidator } from '#validators/auth/sign_up_and_sign_in_user'
import SignUpUseCase from '../../use_case/auth/sign_up_use_case.js'

@inject()
export default class AuthController {
  constructor(protected signUpUseCase: SignUpUseCase) {}

  async signUp({ request, response }: HttpContext) {
    const userDto = await request.validateUsing(signUpValidator)
    const data = await this.signUpUseCase.run(userDto)
    return response.created(data)
  }
}
