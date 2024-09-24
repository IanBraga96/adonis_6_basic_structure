import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { signUpValidator } from '#validators/auth/sign_up_and_sign_in_user'
import SignUpUseCase from '../../use_case/auth/sign_up_use_case.js'
import SignInUseCase from '../../use_case/auth/sign_in_use_case.js'
import { signInValidator } from '#validators/auth/sign_up_and_sign_in_user'

@inject()
export default class AuthController {
  constructor(
    protected signUpUseCase: SignUpUseCase,
    protected signInUseCase: SignInUseCase
  ) {}

  async signUp({ request, response }: HttpContext) {
    const userDto = await request.validateUsing(signUpValidator)
    const data = await this.signUpUseCase.run(userDto)
    return response.created(data)
  }

  async signIn({ request, response }: HttpContext) {
    const signInDto = await request.validateUsing(signInValidator)
    const data = await this.signInUseCase.run(signInDto)
    return response.ok(data)
  }
}
