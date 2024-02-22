import { UserRole } from "../../../database/entity/User"

interface IUserDto {
  firstName: string,
  lastName: string,
  cro: string,
  email: string,
  password: string,
  role: UserRole
}

export { IUserDto }