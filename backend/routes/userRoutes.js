import express from 'express'
import User from '../models/userModel.js'
import { generateToken } from '../utils.js'
import expressAsyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'

const userRouter = express.Router()

userRouter.post(
    '/signin', expressAsyncHandler(async (req, res) =>{
        
        const email = req.body.email
        const password = req.body.password

        if(!email){
            res.status(422).json({message: 'colocar email'})
            return
        }

        if(!password){
            res.status(422).json({message: 'colocar senha'})
            return
        }

        const user = await User.findOne({email: email})


        if(user){

            if(bcrypt.compareSync(password, user.password)){

                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user)
                })
                return
            }

        }

        res.status(401).send({ message: 'Usuário não encontrado'})
    })
)

export default userRouter