import { UserRole } from '../../utils/enums.js'

export interface SignInDto {
  email: string
  password: string
  role: UserRole
}
