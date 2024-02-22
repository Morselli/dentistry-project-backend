import { Router } from "express"
import { UserController } from "../api/modules/User/user.controller"

const router = Router()

const userController = new UserController()

router.post('/user/create', userController.create)
router.put('/user/:id', userController.updateById)
router.delete('/user/:id', userController.removeById)

export { router }