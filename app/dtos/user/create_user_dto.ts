import { UserRole } from '../../utils/enums.js'

export interface CreateUserDto {
  email: string
  password: string
  role: UserRole
}
