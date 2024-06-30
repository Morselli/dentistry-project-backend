import { User } from "../../../database/entity/User";
import { IUserDto } from "./user.dto";
import { UserRepository } from "./user.repository";


export class UserService {

  private static userRepository = UserRepository

  async create({ firstName, lastName, cro, email, password, role }: IUserDto): Promise<User> {

    if(!email) {
      throw new Error('E-mail is required')
    }

    if(!password) {
      throw new Error('Password is required')
    }

    const userExists = await UserService.userRepository.findOneBy({
      email
    })

    if(userExists) {
      throw new Error('Already exists an user with this e-mail')
    }

    const user = UserService.userRepository.create({
      first_name: firstName,
      last_name: lastName,
      cro,
      email,
      password,
      role
    })

    await UserService.userRepository.save(user)

    return user
  }

  async updateById(id: number, { firstName, lastName, cro, email, password, role }: IUserDto): Promise<User> {

    const user = await UserService.userRepository.findOneBy({
      id
    })

    if(!user) {
      throw new Error('User not found')
    }

    await UserService.userRepository.update(id, {
      first_name: firstName,
      last_name: lastName,
      cro,
      email,
      password,
      role
    })

    const updatedUser = await UserService.userRepository.findOneBy({
      id
    })

    return updatedUser
  }

  async removeById(id: number): Promise<void> {

    const user = await UserService.userRepository.findOneBy({
      id
    })

    if(!user) {
      throw new Error('User not found')
    }

    await UserService.userRepository.delete(id)
  }

  async findById(id: number): Promise<User> {

    const user = await UserService.userRepository.findOneBy({
      id
    })

    if(!user) {
      throw new Error('User not found')
    }

    return user
  }

  async findAll(): Promise<User[]> {

    const users = await UserService.userRepository.find()

    if(!users) {
      throw new Error('Users not found')
    }

    return users
  }
}