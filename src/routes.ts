import express from "express"
const routes = express.Router()


import UserController from "./controllers/userController"

const userController = new UserController

routes.get("/users", userController.index)
routes.get("/users/:id", userController.show)
routes.post("/users", userController.create)
routes.put("/users/:id", userController.update)
routes.delete("/users/:id", userController.destroy)

export default routes