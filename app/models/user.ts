import { DateTime } from 'luxon'
import { column } from '@adonisjs/lucid/orm'
import UuidBase from './base/uuid_base.js'
import hash from '@adonisjs/core/services/hash'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { compose } from '@adonisjs/core/helpers'
import { UserRole } from '../utils/enums.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(UuidBase, AuthFinder) {
  @column()
  declare name: string

  @column()
  declare email: string

  @column()
  declare password: string

  @column()
  declare role: UserRole

  @column()
  declare activationCode: string

  @column()
  declare activationCodeUsed: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  static authTokens = DbAccessTokensProvider.forModel(User)
}
