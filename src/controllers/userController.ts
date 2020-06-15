import { Request, Response } from "express"
import mongoose from "mongoose"
import "../database/models/UserModel"
const users = mongoose.model("users")

class userController {
    async index (req: Request, res: Response) {
        try { 
            const Users = await users.find()

            if (Users.length === 0) {
                return res.status(404).send("Can not find any users")
            }

            return res.json(Users)
        } catch (err) {
            return res.status(500).send("Failed do lookup users")
        }
    }
    async create(req: Request, res: Response) {
        try {
            const { name, email } = req.body
            const data = {name, email}

            const user = await users.create(data)

            if (!user) {
                return res.status(400).send("Failed to create the user, try again")
            }

            return res.json(user)
        } catch (err) {
            return res.status(500).send("An error ocurred while creating user")
        }
    }
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { name, email } = req.body

            const newUser = await users.findOneAndUpdate({_id: id}, {
                name,
                email
            })

            if(!newUser) {
                res.status(400).send("User does not exists to be updated")
            }

            return res.json(newUser) // return the latest user
        } catch (err) {
            return res.status(500).send("Failed to update user")
        }
    }
    async destroy(req: Request, res: Response) {
        try {
            const { id } = req.params
        
            const deletedUser = await users.findOneAndDelete({_id: id})

            return res.json(deletedUser)            
        } catch (err) {
            return res.status(404).send("Failed to lookup user")
        }
    }
    async show(req: Request, res: Response) {
        try {
            const { id } = req.params

            const User = await users.findOne({_id: id})

            if (!User) {
                return res.status(404).json("There is no user whith this id")
            }

            return res.json(User)
        } catch(err) {
            return res.status(404).send("This user probably does not exists")
        }
    }
}

export default userController