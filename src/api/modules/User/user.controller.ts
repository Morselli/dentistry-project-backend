import { Request, Response } from "express"
import { UserService } from "./user.service"

export class UserController {

  private static userService = new UserService()

  async create(request: Request, response: Response): Promise<Response> {

    const { firstName, lastName, cro, email, password, role } = request.body

    try {
      const user = await UserController.userService.create({
        firstName,
        lastName,
        cro,
        email,
        password,
        role
      })

      return response.json(user)
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async updateById(request: Request, response: Response): Promise<Response> {

    const { id } = request.params
    const { firstName, lastName, cro, email, password, role } = request.body

    try {
      const updatedUser = await UserController.userService.updateById(Number(id), {
        firstName,
        lastName,
        cro,
        email,
        password,
        role
      })

      return response.json(updatedUser)
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async removeById(request: Request, response: Response): Promise<Response> {

    const { id } = request.params

    try {
      await UserController.userService.removeById(Number(id))

      return response.status(204).json({})
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async findById(request: Request, response: Response): Promise<Response> {

    const { id } = request.params

    try {
      const user = await UserController.userService.findById(Number(id))

      const formattedUser = {
        firstName: user.first_name,
        lastName: user.last_name,
        cro: user.cro,
        email: user.email,
        role: user.role,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
        deletedAt: user.deleted_at
      }
      
      return response.json(formattedUser)
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async findAll(request: Request, response: Response): Promise<Response> {

    try {
      
      const users = await UserController.userService.findAll()

      return response.json(users)
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}