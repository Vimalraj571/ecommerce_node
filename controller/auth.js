import express from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from "../model/user.js"
import Catalog from "../model/catalog.js"

const authRoute = express.Router()

authRoute.post('/register', async (request, response) => {
    const { username, password, type } = request.body
    const saltRound = 10

    const isUserFound = await User.findOne({ username })

    if (isUserFound) {
        return response.status(400).json({
            error: 'username must be unique'
        })
    }

    const passwordHash = await bcrypt.hash(password, saltRound)

    const user = new User({
        username,
        type,
        passwordHash
    })

    const savedUser = await user.save()

    if (type == "seller") {
        const catelog = new Catalog({
            sellerId: savedUser._id,
            catalog: []
        })
        await catelog.save()
    }
    response.status(200).send(savedUser.toJSON())
})

authRoute.post('/login', async (request, response) => {
    const { username, password } = request.body

    const user = await User.findOne({ username })

    const isPasswordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash)

    if (!(isPasswordCorrect && user)) {
        return response.status(401).json({
            error: 'invalid user or password'
        })
    }

    const userToken = {
        username: user.username,
        id: user.id
    }

    const token = jwt.sign(userToken, process.env.SECRET, { expiresIn: 60 * 60 })

    response.status(200).send({ token, username: user.username, name: user.name })
})

export default authRoute