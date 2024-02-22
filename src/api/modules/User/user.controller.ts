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
      const updatedUser = await UserController.userService.updateById(id, {
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
      await UserController.userService.removeById(id)

      return response.status(204).json({})
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}