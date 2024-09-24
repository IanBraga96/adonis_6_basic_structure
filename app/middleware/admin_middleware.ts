import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { UserRole } from '../utils/enums.js'

export default class AdminMiddleware {
  async handle({ auth, response }: HttpContext, next: () => Promise<void>) {
    const user = (await auth.authenticate()) as unknown as User
    if (user.role !== UserRole.ADMIN) {
      return response.unauthorized({ message: 'Access denied' })
    }

    await next()
  }
}
